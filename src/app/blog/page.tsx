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
    return {
      slug,
      title: data.title || "Untitled",
      date: data.date || "Unknown date",
      description: data.description || "",
    };
  });

  return (
    <>
      <Navbar />
      <section
        className="min-h-screen flex flex-col items-center justify-center p-10 text-white"
        style={{
          backgroundImage: `url('/images/lighthouse.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="w-full max-w-2xl text-center">
          <h1 className="text-4xl font-bold mb-10">Blog</h1>

          <ul className="space-y-10 flex flex-col items-center">
            {posts.map((post) => (
              <li key={post.slug} className="w-full">
                <Link href={`/blog/${post.slug}`}>
                  <div className="bg-black bg-opacity-50 p-6 rounded-xl shadow-md hover:bg-opacity-70 transition text-left">
                    <h2 className="text-2xl font-semibold text-orange-300 hover:underline text-center">
                      {post.title}
                    </h2>
                    <p className="text-sm text-gray-400 text-center mt-1">
                      {new Date(post.date).toLocaleDateString()}
                    </p>
                    <p className="mt-3 text-white text-center">
                      {post.description}
                    </p>
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
