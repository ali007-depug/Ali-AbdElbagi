import { AutoSkeletonLoader } from "react-loadly";
import MyBlog from "../../pages/MyBlog";

export default function PostLoader({isLoading}: {isLoading: boolean}) {
  return (
    <div className="px-2 flex flex-col items-center justify-center h-[100dvh] bg-p-color text-sky-500 font-extrabold">
      <AutoSkeletonLoader
      component={<MyBlog/>}
      loading={isLoading}
      shimmer
      shimmerColor="#3b82f6"
      highlightColor="#e0e7ff"
      />
    </div>
  );
}