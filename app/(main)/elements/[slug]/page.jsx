import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import rehypeDocument from "rehype-document";
import rehypeFormat from "rehype-format";
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

import ButtonPage from "../_components/ButtonPage";
import RadioButtonPage from "../_components/RadioButton";
import TextBoxPage from "../_components/TextBoxPage";
import UploadDownloadPage from "../_components/UploadPage";
import LinksPage from "../_components/LinksPage";
import CheckBoxPage from "../_components/CheckBoxPage";
import DynamicPropsPage from "../_components/DynamicPropertiesPage";

// Fetch all blog slugs dynamically
export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), "Blog/elements");
  return fs.readdirSync(postsDirectory).map((filename) => ({
    slug: filename.replace(/\.md$/, ""),
  }));
}

// Generate dynamic metadata for each blog post
export async function generateMetadata({ params }) {
  const { slug } = params;
  if (!slug) return notFound();

  const filePath = path.join(process.cwd(), "Blog/elements", `${slug}.md`);
  if (!fs.existsSync(filePath)) return notFound();

  const { data } = matter(fs.readFileSync(filePath, "utf-8"));

  return {
    title: data.title || "New Blog Post",
    description: data.description?.slice(0, 150) || "Alternate description",
    keywords: data.keywords || "automation, selenium",
    openGraph: {
      title: data.title || "QA Playground - Practice automation",
      description: data.description?.slice(0, 200) || "Practice automation",
      url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/elements/${slug}`,
      images: data.image ? [{ url: data.image }] : [],
    },
    canonical: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/elements/${slug}`,
  };
}

// Blog Post Component
const BlogPost = async ({ params }) => {
  const { slug } = params;
  const filePath = path.join(process.cwd(), "Blog/elements", `${slug}.md`);

  if (!fs.existsSync(filePath)) return notFound();

  try {
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { content, data } = matter(fileContent);

    const htmlContent = (
      await unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypeDocument, { title: data.title || "Blog Post" })
        .use(rehypeFormat)
        .use(rehypeStringify)
        .use(rehypeSlug)
        .use(rehypeAutolinkHeadings)
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

    // Mapping slug to respective components
    const componentMapping = {
      "text-box": TextBoxPage,
      "check-box": CheckBoxPage,
      "radio-button": RadioButtonPage,
      button: ButtonPage,
      links: LinksPage,
      "dynamic-properties": DynamicPropsPage,
      "upload-download": UploadDownloadPage,
    };

    const DynamicComponent = componentMapping[slug] || null;

    return (
      <div className="container mx-auto max-w-5xl text-foreground bg-background">
        <h1 className="gradient-subTitle text-3xl">{data.title}</h1>

        <section className="Practice-section">
          {DynamicComponent && <DynamicComponent />}
        </section>

        <article className="pt-5">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{data.title}</h2>
          <div className="flex sm:flex-row gap-2 sm:gap-4 text-gray-500 mb-2">
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
            <div className="mb-4">
              <Image
                src={data.image}
                alt={data.title}
                width={800}
                height={450}
                className="w-full h-auto object-cover rounded-lg"
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
