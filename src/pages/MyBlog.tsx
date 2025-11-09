import useBlogs from "../hooks/useBlogs";
import { AutoSkeletonLoader } from "react-loadly";
import BlogSeklton from "../components/BlogSkelton";
import Posts from "../components/Posts";
import TagsNav from "../components/TagsNav";
export default function MyBlog() {
  // Fetch blog posts data using custom hook
  const { data: posts, isLoading, isError } = useBlogs();

  // Show loading state while data is being fetched
  if (isLoading) {
    return (
      <AutoSkeletonLoader component={<BlogSeklton />} inheritStyles shimmer />
    );
  }

  // Show error message if data fetching fails
  if (isError) {
    return <div>Error loading blog posts.</div>;
  }

  return (
    <section className="mb-10">
      {/* Main title */}
      <h1 className="text-3xl md:text-5xl mx-auto text-center font-bold text-p-color">
        المقالات
      </h1>

      {/* Subtitle */}
      <h2 className="text-2xl mt-4 md:text-3xl font-semibold text-s-color ms-10">
        أحدث المقالات ✍️
      </h2>
      {/* post + tags Wrapper */}
      <div className="flex max-md:flex-col px-8 gap-5">
        {/*posts section wrapper */}
        <article className="space-y-4 mt-4 w-full min-h-[80dvh] text-center bg-p-color sm:px-8 sm:py-4 rounded-lg md:basis-[80%] md:w-[70%] max-md:order-2">
          {/* Render all blog posts */}
          <Posts posts={posts} />
        </article>

        {/* Tags sidebar */}
        <div className="md:basis-[20%]  p-5 bg-p-color rounded-lg h-fit mt-4 md:sticky md:top-20 md:self-start ">
          <TagsNav posts={posts} />
        </div>
      </div>
    </section>
  );
}
