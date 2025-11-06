import { useNavigate, useParams } from "react-router-dom";
import useBlogPost from "../hooks/useBlogPost";
import Loading from "../components/Loading";

export default function BlogPost() {
  const { uniqueUrl } = useParams();
  const navigate = useNavigate();

  const { data: post, isLoading, isError } = useBlogPost(uniqueUrl as string);

  if (isLoading) {
    return <Loading />;
  }
  if (isError || !post) return <p>Post not found</p>;

  const { title, description, media, content, tag } = post?.fields as any;

  return (
    <main className="text-center space-y-2 max-md:px-5">
      {/* all post */}
      <button
        onClick={() => navigate("/blog")}
        className="text-bold text-base md:text-lg cursor-pointer text-p-color hover:text-sky-500 transition-all duration-300 ease-in-out underline my-3"
      >
        العودة لجميع المقالات 🔙
      </button>
      {/* title */}
      <h1 className="text-sky-600 font-bold text-xl md:text-3xl my-3 ">
        {title}
      </h1>
      {/* description */}
      <p className="text-base md:text-xl font-semibold text-s-color mt-3 mb-8">
        {description}
      </p>
      {/* content */}
      <p className="max-w-2xl leading-10 mb-4 text-balance mx-auto text-base md:text-lg font-medium text-p-color">
        {content}
      </p>
      {/* img */}
      <div className="overflow-hidden rounded-md shadow-md shadow-sky-800 w-120 h-fit mx-auto">
        {media && (
          <img
            src={media?.fields?.file?.url}
            alt={title}
            width={100}
            height={100}
            className="w-full object-contain"
          />
        )}
      </div>

      {/* tag */}
      <span className="inline-block mb-5 bg-p-color text-sky-400 text-xs font-semibold px-2 py-1 rounded-md">
        #{tag}
      </span>
    </main>
  );
}
