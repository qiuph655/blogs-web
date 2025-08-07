import Link from "next/link";

interface blog{
  userId:number,
  id:number,
  title:string,
  body:string
}


export default async function BlogList() {
 
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const blogs =await res.json();


  return (
      <>
  <main className="max-w-3xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">📚 博客列表</h2>
      <ul className="space-y-4">
        {blogs.slice(0, 5).map((blog: blog) => (
          <li
            key={blog.id}
            className="border rounded-md p-4 hover:shadow-md transition"
          >
            <Link href={`/blog/${blog.id}`}>
              <span className="text-lg font-medium text-blue-600 hover:underline">
                {blog.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </main>

      </>
  );
}