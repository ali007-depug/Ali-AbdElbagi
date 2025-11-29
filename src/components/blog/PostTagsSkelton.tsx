export default function PostTagsSkelton() {
  return (
      <div className="flex max-md:flex-col gap-5">
        <article className="space-y-4 mt-4 w-full min-h-[80dvh] text-center bg-p-color sm:px-8 sm:py-4 rounded-lg  max-md:order-2">
          {/* Render all blog posts */}
          <div className="flex  items-center odd:bg-s-color/50 rounded-md even:bg-bg-color p-3   justify-center-safe sm:gap-15 @container ">
            {/* post title + thumbnail + desc */}
            <div className="flex justify-between w-full ">
              <div className="flex flex-col  gap-5 w-full sm:flex-row items-center sm:justify-between ">
                <div className="flex p-2 flex-col w-[200px] gap-2 sm:w-[50%] ">
                  <p className="text-sky-400 text-2xl me-1">{0 + 1}#</p>
                  <div className="flex flex-col items-center gap-4">
                    {/* Blog post title */}
                    <h3 className="font-extrabold text-white text-lg md:text-2xl text-balance min-w-[20ch]"></h3>

                    {/* Blog post description with truncation on small screens */}
                    <p className="text-gray-200 @max-lg:text-sm  overflow-ellipsis overflow-hidden whitespace-nowrp  "></p>
                  </div>

                  {/* Publication date */}
                  <p className="text-gray-100 text-sm">🗓️ </p>
                </div>
                {/* post thumbnail */}

                <img
                  src={``} // Contentful image URL
                  alt={"some text"} // Use post title as alt text for accessibility
                  width={300}
                  height={200}
                  className="w-full object-contain" // Responsive image styling
                />
              </div>
            </div>
          </div>
          <div className="flex  items-center odd:bg-s-color/50 rounded-md even:bg-s-color/20 p-3   justify-center-safe sm:gap-15 @container ">
            {/* post title + thumbnail + desc */}
            <div className="flex justify-between w-full ">
              <div className="flex flex-col  gap-5 w-full sm:flex-row items-center sm:justify-between ">
                <div className="flex p-2 flex-col w-[200px] gap-2 sm:w-[50%] ">
                  <p className="text-sky-400 text-2xl me-1">{0 + 1}#</p>
                  <div className="flex flex-col items-center gap-4">
                    {/* Blog post title */}
                    <h3 className="font-extrabold text-white text-lg md:text-2xl text-balance min-w-[20ch]"></h3>

                    {/* Blog post description with truncation on small screens */}
                    <p className="text-gray-200 @max-lg:text-sm  overflow-ellipsis overflow-hidden whitespace-nowrp  "></p>
                  </div>

                  {/* Publication date */}
                  <p className="text-gray-100 text-sm">🗓️ </p>
                </div>
                {/* post thumbnail */}

                <img
                  src={``} // Contentful image URL
                  alt={"some text"} // Use post title as alt text for accessibility
                  width={300}
                  height={200}
                  className="w-full object-contain" // Responsive image styling
                />
              </div>
            </div>
          </div>
        </article>
      </div>);
}
