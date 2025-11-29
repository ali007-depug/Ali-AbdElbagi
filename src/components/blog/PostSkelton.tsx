export default function PostSkelton() {
  return (
    <main className="relative -top-10">
      {/* Blog post title */}
      <div className="bg-sky-400 rounded-2xl w-[75%] h-8 mx-auto my-3 "></div>

      {/* Blog post description/subtitle */}
      <div className="bg-s-color rounded-2xl w-[65%] h-6 mx-auto my-4"></div>

      {/* intro  */}
      <div className="bg-p-color w-[150px] h-3 rounded-3xl"></div>
      {/* Main blog post content */}
      <p className=" text-p-color">{/* {content} */}</p>
      <p className=" text-p-color ">{/* {content} */}</p>
      <div className="bg-p-color w-[150px] h-3 rounded-3xl"></div>

      <p className=" text-p-color ">{/* {content} */}</p>
      <p className=" text-p-color ">{/* {content} */}</p>
      <div className="bg-p-color w-[150px] h-3 rounded-3xl"></div>
      <p className=" text-p-color ">{/* {content} */}</p>
      <img src="" alt="" width={300} height={200} className="rounded-mg" />
      {/* Featured image/media section */}
      {/* Tag/category badge */}
    </main>
  );
}
