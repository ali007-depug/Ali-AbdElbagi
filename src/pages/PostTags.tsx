import { useParams, Link } from "react-router-dom";
import usePostsWithTags from "../hooks/useTags";
import Error from "./Error";
import { AutoSkeletonLoader } from "react-loadly";
import PostTagsSkelton from "../components/blog/PostTagsSkelton";
import i18n from "../i18n";
import { t } from "i18next";
import { TbArrowBack } from "react-icons/tb";
import BackButton from "../components/BackButton";
import Posts from "../components/blog/Posts";

export default function PostsTags() {
  // Get the tag parameter from the route URL
  const { tag, lang } = useParams();
  // sync i18n language with URL parameter
  if (lang && i18n.language !== lang) i18n.changeLanguage(lang);

  // Navigation hook for programmatic routing

  return (
    <main className="space-y-2 px-5 flex items-center flex-col relative top-[76px] sm:max-md:top-[111px ">
      {/* Page title showing the tag name */}
      <h1 className="text-2xl md:text-4xl mt-5 mx-auto text-center font-bold text-p-color">
        {tag}
      </h1>
      {/* Back to all posts button */}
      <BackButton
        backTo={`/${i18n.language}/blog`}
        btnText={t("blogPage.backToAllPosts")}
        icon={<TbArrowBack />}
        customStyle="mx-auto text-bold text-base md:text-lg text-p-color hover:text-sky-500"
      />{" "}
      {/* Render all posts with the specified tag */}
      <TagPost />
    </main>
  );
}

function TagPost() {
  const { tag } = useParams();

  // Fetch posts that have the specified tag
  const { data: posts, isLoading } = usePostsWithTags(tag!);

  // Show loading state while fetching posts
  if (isLoading) {
    return (
      <AutoSkeletonLoader
        component={<PostTagsSkelton />}
        shimmer
        highlightColor="#6a85a1"
        shimmerColor="#1e2c3a"
      />
    );
  }

  // Handle case where no posts are found for the given tag
  if (!posts?.length)
    return <Error msg={`لا توجد مقالات لـ تصنيف الـ ${tag}`} />;

  return (
    <article className="space-y-4 mt-4 w-full min-h-fit text-center bg-p-color sm:px-8 sm:py-4 rounded-lg  max-md:order-2">
      {/* Render all blog posts */}
      <Posts posts={posts} />
    </article>
  );
}
