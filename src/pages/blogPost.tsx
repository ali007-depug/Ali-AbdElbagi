import { useNavigate, useParams } from "react-router-dom";
import useBlogPost from "../hooks/useBlogPost";
import Error from "./Error";
import { useTranslation } from "react-i18next";
import MarkdownRendering from "../components/MarkdownRendering";
import { AutoSkeletonLoader } from "react-loadly";

export default function BlogPost() {
  // Translation hook for internationalization
  const { t } = useTranslation();
  // Get the unique URL parameter from the route
  const { uniqueUrl } = useParams();

  // Navigation hook for programmatic routing
  const navigate = useNavigate();

  // Fetch individual blog post data using custom hook
  const { data: post, isLoading, isError } = useBlogPost(uniqueUrl as string);

  // Show loading spinner while data is being fetched
  if (!isLoading) {
    return (
      <AutoSkeletonLoader
      className="text-center mx-auto flex justify-center w-full md:w-[95%] max-w-lg px-4 py-8 md:px-5 md:py-9 "
        component={
          <main className="text-center space-y-2 max-md:px-5">
            {/* Back to all posts button */}
            <button
              onClick={() => navigate("/blog")}
              className="text-bold text-base md:text-lg cursor-pointer text-p-color hover:text-sky-500  transition-all duration-300 ease-in-out underline my-3"
            >
              {/* Arabic text: "Back to all articles" */}
              العودة لجميع المقالات 🔙
            </button>

            {/* Blog post title */}
            <h1 className="text-sky-600 font-bold text-xl md:text-3xl my-3 ">
              lorem lorem lorem lorem
            </h1>

            {/* Blog post description/subtitle */}
            <p className="text-base md:text-xl font-semibold text-s-color mt-3 mb-8">
              lorem lorem lorem lorem lorem lorem lorem
            </p>

            {/* Main blog post content */}
            <p className="max-w-xl bg-red200 leading-10 mb-4 text-start max-sm:px-5 text-balance mx-auto text-base md:text-lg font-medium text-p-color whitespace-pre-line">
              {/* {content} */}
            </p>
            <p className="max-w-xl bg-red200 leading-10 mb-4 text-start max-sm:px-5 text-balance mx-auto text-base md:text-lg font-medium text-p-color whitespace-pre-line">
              {/* {content} */}
            </p>
            <p className="max-w-xl bg-red200 leading-10 mb-4 text-start max-sm:px-5 text-balance mx-auto text-base md:text-lg font-medium text-p-color whitespace-pre-line">
              {/* {content} */}
            </p>
            <p className="max-w-xl bg-red200 leading-10 mb-4 text-start max-sm:px-5 text-balance mx-auto text-base md:text-lg font-medium text-p-color whitespace-pre-line">
              {/* {content} */}
            </p>
            <p className="max-w-xl bg-red200 leading-10 mb-4 text-start max-sm:px-5 text-balance mx-auto text-base md:text-lg font-medium text-p-color whitespace-pre-line">
              {/* {content} */}
            </p>
            <p className="max-w-xl bg-red200 leading-10 mb-4 text-start max-sm:px-5 text-balance mx-auto text-base md:text-lg font-medium text-p-color whitespace-pre-line">
              {/* {content} */}
            </p>
            <p className="max-w-xl bg-red200 leading-10 mb-4 text-start max-sm:px-5 text-balance mx-auto text-base md:text-lg font-medium text-p-color whitespace-pre-line">
              {/* {content} */}
            </p>
            <p className="max-w-xl bg-red200 leading-10 mb-4 text-start max-sm:px-5 text-balance mx-auto text-base md:text-lg font-medium text-p-color whitespace-pre-line">
              {/* {content} */}
            </p>
            <p className="max-w-xl bg-red200 leading-10 mb-4 text-start max-sm:px-5 text-balance mx-auto text-base md:text-lg font-medium text-p-color whitespace-pre-line">
              {/* {content} */}
            </p>
            <img
              src=""
              alt=""
              width={300}
              height={200}
              className="rounded-mg"
            />

            <p className="max-w-xl bg-red200 leading-10 mb-4 text-start max-sm:px-5 text-balance mx-auto text-base md:text-lg font-medium text-p-color whitespace-pre-line">
              {/* {content} */}
            </p>
            <p className="max-w-xl bg-red200 leading-10 mb-4 text-start max-sm:px-5 text-balance mx-auto text-base md:text-lg font-medium text-p-color whitespace-pre-line">
              {/* {content} */}
            </p>

            {/* Featured image/media section */}
            <div className="overflow-hidden rounded-md shadow-md shadow-sky-800 w-80 max-sm:hover:scale-110 md:w-120 h-fit mx-auto transition-all duration-300 ease-in-out">
              {/* Conditionally render image if media exists */}
            </div>

            {/* Tag/category badge */}
            <span className="inline-block mb-5 bg-p-color text-sky-400 text-xs font-semibold px-2 py-1 rounded-md">
              lorem
            </span>
          </main>
        }
        inheritStyles
        shimmer
        shimmerColor="#6a85a1"
        highlightColor="#1e2c3a"
      />
    );
  }

  // Show error message if post not found or there's an error
  if (isError || !post) return <Error msg={t("errorPage.defaultMsg")} />;

  // Destructure post fields from Contentful response
  // Note: Using 'any' type here - in production, consider defining proper TypeScript interfaces
  const { title, description,  content, tag } = post?.fields as any;

  return (
    <main className="text-center space-y-2 max-md:px-5">
      {/* Back to all posts button */}
      <button
        onClick={() => navigate("/blog")}
        className="text-bold text-base md:text-lg cursor-pointer text-p-color hover:text-sky-500 transition-all duration-300 ease-in-out underline my-3"
      >
        {/* Arabic text: "Back to all articles" */}
        العودة لجميع المقالات 🔙
      </button>

      {/* Blog post title */}
      <h1 className="text-sky-600 font-bold text-xl md:text-3xl my-3 ">
        {title}
      </h1>

      {/* Blog post description/subtitle */}
      <p className="text-base md:text-xl font-semibold text-s-color mt-3 mb-8">
        {description}
      </p>

      {/* Main blog post content */}
      <p className="max-w-xl bg-red200 leading-10 mb-4 text-start max-sm:px-5 text-balance mx-auto text-base md:text-lg font-medium text-p-color whitespace-pre-line">
        {/* {content} */}
        <MarkdownRendering content={content} />
      </p>

      {/* Featured image/media section */}
      <div className="overflow-hidden rounded-md shadow-md shadow-sky-800 w-80 max-sm:hover:scale-110 md:w-120 h-fit mx-auto transition-all duration-300 ease-in-out">
        {/* Conditionally render image if media exists */}
        {/* {media && (
          <img
            src={media?.fields?.file?.url} // Contentful image URL
            alt={title} // Use post title as alt text for accessibility
            width={100}
            height={100}
            className="w-full object-contain" // Responsive image styling
          />
        )} */}
      </div>

      {/* Tag/category badge */}
      <span className="inline-block mb-5 bg-p-color text-sky-400 text-xs font-semibold px-2 py-1 rounded-md">
        #{tag}
      </span>
    </main>
  );
}
