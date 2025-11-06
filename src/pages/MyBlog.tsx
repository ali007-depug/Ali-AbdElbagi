import { Link } from "react-router-dom";
import useBlogs from "../hooks/useBlogs";
export default function MyBlog() {
  const { data: posts, isLoading, isError } = useBlogs();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error loading blog posts.</div>;
  }

  const blogPosts = posts?.map((post: any) => (
    <div key={post.sys.id} className="flex items-center  odd:bg-gray-200 even:bg-bg-color p-3 justify-center-safe gap-10">
      <div>
      <Link to={`/blog/${post.fields.uniqueUrl}`}>
        <h3 className="font-semibold text-sky-600 text-2xl">{post.fields.title}</h3>
      </Link>
      <p className="text-gray-600 text-sm">{post.fields.description}</p>
      </div>
      <p className="text-gray-600 text-sm">{post.fields.date}</p>
    </div>
  ));

  return (
    <section className="mb-10">
      {/* title */}
      <h1 className="text-5xl mx-auto text-center font-bold text-p-color">المقالات</h1>
      {/* subtitle */}
      <h2 className="text-3xl font-semibold text-s-color ms-10">أحدث المقالات ✍️</h2>

      <div className="flex gap-8 px-50 justify-center">
    {/* aricles nav + thumbinle */}
      {/* thumbinl */}
      {/* <img src="article.png" alt="illustration img" width={100} height={100} className="w-1/3 order-2 fixed left-0" /> */}
      {/* article nav */}
      <div className="space-y-4 mt-8 w-full text-center bg-p-color/4 min-h-[80vh] p-8 rounded-lg ">
      {/* recent blog */}
      {blogPosts}
      </div>
      </div>
    </section>
  );
}
