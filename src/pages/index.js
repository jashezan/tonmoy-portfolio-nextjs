import Layout from "@/components/Layout";
import Head from "next/head";
import profilePic from "../../public/images/profile/developer-pic-1-tonmoy.png";
import Image from "next/image";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/icons";
import lightBuld from "../../public/images/svgs/miscellaneous_icons_1.svg";
import TransitionEffect from "@/components/TransitionEffect";
import { TONMOY_CONTACT } from "@/data/contact";
import React from "react";

export default function Home() {
  return (
    <>
      <Head>
        <title>{TONMOY_CONTACT.fullname} Portfolio</title>
        <meta name="description" content={TONMOY_CONTACT.description} />
      </Head>
      <TransitionEffect />
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-0 md:pt-6 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="relative w-1/2 md:w-full">
              {/* Main Image */}
              <Image
                src={profilePic}
                alt="saohwan"
                className="w-full h-auto lg:hidden md:inline-block md:w-full rounded-full dark:shadow-sm dark:shadow-white"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />

              {/* Top-Left Logo */}
              <div className="absolute top-4 -left-8 md:-top-24 rounded-full dark:shadow-sm dark:shadow-white">
                <Image
                  src="/images/aiub-logo.png"
                  alt="Top Left Logo"
                  width={100}
                  height={100}
                  className="w-auto h-auto"
                />
              </div>

              {/* Top-Right Logo */}
              <div className="absolute top-4 right-4 md:-top-24 rounded-full dark:shadow-sm dark:shadow-white">
                <Image
                  src="/images/sydney-logo.png"
                  alt="Top Right Logo"
                  width={100} // Adjust size as needed
                  height={100}
                  className="w-auto h-auto"
                />
              </div>
            </div>

            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center p-5">
              <AnimatedText text="Hi, Tonmoy Here" />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                A dedicated CSE student at AIUB, I have a solid foundation in
                programming, algorithms, and emerging technologies like AI and
                web development. Passionate about solving real-world problems
                through innovative solutions, I bring strong analytical skills,
                teamwork, and hands-on project experience, making me ready to
                excel in any tech-driven environment.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href={TONMOY_CONTACT.cvUrl}
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6
                  rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                  border border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark
                  hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base
                  "
                  download={false} // file download Y or N
                >
                  Resume <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link
                  href={`mailto:${TONMOY_CONTACT.email}`}
                  target={"_blank"}
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
          <Image src={lightBuld} alt="Codebucks" className="w-full h-auto" />
        </div>
      </main>
    </>
  );
}
