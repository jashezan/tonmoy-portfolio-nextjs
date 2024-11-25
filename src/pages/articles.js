import React, { useRef } from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Image from "next/image";
import Link from "next/link";
import article1 from "../../public/images/articles/article1.jpg";
import article2 from "../../public/images/articles/article2.jpg";
import { motion, useMotionValue } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";
import { TONMOY_CONTACT } from "@/data/contact";

const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }

  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        ref={imgRef}
        src={img}
        alt={title}
        className="z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden"
      />
      {/*md:!hidden 속성은 기존 마우스 커서의 위치가 게시글 목록을 가르킬 때 미리보기 이미지를 제공했지만 좁은 화면에서는 깨지는 문제가 있어 숨겨야한다.*/}
    </Link>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light sm:flex-col"
    >
      <MovingImg title={title} img={img} link={link} />
      <span className="text-primary font-semibold pl-4 dark:text-primaryDark sm:self-start sm:pl-0 xs:text-sm">
        {date}
      </span>
    </motion.li>
  );
};
const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li
      className="col-span-1 w-full p-4 relative bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light"
    >
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[102%] rounded-[2rem] bg-dark rounded-br-3xl" />

      <Link
        href={link}
        target="_blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2">{summary}</p>
      <span className="text-primary font-semibold dark:bg-primaryDark">
        {time}
      </span>
    </li>
  );
};
const articles = () => {
  return (
    <>
      <Head>
        <title>Articles Page | {TONMOY_CONTACT.fullname} Portfolio</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Words Can Change The World!"
            className="mb-16 !text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
            <FeaturedArticle
              title="Sheikh Mujibur Rahman: The Father of the Nation of Bangladesh"
              summary="Bangabandhu Sheikh Mujibur Rahman emerged as a charismatic leader and an indomitable force in the struggle for freedom and the establishment of Bangladesh as a sovereign nation."
              time="9 min read"
              link="https://www.dhakatribune.com/bangladesh/322557/sheikh-mujibur-rahman-the-father-of-the-nation-of"
              img={article1}
            />
            <FeaturedArticle
              title="You can do it, baby!"
              summary="Our culture is rich with esteem-boosting platitudes for young dreamers, but the assurances are dishonest and dangerous."
              time="9 min read"
              link="https://aeon.co/essays/how-feeding-children-s-ambition-only-sets-them-up-to-fail"
              img={article2}
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
            All Articles
          </h2>
          <ul>
            <Article
              title="The Tinkerings of Robert Noyce"
              date="1983"
              link="https://web.stanford.edu/class/e145/2007_fall/materials/noyce.html"
              img={""}
            />
            <Article
              title="The Problem With Facts"
              date="2017"
              link="https://timharford.com/2017/03/the-problem-with-facts"
              img={""}
            />
            <Article
              title="The Worst Mistake in the History of the Human Race"
              date="1997"
              link="https://www.ditext.com/diamond/mistake.html"
              img={""}
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default articles;
