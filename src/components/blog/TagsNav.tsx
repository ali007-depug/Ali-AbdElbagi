import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
export default function TagsNav({posts}:{posts:any}) {
  const {t} = useTranslation();
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
          className="flex gap-2 items-center mb-2 bg-white w-fit px-3 py-2 rounded-md cursor-pointer hover:bg-gray-300  transition-all duration-300 ease-in-out"
          // Navigate to tag-specific page on click
          onClick={() => navigate(`/${i18n.language}/blog/tags/${tag}`)}
        >
          {/* Tag name */}
          <span className="text-p-color font-medium">{tag}</span>
          {/* Tag count badge */}
          <span className="bg-p-color text-white text-xs font-semibold px-2 py-1 rounded-full">
            {count as number}
          </span>
        </div>
      ));

      return(
        <>
          <h3 className="text-xl font-semibold mb-4 text-white">{t("blogPage.tags")}</h3>
        {allTags}
        </>
      )
}