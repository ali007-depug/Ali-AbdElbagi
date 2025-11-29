import { useNavigate } from "react-router-dom";
import i18n from "../../i18n";
import useBlogs from "../../hooks/useBlogs";
import { AutoSkeletonLoader } from "react-loadly";
import TagSelton from "./TagsSkelton";
export default function TagsNav() {
  const { data:posts , isLoading, isError } = useBlogs();
  
  const navigate = useNavigate();

  // Extract and flatten all tags from all posts
  const postTage = posts?.map((post: any) => post.fields.tag).flat();

  // Calculate tag counts using reduce
  const tagWithCount = postTage?.reduce((acc: any, tag: string) => {
    acc[tag] = (acc[tag] || 0) + 1; // Increment count for each tag
    return acc;
  }, {});

  // Render clickable tags with counts
  const allTags = Object.entries(tagWithCount || {}).map(([tag, count]) => (
    <div
      key={tag}
      className="flex gap-2 items-center justify-center mb-2 bg-white  px-2 min-w-[200px] py-1.5 rounded-md cursor-pointer hover:bg-gray-300  transition-all duration-300 ease-in-out"
      // Navigate to tag-specific page on click
      onClick={() => navigate(`/${i18n.language}/blog/tags/${tag}`)}
    >
      {/* Tag name */}
      <span className="text-p-color min-w-[120px] text-center font-medium">
        {tag}
      </span>
      {/* Tag count badge */}
      <span className="bg-p-color text-white text-xs font-semibold px-2 py-1 rounded-full">
        {count as number}
      </span>
    </div>
  ));

  if(isLoading){
    return <AutoSkeletonLoader component={<TagSelton/>}/>
  }
  isError && <div>Error loading tags.</div>;
  
  return <>{allTags}</>;
}
