import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import rehypeDocument from "rehype-document";
import rehypeFormat from "rehype-format";
import remarkGfm from "remark-gfm";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from "@rehype-pretty/transformers";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { basicDetails } from "@/data/BasicSetting";

// Fetch all blog slugs dynamically
export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), "Blog/AutomationBlog");
  return fs.readdirSync(postsDirectory).map((filename) => ({
    slug: filename.replace(/\.md$/, ""),
  }));
}

// Generate dynamic metadata for each blog post
export async function generateMetadata({ params }) {
  const { slug } = params;
  if (!slug) return notFound();

  const filePath = path.join(
    process.cwd(),
    "Blog/AutomationBlog",
    `${slug}.md`
  );
  if (!fs.existsSync(filePath)) return notFound();

  const { data } = matter(fs.readFileSync(filePath, "utf-8"));

  return {
    title: data.title?.slice(0, 60) || "New Blog Post",
    description: data.description?.slice(0, 160) || "Alternate description",
    keywords: data.keywords || "automation, selenium",
    other: { author: data.author || "Random Coders" },
    openGraph: {
      title: data.title || "QA Playground - Practice automation",
      description: data.description?.slice(0, 200) || "Practice automation",
      url: `${basicDetails.websiteURL}/elements/${slug}`,
      images: data.image ? [{ url: data.image, alt: data.title }] : [],
    },
    alternates: {
      canonical: `${basicDetails.websiteURL}/blog/${slug}`,
    },
  };
}

// Blog Post Component
const BlogPost = async ({ params }) => {
  const { slug } = params;
  const filePath = path.join(
    process.cwd(),
    "Blog/AutomationBlog",
    `${slug}.md`
  );

  if (!fs.existsSync(filePath)) return notFound();

  try {
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { content, data } = matter(fileContent);

    const htmlContent = (
      await unified()
        .use(remarkParse)
        .use(remarkGfm)
        .use(remarkRehype)
        .use(rehypeDocument, { title: data.title || "Blog Post" })
        .use(rehypeFormat)
        .use(rehypeStringify)
        .use(rehypeSlug)
        .use(rehypeAutolinkHeadings, { behavior: "wrap" })
        .use(rehypePrettyCode, {
          theme: "github-dark",
          transformers: [
            transformerCopyButton({
              visibility: "always",
              feedbackDuration: 3000,
            }),
          ],
        })
        .process(content)
    ).toString();

    return (
      <div className="container mx-auto max-w-5xl text-foreground bg-background px-4 md:px-6 py-6">
        <article className="pt-5">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{data.title}</h1>
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-gray-500 mb-3">
            <Badge className="p-1">By {data.author || "Admin"}</Badge>
            <p className="text-sm">
              {new Date(data.date)
                .toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })
                .replace(/ /g, " ")}
            </p>
          </div>

          {data.image && (
            <div className="mb-6">
              <Image
                src={data.image}
                alt={data.title}
                width={800}
                height={450}
                className="w-full h-auto object-cover rounded-lg shadow-md"
                priority
              />
            </div>
          )}

          <div
            dangerouslySetInnerHTML={{ __html: htmlContent }}
            className="prose dark:prose-invert w-full"
          />
        </article>
      </div>
    );
  } catch (error) {
    console.error("Error reading blog post:", error);
    return notFound();
  }
};

export default BlogPost;
