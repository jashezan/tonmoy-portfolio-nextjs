import { TONMOY_CONTACT } from "@/data/contact";

import Layout from  "@/components/Layout";
import TransitionEffect from  "@/components/TransitionEffect";
import Head from  "next/head";
import AnimatedText from "@/components/AnimatedText";
import Skills from "@/components/Skills";
import { ImageGrid } from "@/components/ImageGrid";

const hobbyList = [
    { id: 1, src: "/info/travel.jpg", heading: "Travel", link: "/travel" },
    {
      id: 2,
      src: "/info/games.jpg",
      heading: "Video Games",
      link: "/games",
    },
    {
      id: 3,
      src: "/info/movies.jpg",
      heading: "Movies",
      link: "/movies",
    },
  ];

const ExtraCurriculur = () => {
  return (
    <>
      <Head>
        <title>Hobbies Page | {TONMOY_CONTACT.fullname} Portfolio</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
        <AnimatedText
            text="Hobbies are a way to escape the daily grind and unwind."
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <ImageGrid sampleData={hobbyList}/>
        </Layout>
      </main>
    </>
  );
};

export default ExtraCurriculur;