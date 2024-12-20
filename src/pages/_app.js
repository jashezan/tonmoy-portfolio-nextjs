import "@/styles/globals.css";
import {Montserrat, Caveat, Henny_Penny} from "next/font/google";
import Head from "next/head";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import {AnimatePresence} from "framer-motion";
import {useRouter} from "next/router";
// import NavBar from "next/head";

const montserrat = Montserrat({
    subsets: ["latin"],
    variable: "--font-mont",
});

export const caveat = Caveat({
    subsets: ["latin"],
    variable: "--font-caveat",
});

export const hennyPenny = Henny_Penny({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-henny",
});

export default function App({Component, pageProps}) {
    const router = useRouter();
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main
                className={`${montserrat.variable} ${caveat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}
            >
                <NavBar/>
                <AnimatePresence mode="wait">
                    <Component key={router.asPath} {...pageProps} />
                </AnimatePresence>
                <Footer/>
            </main>
        </>
    );
}
