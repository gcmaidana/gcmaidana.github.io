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

  // Sort posts from newest to oldest
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

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
                  <div className="hover:underline cursor-pointer">
                    <h2 className="text-2xl font-semibold text-purple-400">
                      {post.title}
                    </h2>
                    <p className="text-gray-400 text-sm mb-1">
                      {new Date(post.date).toLocaleDateString()}
                    </p>
                    <p className="text-gray-300">{post.description}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
