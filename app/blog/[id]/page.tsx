import Link from 'next/link';

interface Blog {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default async function BlogPost({
  params}: any) {
  console.log('params:', params);
  console.log('typeof params.id:', typeof params.id);
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post: Blog = await res.json();

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <article className="bg-white p-6 rounded-md shadow-md border">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{post.title}</h1>
        <p className="text-gray-700 leading-relaxed">{post.body}</p>
      </article>

      <div className="mt-6">
        <Link
          href="/"
          className="inline-block text-blue-600 hover:text-blue-800 hover:underline transition"
        >
          ← 返回列表
        </Link>
      </div>
    </main>
  );
}