"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { i18n } from "../i18n-config";

export default function LocaleSwitcher() {
  const pathName = usePathname();
  const redirectedPathName = (locale) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <div>
      <p>Locale switcher:</p>
      <ul>
        {i18n.locales.map((locale) => {
          return (
            <li key={locale}>
              <Link href={redirectedPathName(locale)}>{locale}</Link>
            </li>
          );
        })}
      </ul>

      <span className="flex justify-center font-din font-thin text-lg leading-none">
        {pathName.startsWith("/fr") || pathName.startsWith("/fr/") ? (
          pathName.startsWith("/fr/politique-de-confidentialite") ? (
            <Link href="/en/privacy-policy" className="text-body-1">
              English
            </Link>
          ) : (
            <a href="en/" className="text-body-1">
              English
            </a>
          )
        ) : pathName.startsWith("/en/privacy-policy") ? (
          <Link href="/fr/politique-de-confidentialite" className="text-body-1">
            Français
          </Link>
        ) : (
          <Link href="/fr" className="text-body-1">
            Français
          </Link>
        )}
      </span>
    </div>
  );
}
