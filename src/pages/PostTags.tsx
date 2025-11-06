import { useParams, useNavigate, Link } from "react-router-dom";
import usePostsWithTags from "../hooks/useTags";
import Loading from "../components/Loading";

export default function PostsTags() {
  // Get the tag parameter from the route URL
  const { tag } = useParams();

  // Navigation hook for programmatic routing
  const navigate = useNavigate();

  // Fetch posts that have the specified tag
  // Using non-null assertion operator (!) since we expect tag to be defined
  const { data: posts, isLoading } = usePostsWithTags(tag!);

  // Show loading state while fetching posts
  if (isLoading) {
    return <Loading />;
  }

  // Handle case where no posts are found for the given tag
  if (!posts?.length) return <p>No posts found for tag: {tag}</p>;

  // Render list of posts with the specified tag
  const tagPost = posts.map((post: any, index: number) => {
    // Destructure post fields from Contentful response
    const { title, description, media, uniqueUrl } = post.fields;

    return (
      <article
        key={post.sys.id} // Use Contentful system ID as unique key
        className="flex items-center justify-center p-3 min-w-2xl odd:bg-gray-200 even:bg-bg-color"
      >
        {/* Post container with alternating background colors */}
        <div className="flex items-center gap-5">
          {/* Post number indicator */}
          <span className="text-gray-600 text-sm">#{index + 1}</span>

          {/* Link to individual blog post page */}
          <Link to={`/blog/${uniqueUrl}`}>
            {/* Blog post title */}
            <h2 className="font-semibold text-sky-600 text-lg md:text-2xl">
              {title}
            </h2>

            {/* Blog post description with truncation on small screens */}
            <p className="text-gray-600 text-sm overflow-ellipsis overflow-hidden whitespace-nowrap max-w-[25ch] sm:max-w-fit">
              {description}
            </p>
          </Link>
        </div>

        {/* Note: Media field is destructured but not used in rendering */}
        {/* Consider adding image thumbnail here if needed */}
      </article>
    );
  });

  return (
    <main className="space-y-2 px-5 flex items-center flex-col">
      {/* Page title showing the tag name */}
      <h1 className="text-3xl md:text-5xl mx-auto text-center font-bold text-p-color">
        {tag}
      </h1>

      {/* Back to all posts button */}
      <button
        onClick={() => navigate("/blog")}
        className="text-bold text-base md:text-lg cursor-pointer text-p-color hover:text-sky-500 transition-all duration-300 ease-in-out underline my-3"
      >
        {/* Arabic text: "Back to all articles" */}
        العودة لجميع المقالات 🔙
      </button>

      {/* Render all posts with the specified tag */}
      {tagPost}
    </main>
  );
}
