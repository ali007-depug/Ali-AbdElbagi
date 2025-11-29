import { useTranslation } from "react-i18next";
interface ConatctAccountsProps {
  accountName: string;
  icon: React.ReactNode;
  name: string;
  href: string;
}

export default function ConatctAccounts({
  accountName,
  icon,
  name,
  href,
}: ConatctAccountsProps) {
  const { t } = useTranslation();
  return (
    <div className="flex md:flex-col gap-4 max-md:w-[230px] justify-between items-center">
      {/* text */}
      <p className="text-sm text-white ">
        {t("contact.via", { platform: name })}
      </p>
      <div>{icon}</div>

      {/* link */}
      <a
        href={href}
        target="_blank"
        className="underline text-sky-500 font-bold"
      >
        {accountName}
      </a>
    </div>
  );
}

