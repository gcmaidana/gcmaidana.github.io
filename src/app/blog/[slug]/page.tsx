import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Markdown from "markdown-to-jsx";

export async function generateStaticParams() {
  const postsDir = path.join(process.cwd(), "content/posts");
  const files = fs.readdirSync(postsDir);

  return files.map((fileName) => ({
    slug: fileName.replace(".md", ""),
  }));
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), "content/posts", `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return notFound();
  }

  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);

  return (
    <>
      <Navbar />
      <section
        className="min-h-screen flex items-center justify-center px-4 py-20"
        style={{
          backgroundImage: `url('/images/lighthouse.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="bg-black bg-opacity-60 rounded-xl p-8 max-w-3xl w-full text-white shadow-lg">
          <h1 className="text-4xl font-bold text-purple-300 mb-4">
            {data.title}
          </h1>
          <p className="text-sm text-gray-400 mb-6">
            {new Date(data.date).toLocaleDateString()}
          </p>

          <Markdown
            options={{
              overrides: {
                h2: {
                  props: {
                    className:
                      "text-3xl font-bold text-orange-400 mt-10 mb-4 border-b border-orange-500 pb-1",
                  },
                },
                p: {
                  props: {
                    className: "mb-5 leading-relaxed text-lg text-white",
                  },
                },
                li: {
                  props: {
                    className: "ml-6 list-disc mb-2 text-white",
                  },
                },
                a: {
                  props: {
                    className:
                      "text-blue-400 underline hover:text-blue-300 transition-colors",
                  },
                },
                img: {
                  props: {
                    className: "my-6 mx-auto rounded-lg shadow-md max-w-full",
                  },
                },
                hr: {
                  props: {
                    className: "my-10 border-t border-purple-500 opacity-50",
                  },
                },
              },
            }}
          >
            {content}
          </Markdown>
        </div>
      </section>
    </>
  );
}
