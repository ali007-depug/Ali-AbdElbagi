interface ErrorProp {
    msg:string;
}
export default function Error({msg}:ErrorProp) {
  return (
    <div className="flex items-center justify-center w-full min-h-[88dvh] bg-s-color">
      <p className="font-bold text-2xl sm:text-3xl md:text-4xl text-white max-w-[40ch] text-center max-sm:px-5">✖️ {msg}</p>
    </div>
  );
}
