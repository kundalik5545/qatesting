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
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { basicDetails } from "@/data/BasicSetting";

// All pages
import InputPage from "../_components/InputPage";
import SelectPage from "../_components/SelectPage";
import ButtonPage from "../_components/ButtonPage";
import ElementsPage from "../_components/ElementsPage";
import LinksPage from "../_components/LinksPage";
import AlertPage from "../_components/AlertPage";
import { Calendar, Clock, GraduationCap } from "lucide-react";

// Fetch all blog slugs dynamically
export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), "Blog/ElementBlogs");
  return fs.readdirSync(postsDirectory).map((filename) => ({
    slug: filename.replace(/\.md$/, ""),
  }));
}

// Generate dynamic metadata for each blog post
export async function generateMetadata({ params }) {
  const { slug } = params;
  if (!slug) return notFound();

  const filePath = path.join(process.cwd(), "Blog/ElementBlogs", `${slug}.md`);
  if (!fs.existsSync(filePath)) return notFound();

  const { data } = matter(fs.readFileSync(filePath, "utf-8"));

  return {
    title: `${data.title?.slice(0, 60) || "New Blog Post"}`,
    description: data.description?.slice(0, 160) || "Alternate description",
    keywords: data.keywords || "automation, selenium",
    other: {
      author: data.author || "Random Coders",
    },
    openGraph: {
      title: data.title || "QA Playground - Practice automation",
      description: data.description?.slice(0, 200) || "Practice automation",
      url: `${basicDetails.websiteURL}/practice/${slug}`,
      images: data.image ? [{ url: data.image }] : [],
    },
    alternates: {
      canonical: `${basicDetails.websiteURL}/practice/${slug}`,
    },
  };
}

// Blog Post Component
const PracticePage = async ({ params }) => {
  const { slug } = params;
  const filePath = path.join(process.cwd(), "Blog/ElementBlogs", `${slug}.md`);

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
      pom: ElementsPage,
      input: InputPage,
      button: ButtonPage,
      select: SelectPage,
      links: LinksPage,
      alert: AlertPage,
    };

    const DynamicComponent = componentMapping[slug] || null;

    return (
      <div className="container mx-auto max-w-5xl text-foreground bg-background p-2">
        <div className="page-tile">
          <h1 className="text-2xl sm:text-3xl  font-semibold text-gray-900 dark:text-white text-start transition-all duration-300 ease-in-out">
            {data.title}
          </h1>

          <div className="flex sm:flex-row items-center gap-2 sm:gap-4 text-gray-500 mb-2 py-1 transition-all duration-300 ease-in-out">
            <span className="text-sm">By {data.author || "Admin"}</span>
            <p className="text-sm flex items-center gap-1">
              <Calendar size={20} />{" "}
              {new Date(data.date)
                .toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })
                .replace(/ /g, " ")}
            </p>
          </div>
        </div>
        <hr />

        {/* Main Testing PlayGround */}
        <section className="Practice-section pb-20">
          {DynamicComponent && <DynamicComponent />}
        </section>

        <hr className="pb-2" />

        <article className="alert-article">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-white text-start transition-all duration-300 ease-in-out pb-5">
            {data.title}
          </h2>

          {data.image && (
            <div className="sm:w-[600px] sm:h-[300px] grid grid-cols-1 justify-center items-center ">
              <Image
                src={data.image}
                alt={data.title}
                width={600}
                height={250}
                className="w-full h-auto object-cover rounded-lg"
                priority
              />
            </div>
          )}

          <br className="hidden sm:block" />
          <br className="hidden sm:block" />
          <div
            dangerouslySetInnerHTML={{ __html: htmlContent }}
            className="prose dark:prose-invert w-full transition-all duration-300 ease-in-out pt-3"
          />
        </article>
      </div>
    );
  } catch (error) {
    console.error("Error reading blog post:", error);
    return notFound();
  }
};

export default PracticePage;
