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
    <div className="flex flex-col gap-4 bg-p-color items-center">
      <div>{icon}</div>
      {/* text */}
      <p className="text-sm text-white">
        {t("contact.via", { platform: name })}
      </p>
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

