export default function PostSkelton(){
    return(
                  <main className="text-center space-y-2  relative top-[76px] sm:max-md:top-[111px] max-md:px-5">
                    {/* Back to all posts button */}
                    <button
                      className="text-bold text-base md:text-lg cursor-pointer text-p-color hover:text-sky-500  transition-all duration-300 ease-in-out underline my-3"
                    >
                      {/* Arabic text: "Back to all articles" */}
                      العودة لجميع المقالات 🔙
                    </button>
        
                    {/* Blog post title */}
                    <h1 className="text-sky-600 font-bold text-xl md:text-3xl my-3 ">
                      lorem lorem lorem lorem
                    </h1>
        
                    {/* Blog post description/subtitle */}
                    <p className="text-base md:text-xl font-semibold text-s-color mt-3 mb-8">
                      lorem lorem lorem lorem lorem lorem lorem
                    </p>
        
                    {/* Main blog post content */}
                    <p className="max-w-xl bg-red200 leading-10 mb-4 text-start max-sm:px-5 text-balance mx-auto text-base md:text-lg font-medium text-p-color whitespace-pre-line">
                      {/* {content} */}
                    </p>
                    <p className="max-w-xl bg-red200 leading-10 mb-4 text-start max-sm:px-5 text-balance mx-auto text-base md:text-lg font-medium text-p-color whitespace-pre-line">
                      {/* {content} */}
                    </p>
                    <p className="max-w-xl bg-red200 leading-10 mb-4 text-start max-sm:px-5 text-balance mx-auto text-base md:text-lg font-medium text-p-color whitespace-pre-line">
                      {/* {content} */}
                    </p>
                    <p className="max-w-xl bg-red200 leading-10 mb-4 text-start max-sm:px-5 text-balance mx-auto text-base md:text-lg font-medium text-p-color whitespace-pre-line">
                      {/* {content} */}
                    </p>
                    <p className="max-w-xl bg-red200 leading-10 mb-4 text-start max-sm:px-5 text-balance mx-auto text-base md:text-lg font-medium text-p-color whitespace-pre-line">
                      {/* {content} */}
                    </p>
                    <p className="max-w-xl bg-red200 leading-10 mb-4 text-start max-sm:px-5 text-balance mx-auto text-base md:text-lg font-medium text-p-color whitespace-pre-line">
                      {/* {content} */}
                    </p>
                    <p className="max-w-xl bg-red200 leading-10 mb-4 text-start max-sm:px-5 text-balance mx-auto text-base md:text-lg font-medium text-p-color whitespace-pre-line">
                      {/* {content} */}
                    </p>
                    <p className="max-w-xl bg-red200 leading-10 mb-4 text-start max-sm:px-5 text-balance mx-auto text-base md:text-lg font-medium text-p-color whitespace-pre-line">
                      {/* {content} */}
                    </p>
                    <p className="max-w-xl bg-red200 leading-10 mb-4 text-start max-sm:px-5 text-balance mx-auto text-base md:text-lg font-medium text-p-color whitespace-pre-line">
                      {/* {content} */}
                    </p>
                    <img
                      src=""
                      alt=""
                      width={300}
                      height={200}
                      className="rounded-mg"
                    />
        
                    <p className="max-w-xl bg-red200 leading-10 mb-4 text-start max-sm:px-5 text-balance mx-auto text-base md:text-lg font-medium text-p-color whitespace-pre-line">
                      {/* {content} */}
                    </p>
                    <p className="max-w-xl bg-red200 leading-10 mb-4 text-start max-sm:px-5 text-balance mx-auto text-base md:text-lg font-medium text-p-color whitespace-pre-line">
                      {/* {content} */}
                    </p>
        
                    {/* Featured image/media section */}
                    <div className="overflow-hidden rounded-md shadow-md shadow-sky-800 w-80 max-sm:hover:scale-110 md:w-120 h-fit mx-auto transition-all duration-300 ease-in-out">
                      {/* Conditionally render image if media exists */}
                    </div>
        
                    {/* Tag/category badge */}
                    <span className="inline-block mb-5 bg-p-color text-sky-400 text-xs font-semibold px-2 py-1 rounded-md">
                      lorem
                    </span>
                  </main>
        
    )
}