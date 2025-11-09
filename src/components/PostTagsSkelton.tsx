export default function PostTagsSkelton() {
  return (
    <main className="space-y-2 px-5  flex items-center flex-col ">
      {/* Page title showing the tag name */}
      <h1 className="text-3xl md:text-5xl mx-auto text-center font-bold text-p-color"></h1>
      {/* Back to all posts button */}
      <button className="text-bold text-base md:text-lg cursor-pointer text-p-color hover:text-sky-500 transition-all duration-300 ease-in-out underline my-3">
        {/* Arabic text: "Back to all articles" */}
        العودة لجميع المقالات 🔙
      </button>
      {/*  */}
      <article className="flex items-center justify-center p-3 min-w-full md:min-w-2xl odd:bg-gray-200 even:bg-bg-color w-20  ">
        {/* Post container with alternating background colors */}
        <div className="flex flex-col gap-5 w-[50%]">
          {/* Post number indicator */}
          <span className="text-gray-600 text-sm">#{0 + 1}</span>

          {/* Link to individual blog post page */}
          <div>
            {/* Blog post title */}
            <h2 className="font-semibold text-sky-600 text-lg md:text-2xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </h2>

            {/* Blog post description with truncation on small screens */}
            <p className="text-gray-600 text-sm overflow-ellipsis overflow-hidden whitespace-nowrap max-w-[25ch] sm:max-w-fit w-[200px]">Lorem ipsum dolor sit amet</p>
          </div>
        </div>
      </article>
      <article className="flex items-center justify-center p-3 min-w-full md:min-w-2xl odd:bg-gray-200 even:bg-bg-color w-20  ">
        {/* Post container with alternating background colors */}
        <div className="flex flex-col gap-5 w-[50%]">
          {/* Post number indicator */}
          <span className="text-gray-600 text-sm">#{0 + 1}</span>

          {/* Link to individual blog post page */}
          <div>
            {/* Blog post title */}
            <h2 className="font-semibold text-sky-600 text-lg md:text-2xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </h2>

            {/* Blog post description with truncation on small screens */}
            <p className="text-gray-600 text-sm overflow-ellipsis overflow-hidden whitespace-nowrap max-w-[25ch] sm:max-w-fit w-[200px]">Lorem ipsum dolor sit amet</p>
          </div>
        </div>
      </article>
      <article className="flex items-center justify-center p-3 min-w-full md:min-w-2xl odd:bg-gray-200 even:bg-bg-color w-20  ">
        {/* Post container with alternating background colors */}
        <div className="flex flex-col gap-5 w-[50%]">
          {/* Post number indicator */}
          <span className="text-gray-600 text-sm">#{0 + 1}</span>

          {/* Link to individual blog post page */}
          <div>
            {/* Blog post title */}
            <h2 className="font-semibold text-sky-600 text-lg md:text-2xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </h2>

            {/* Blog post description with truncation on small screens */}
            <p className="text-gray-600 text-sm overflow-ellipsis overflow-hidden whitespace-nowrap max-w-[25ch] sm:max-w-fit w-[200px]">Lorem ipsum dolor sit amet</p>
          </div>
        </div>
      </article>
    </main>
  );
}
