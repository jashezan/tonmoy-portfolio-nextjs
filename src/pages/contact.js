import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";
import { TONMOY_CONTACT } from "@/data/contact";
import { ContactForm } from "@/components/ContactForm";
import GoogleMap from "@/components/GoogleMap";

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact Page | {TONMOY_CONTACT.fullname} Portfolio</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Let's Create Something Amazing - Get in Touch!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <ContactForm />
          <div className="my-20">
            <p>
              <span className="font-bold">Official Email: </span>
              <a
                className="text-blue-700"
                target="_blank"
                rel="noreferrer noopener"
                href={`mailto:${TONMOY_CONTACT.email}`}
              >
                {TONMOY_CONTACT.email}
              </a>
            </p>
            <p>
              <span className="font-bold">Official Phone: </span>
              <a
                className="text-blue-700"
                target="_blank"
                rel="noreferrer noopener"
                href={`tel:${TONMOY_CONTACT.phone}`}
              >
                {TONMOY_CONTACT.officialPhone}
              </a>
            </p>
            <p>
              <span className="font-bold">Personal Phone: </span>
              <a
                className="text-blue-700"
                target="_blank"
                rel="noreferrer noopener"
                href={`tel:${TONMOY_CONTACT.officialPhone}`}
              >
                {TONMOY_CONTACT.phone}
              </a>
            </p>
            <p>
              <span className="font-bold">WhatsApp: </span>
              <a
                className="text-blue-700"
                target="_blank"
                rel="noreferrer noopener"
                href={`https://wa.me/${TONMOY_CONTACT.phone}`}
              >
                {TONMOY_CONTACT.phone}
              </a>
            </p>
          </div>
          <div className="my-10">
            <h2 className="text-4xl font-extrabold text-center mt-16">
              Find Me Here
            </h2>
            <GoogleMap />
          </div>
        </Layout>
      </main>
    </>
  );
};

export default ContactPage;
