import React from "react";
import Layout from "@/components/Layout";
import Link from "next/link";
import { TONMOY_CONTACT } from "@/data/contact";

const Footer = () => {
  return (
    <footer
      className="w-full border-t-2 border-solid border-dark
        font-medium text-lg dark:text-light dark:border-light sm:text-base"
    >
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center lg:py-2">
          <Link
            href={TONMOY_CONTACT.profileUrl}
            className="underline
                underline-offset-2
                "
            target={"_blank"}
          >
            {TONMOY_CONTACT.brandname} Portfolio
          </Link>
        </div>
        <Link
          href={`mailto:${TONMOY_CONTACT.email}`}
          target={"_blank"}
          className="underline
                underline-offset-2
            "
        >
          Say hello
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
