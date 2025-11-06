import { useTranslation } from "react-i18next";

export default function Loading(){
  const {t}= useTranslation()
    return (
        <div className="px-2 grid place-items-center h-[100dvh] bg-p-color text-sky-500 font-extrabold text-xl">
          <div className="flex items-center gap-2">
            <span className="block size-5 border-2 border-white border-b-transparent rounded-full animate-spin"></span>
            <h1>{t('loading')}</h1>
          </div>
        </div>
      );
  
}