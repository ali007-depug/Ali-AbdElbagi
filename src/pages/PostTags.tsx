import { useParams, useNavigate, Link } from "react-router-dom";
import usePostsWithTags from "../hooks/useTags";
import Error from "./Error";
import { AutoSkeletonLoader } from "react-loadly";
import PostTagsSkelton from "../components/blog/PostTagsSkelton";
import i18n from "../i18n";
import { t } from "i18next";
import { TbArrowBack } from "react-icons/tb";

export default function PostsTags() {
  // Get the tag parameter from the route URL
  const { tag ,lang} = useParams();
  // sync i18n language with URL parameter
  if (lang && i18n.language !== lang) i18n.changeLanguage(lang);

  // Navigation hook for programmatic routing
  const navigate = useNavigate();

  // Fetch posts that have the specified tag
  // Using non-null assertion operator (!) since we expect tag to be defined
  const { data: posts, isLoading } = usePostsWithTags(tag!);

  // Show loading state while fetching posts
  if (isLoading) {
    return <AutoSkeletonLoader component={<PostTagsSkelton/>} shimmer highlightColor="#6a85a1" shimmerColor="#1e2c3a"/>;
  }

  // Handle case where no posts are found for the given tag
  if (!posts?.length) return <Error msg={`لا توجد مقالات لـ تصنيف الـ ${tag}`}/>

  // Render list of posts with the specified tag
  const tagPost = posts.map((post: any, index: number) => {
    // Destructure post fields from Contentful response
    const { title, description, uniqueUrl,date,media } = post.fields;

    return (
      
    <article
      key={post.sys.id} // Use Contentful system ID as unique key
      className="flex  items-center odd:bg-s-color/95 rounded-md even:bg-p-color/50 p-3  w-[90%] xs:w-[70%] lg:w-[50%] justify-center-safe sm:gap-15 @container "
    >
      {/* post title + thumbnail + desc */}
      <Link to={`/${i18n.language}/blog/${uniqueUrl}`}>
      <div className="flex flex-col  gap-5 w-full  md:flex-row items-center sm:justify-evenly">
        {/* post texts */}
        <div className="flex p-2 flex-col gap-2 w-full text-center md:w-[50%]">
          <p className="text-sky-400 text-2xl me-1">{index + 1}#</p>
          <div className="flex flex-col items-center gap-4">
            {/* Blog post title */}
            <h3 className="font-extrabold text-white text-lg md:text-2xl text-balance min-w-[20ch]">
              {title}
            </h3>

            {/* Blog post description with truncation on small screens */}
            <p className="text-gray-200 @max-lg:text-sm  overflow-ellipsis overflow-hidden whitespace-nowrp  ">
              {description}
            </p>
          </div>

          {/* Publication date */}
          <p className="text-gray-100 text-sm">🗓️ {date}</p>
        </div>
        {/* post thumbnail */}

        <div className="@sm:w-[60%] @lg:w-[40%]  border-2 border-sky-700 overflow-hidden rounded-lg ">
          {media && (
            <img
              src={`${media.fields?.file?.url}`} // Contentful image URL
              alt={title} // Use post title as alt text for accessibility
              width={50}
              height={50}
              className="w-full object-contain" // Responsive image styling
            />
          )}
        </div>
      </div>
      </Link>
    </article>

    );
  });

  return (
    <main className="space-y-2 px-5 flex items-center flex-col ">
      {/* Page title showing the tag name */}
      <h1 className="text-3xl md:text-5xl mx-auto text-center font-bold text-p-color">
        {tag}
      </h1>

 {/* Back to all posts button */}
      <button
        onClick={() => navigate(`/${i18n.language}/blog`)}
        className="flex flex-col items-center gap-2 mx-auto text-bold text-base md:text-lg cursor-pointer text-p-color hover:text-sky-500 transition-all duration-300 ease-in-out underline my-3"
      >
        <TbArrowBack/> 
        {/* Arabic text: "Back to all articles" */}
        {t("blogPage.backToAllPosts")}
      </button>
      {/* Render all posts with the specified tag */}
      {tagPost}
    </main>
  );
}
