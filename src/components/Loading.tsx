import { useTranslation } from "react-i18next";
import { ProgressRingLoader } from "react-loadly";
export default function Loading() {
  const { t } = useTranslation();
  return (
    <div className="px-2 flex flex-col items-center justify-center  h-[100dvh] bg-p-color text-sky-500 font-extrabold">
      <ProgressRingLoader
        size={45}
        color="#3b82f6"
        speed={1}
        aria-label=""
        showText={false}
        progress={50}
        thickness={5}
        secondaryColor="#e0e7ff"
      />
      <h1 className="my-3 font-bold text-xl">{t('loading')}</h1>
    </div>
  );
}
