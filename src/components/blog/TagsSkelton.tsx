export default function TagSelton() {
  return (
    <div className="grid  grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-2">
      {/* Tags sidebar */}
      <div className="bg-white px-2 min-w-[200px] py-1.5 rounded-md">
        {/* Tag name */}
        <span className="text-p-color min-w-[120px]"></span>
        {/* Tag count badge */}
      </div>
      <div className="bg-white  px-2 min-w-[200px] py-1.5 rounded-md ">
        {/* Tag name */}
        <span className="text-p-color min-w-[120px]"></span>
        {/* Tag count badge */}
      </div>
      <div className=" mb-2 bg-white px-2 min-w-[200px] py-1.5 rounded-md ">
        {/* Tag name */}
        <span className="text-p-color min-w-[120px]"></span>
        {/* Tag count badge */}
      </div>
    </div>
  );
}
