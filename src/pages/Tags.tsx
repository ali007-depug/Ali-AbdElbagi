import { useParams, useNavigate, Link } from "react-router-dom";
import usePostsWithTags from "../hooks/useTags";
import Loading from "../components/Loading";
export default function Tags() {
  const { tag } = useParams();
  const navigate = useNavigate();

  const { data: posts, isLoading } = usePostsWithTags(tag!);

  if (isLoading) {
    return <Loading />;
  }
  if (!posts?.length) return <p>No posts found for tag: {tag}</p>;

  //   posts

  const tagPost = posts.map((post: any, index: number) => {
    const { title, description, media, uniqueUrl } = post.fields;
    return (
      <article
        key={post.sys.id}
        className="flex items-center justify-center p-3 min-w-2xl odd:bg-gray-200 even:bg-bg-color"
      >
        {/* post */}
        <div className="flex items-center gap-5">
          <span className="text-gray-600 text-sm">#{index + 1}</span>
          <Link to={`/blog/${uniqueUrl}`}>
            {/* title */}
            <h2 className="font-semibold text-sky-600 text-lg md:text-2xl">
              {title}
            </h2>
            {/* desc */}
            <p className="text-gray-600 text-sm overflow-ellipsis overflow-hidden whitespace-nowrap max-w-[25ch] sm:max-w-fit">
              {description}
            </p>
          </Link>
        </div>

        
      </article>
    );
  });

  return (
    <main className="space-y-2 px-5 flex items-center flex-col">
      <h1 className="text-3xl md:text-5xl mx-auto text-center font-bold text-p-color">
        {tag}
      </h1>

      <button
        onClick={() => navigate("/blog")}
        className="text-bold text-base md:text-lg cursor-pointer text-p-color hover:text-sky-500 transition-all duration-300 ease-in-out underline my-3"
      >
        العودة لجميع المقالات 🔙
      </button>

      {tagPost}
    </main>
  );
}
