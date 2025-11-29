import { Link } from "react-router-dom";
import { IoHomeSharp } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useTranslation } from "react-i18next";
interface ErrorProp {
  msg: string;
}
export default function Error({ msg }: ErrorProp) {
  const {t} = useTranslation();
  return (
    <div className="flex flex-col gap-3 items-center justify-center w-full min-h-screen bg-p-color ">
      <IoClose size={40} color="red" />
      <p className="font-bold text-xl sm:text-2xl md:text-3xl text-white max-w-[40ch] text-center max-sm:px-5">
         {msg}
      </p>
      <Link to="/" className="flex p-3 text-sm sm:text-xl  items-center gap-2 rounded-full bg-s-color hover:bg-s-color/80 transition-all duration-300 text-white font-bold ">
      {t('errorPage.backToHome')}
        <IoHomeSharp size={25} className="" color="white" />
      </Link>
    </div>
  );
}
