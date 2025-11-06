import { useNavigate, useParams } from "react-router-dom";
import useBlogPost from "../hooks/useBlogPost";

export default function BlogPost() {
  const { uniqueUrl } = useParams();
  const navigate = useNavigate();

  const {data:post,isLoading,isError} = useBlogPost(uniqueUrl as string);
  
  
  if (isLoading) {
      return <div>Loading...</div>;
    }
    if (isError || !post) return <p>Post not found</p>;
    
    const { title, description, media, content } = post?.fields as any;
    
  return (
    <main className="text-center space-y-8">
        {/* all post */}
        <button onClick={()=>navigate("/blog")} className="text-bold text-lg cursor-pointer text-p-color hover:text-sky-500 transition-all duration-300 ease-in-out underline">العودة لجميع المقالات 🔙</button>
      {/* title */}
      <h1 className="text-sky-600 font-bold text-3xl ">{title}</h1>
      {/* description */}
      <p className="text-xl font-semibold text-s-color">{description}</p>
      {/* img */}
      {media && <img src={media?.fields?.file?.url} alt={title} />}
      {/* content */}
      <p className="max-w-2xl leading-10 mb-10 text-balance mx-auto text-lg font-medium text-p-color">{content}</p>
    </main>
  );
}
