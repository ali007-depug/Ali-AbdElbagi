import useBlogs from "../hooks/useBlogs";
import { AutoSkeletonLoader } from "react-loadly";
import BlogSeklton from "../components/blog/BlogSkelton";
import Posts from "../components/blog/Posts";
import TagsNav from "../components/blog/TagsNav";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import i18n from "../i18n";
export default function MyBlog() {
  // useTranslation
  const { t } = useTranslation();
  // Fetch blog posts data using custom hook
  const { data: posts, isLoading, isError } = useBlogs();

  // Get language parameter from URL
  const { lang } = useParams();
  // sync i18n language with URL parameter
  if (lang && i18n.language !== lang) i18n.changeLanguage(lang);

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
    <section className="mb-10 relative max-lg:top-[70px] sm:max-2xl:top-[111px]">
      {/* Main title */}
      <h1 className="text-3xl md:text-5xl mx-auto text-center font-bold text-p-color">
        {t("blogPage.title")}
      </h1>

      {/* desc */}
      <p className="text-p-color font-semibold mx-auto text-center w-[30ch] sm:w-[50ch] mt-5">
        {t("blogPage.description")}
      </p>

      {/* Subtitle */}
      <h2 className="text-2xl mt-4 md:text-3xl font-semibold text-s-color ms-10">
        {t("blogPage.recentPosts")}
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
