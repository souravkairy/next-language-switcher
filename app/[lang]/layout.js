import LocaleSwitcher from "@/components/locale-switcher";
import { i18n } from "../../i18n-config";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function Root({ children, params }) {
  return (
    <html lang={params.lang}>
      <body>
        <div className=" bg-gray-300">
          <LocaleSwitcher />
        </div>

        {children}
      </body>
    </html>
  );
}

export const metadata = {
  title: "Next JS Language Switcher",
  description: "",
};
