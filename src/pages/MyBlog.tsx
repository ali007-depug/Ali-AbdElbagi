import Posts from "../components/blog/Posts";
import TagsNav from "../components/blog/TagsNav";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import i18n from "../i18n";
export default function MyBlog() {
  // useTranslation
  const { t } = useTranslation();
  // Get language parameter from URL
  const { lang } = useParams();
  // sync i18n language with URL parameter
  if (lang && i18n.language !== lang) i18n.changeLanguage(lang);


  return (
    <section className="mb-10 px-dyp py-5  relative top-[76px] sm:max-md:top-[111px]">
      {/* Main title */}
      <h1 className="text-3xl md:text-5xl mb-5 mx-auto text-center font-bold text-p-color">
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
      <div className="flex max-lg:flex-col px- gap-5">
        {/*posts section wrapper */}
        <article className="space-y-4 mt-4 w-full basis-[80%] min-h-[80dvh] text-center bg-p-color sm:px-3 sm:py-2 rounded-lg  max-lg:order-2">
          {/* Render all blog posts */}
          <Posts  />
        </article>

        {/* Tags sidebar */}
        <div className="flex flex-col gap-2 lg:basis-[25%]  p-5 bg-p-color rounded-lg h-fit mt-4 lg:sticky lg:top-20 lg:self-start ">
          {/* Tag title */}
          <h3 className="text-xl font-semibold mb-4 text-white">
            {t("blogPage.tags")}
          </h3>
          {/* Tags */}
          <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-2">
          <TagsNav />
          </div>
        </div>
      </div>
    </section>
  );
}
