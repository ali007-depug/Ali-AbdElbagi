import { Link, useNavigate } from "react-router-dom";
import useBlogs from "../hooks/useBlogs";
import Loading from "../components/Loading";

export default function MyBlog() {
  // Fetch blog posts data using custom hook
  const { data: posts, isLoading, isError } = useBlogs();

  // Navigation hook for programmatic routing
  const navigate = useNavigate();

  // Show loading state while data is being fetched
  if (isLoading) {
    return <Loading />;
  }

  // Show error message if data fetching fails
  if (isError) {
    return <div>Error loading blog posts.</div>;
  }

  // Render blog posts list with alternating background colors
  const blogPosts = posts?.map((post: any, index: number) => (
    <div
      key={post.sys.id} // Use Contentful system ID as unique key
      className="flex items-center odd:bg-gray-200 even:bg-bg-color p-3 justify-center-safe gap-10"
    >
      <div className="flex flex-col items-center gap-4">
        {/* Blog post title link */}
        <Link
          to={`/blog/${post.fields.uniqueUrl}`}
          className="flex items-center gap-2"
        >
          {/* Post number indicator */}
          <span className="text-gray-600 text-sm">#{index + 1}</span>
          {/* Blog post title */}
          <h3 className="font-semibold text-sky-600 text-lg md:text-2xl">
            {post.fields.title}
          </h3>
        </Link>
        {/* Blog post description with truncation on small screens */}
        <p className="text-gray-600 text-sm overflow-ellipsis overflow-hidden whitespace-nowrap max-w-[25ch] sm:max-w-fit">
          {post.fields.description}
        </p>
      </div>
      {/* Publication date */}
      <p className="text-gray-600 text-sm">{post.fields.date}</p>
    </div>
  ));

  // Extract and flatten all tags from all posts
  const postTage = posts?.map((post: any) => post.fields.tag).flat();

  // Calculate tag counts using reduce
  const tagWithCount = postTage?.reduce((acc: any, tag: string) => {
    acc[tag] = (acc[tag] || 0) + 1; // Increment count for each tag
    return acc;
  }, {});

  // Render clickable tags with counts
  const allTags = Object.entries(tagWithCount  || {}).map(([tag, count]) => (
    <div
      key={tag}
      className="flex gap-2 items-center mb-2 bg-p-color w-fit px-3 py-2 rounded-md cursor-pointer hover:bg-s-color/80 transition-all duration-300 ease-in-out"
      // Navigate to tag-specific page on click
      onClick={() => navigate(`/blog/tags/${tag}`)}
    >
      {/* Tag name */}
      <span className="text-white font-medium">{tag}</span>
      {/* Tag count badge */}
      <span className="bg-s-color text-white text-xs font-semibold px-2 py-1 rounded-full">
        {count as number}
      </span>
    </div>
  ));

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

      <div className="flex max-md:flex-col gap-5">
        {/* Blog posts section */}
        <div className="space-y-4 mt-4 w-full text-center bg-p-color/4 in-h-[80vh] p-8 rounded-lg md:basis-5xl max-md:order-2">
          {/* Render all blog posts */}
          {blogPosts}
        </div>

        {/* Tags sidebar */}
        <div className="md:basis-1/4 p-5 bg-p-color/4 rounded-lg h-fit mt-4 md:sticky top-20 md:self-start">
          <h3 className="text-xl font-semibold mb-4 text-s-color">التصنيفات</h3>
          {/* Render all tags with counts */}
          {allTags}
        </div>
      </div>
    </section>
  );
}