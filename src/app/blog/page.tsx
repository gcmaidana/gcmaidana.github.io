import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function BlogPage() {
  const postsDir = path.join(process.cwd(), "content/posts");
  const files = fs.readdirSync(postsDir);

  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const fileContent = fs.readFileSync(`${postsDir}/${fileName}`, "utf8");
    const { data } = matter(fileContent);
    return { slug, ...data };
  });

  return (
    <>
      <Navbar />
      <section
        className="min-h-screen text-white flex flex-col items-center justify-center p-10"
        style={{
          backgroundImage: `url('/images/lighthouse.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="w-full max-w-2xl text-center">
          <h1 className="text-4xl font-bold mb-10">Blog</h1>

          <ul className="space-y-10">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link href={`/blog/${post.slug}`}>
                  <div className="hover:underline cursor-pointer"></div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
