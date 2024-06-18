"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import React from "react";

const HomePage = ({ data }) => {
  const pathname = usePathname();
  const router = useRouter();

  console.log(pathname);
  console.log(router);

  return (
    <div>
      <Link
        href={`${
          pathname === "/en"
            ? "privacy-policy"
            : "fr/politique-de-confidentialite"
        }`}
      >
        PP
      </Link>
      <p>{data.increment}</p>
    </div>
  );
};

export default HomePage;
