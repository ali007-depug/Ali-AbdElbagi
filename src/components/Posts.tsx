import { Link } from "react-router-dom";
import i18n from "../i18n";
export default function Posts({ posts }: { posts: any }) {
  // Render blog posts list with alternating background colors
  const blogPosts = posts?.map((post: any, index: number) => (
    <div
      key={post.sys.id} // Use Contentful system ID as unique key
      className="flex  items-center odd:bg-s-color/50 rounded-md even:bg-bg-color/20 p-3   justify-center-safe sm:gap-15 @container "
    >
      {/* post title + thumbnail + desc */}
      <Link to={`/${i18n.language}/blog/${post.fields.uniqueUrl}`}>
      <div className="flex flex-col  gap-5 w-full sm:flex-row items-center sm:justify-evenly ">
        <div className="flex p-2 flex-col gap-2 w-full sm:w-[50%] ">
          <p className="text-sky-400 text-2xl me-1">{index + 1}#</p>
          <div className="flex flex-col items-center gap-4">
            {/* Blog post title */}
            <h3 className="font-extrabold text-white text-lg md:text-2xl text-balance min-w-[20ch]">
              {post.fields.title}
            </h3>

            {/* Blog post description with truncation on small screens */}
            <p className="text-gray-200 @max-lg:text-sm  overflow-ellipsis overflow-hidden whitespace-nowrp  ">
              {post.fields.description}
            </p>
          </div>

          {/* Publication date */}
          <p className="text-gray-100 text-sm">🗓️ {post.fields.date}</p>
        </div>
        {/* post thumbnail */}

        <div className="@sm:w-[60%] @lg:w-[30%]  border-2 border-sky-700 overflow-hidden rounded-lg ">
          {post.fields.media && (
            <img
              src={`${post?.fields.media.fields?.file?.url}`} // Contentful image URL
              alt={post.fields.title} // Use post title as alt text for accessibility
              width={50}
              height={50}
              className="w-full object-contain" // Responsive image styling
            />
          )}
        </div>
      </div>
      </Link>
    </div>
  ));

  return <>{blogPosts}</>;
}
