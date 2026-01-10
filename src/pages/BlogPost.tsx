import MarkdownRendering from "../components/blog/MarkdownRendering";
import Error from "./Error";
import useBlogPost from "../hooks/useBlogPost";
import PostSkelton from "../components/blog/PostSkelton";
import BackButton from "../components/BackButton";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { AutoSkeletonLoader } from "react-loadly";
import { TbArrowBack } from "react-icons/tb";
import i18n from "../i18n";

export default function BlogPost() {
  // Translation hook for internationalization
  const { t } = useTranslation();
  // Get the unique URL parameter from the route
  const { lang } = useParams();

  // sync i18n language with URL parameter
  if (lang && i18n.language !== lang) i18n.changeLanguage(lang);

  // Fetch individual blog post data using custom hook

  return (
    <section className="text-center py-5 space-y-2 max-md:px-5  relative top-[76px] sm:max-md:top-[111px]">
      {/* Back to all posts button */}
      <BackButton
        backTo={`/${i18n.language}/blog`}
        btnText={t("blogPage.backToAllPosts")}
        icon={<TbArrowBack />}
        customStyle="mx-auto text-bold text-base md:text-lg text-p-color hover:text-sky-500"
      />

      {/* Individual blog post content */}
        <Post />
    </section>
  );
}

function Post() {
  // get slug param from route
  const { slug } = useParams();
  // Fetch blog post data using custom hook
  const { data: post, isLoading, isError } = useBlogPost(slug as string);
  // Translation hook
  const { t } = useTranslation();
  // Show loading spinner while data is being fetched
  if (isLoading) {
    return (
      <AutoSkeletonLoader
        className="text-center mx-auto flex justify-center w-full md:w-[95%] max-w-lg px-4 py-8 md:px-5 md:py-9 "
        component={<PostSkelton />}
        inheritStyles
        shimmer
        shimmerColor="#6a85a1"
        highlightColor="#1e2c3a"
      />
    );
  }

  // Show error message if post not found or there's an error
  if (isError || !post) return <Error msg={t("errorPage.defaultMsg")} />;
  // Destructure post fields
  const { title, description, content, tag } = post?.fields as any;

  return (
    <>
      {/* Blog post title */}
      <h1 className="text-sky-600 font-bold text-xl md:text-3xl my-3 ">
        {title}
      </h1>

      {/* Blog post description/subtitle */}
      <p className="text-base md:text-xl font-semibold text-s-color mt-3 mb-8 max-w-[50ch] mx-auto">
        {description}
      </p>

      {/* Main blog post content */}
      <div className="max-w-xl bg-red200 leading-10 mb-4 text-start max-sm:px-5  mx-auto text-base md:text-lg font-medium text-p-color whitespace-pre-ine">
        {/* {content} */}
        <MarkdownRendering content={content} />
      </div>

      {/* Tag/category badge */}
      <span className="inline-block mb-5 bg-p-color text-sky-400 text-xs font-semibold px-2 py-1 rounded-md">
        #{tag}
      </span>
    </>
  );
}
