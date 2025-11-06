import { Link, useNavigate } from "react-router-dom";
import useBlogs from "../hooks/useBlogs";
import Loading from "../components/Loading";
export default function MyBlog() {
  const { data: posts, isLoading, isError } = useBlogs();

  const navigate = useNavigate();

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <div>Error loading blog posts.</div>;
  }

  // render posts
  const blogPosts = posts?.map((post: any, index: number) => (
    <div
      key={post.sys.id}
      className="flex items-center  odd:bg-gray-200 even:bg-bg-color p-3 justify-center-safe gap-10"
    >
      <div className="flex flex-col items-center gap-4">
        <Link
          to={`/blog/${post.fields.uniqueUrl}`}
          className="flex  items-center gap-2"
        >
          <span className="text-gray-600 text-sm">#{index + 1}</span>
          <h3 className="font-semibold text-sky-600 text-lg md:text-2xl">
            {post.fields.title}
          </h3>
        </Link>
        <p className="text-gray-600 text-sm overflow-ellipsis overflow-hidden whitespace-nowrap max-w-[25ch] sm:max-w-fit ">
          {post.fields.description}
        </p>
      </div>
      <p className="text-gray-600 text-sm">{post.fields.date}</p>
    </div>
  ));

  const postTage = posts?.map((post: any) => post.fields.tag).flat();

  const tagWithCount = postTage?.reduce((acc: any, tag: string) => {
    acc[tag] = (acc[tag] || 0) + 1;
    return acc;
  }, {});

  const allTags = Object.entries(tagWithCount || {}).map(([tag, count]) => (
    <div
      key={tag}
      className="flex gap-2 items-center mb-2 bg-p-color w-fit px-3 py-2 rounded-md cursor-pointer hover:bg-s-color/80 transition-all duration-300 ease-in-out"
      onClick={() => navigate(`/blog/tags/${tag}`)}
    >
      <span className="text-white font-medium">{tag}</span>
      <span className="bg-s-color text-white text-xs font-semibold px-2 py-1 rounded-full">
        {count}
      </span>
    </div>
  ));

  return (
    <section className="mb-10">
      {/* title */}
      <h1 className="text-3xl md:text-5xl mx-auto text-center font-bold text-p-color">
        المقالات
      </h1>
      {/* subtitle */}
      <h2 className="text-2xl mt-4 md:text-3xl font-semibold text-s-color ms-10">
        أحدث المقالات ✍️
      </h2>

      <div className="flex max-md:flex-col  gap-5">
        {/* article nav */}
        <div className="space-y-4 mt-4 w-full text-center bg-p-color/4 in-h-[80vh] p-8 rounded-lg md:basis-5xl max-md:order-2 ">
          {/* recent blog */}
          {blogPosts}
        </div>
        {/* tags */}
        <div className="md:basis-1/4 p-5 bg-p-color/4 rounded-lg h-fit mt-4 md:sticky top-20 md:self-start">
          <h3 className="text-xl font-semibold mb-4 text-s-color">التصنيفات</h3>
          {allTags}
        </div>
      </div>
    </section>
  );
}
