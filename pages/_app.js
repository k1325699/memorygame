import "@/styles/globals.css";
import "@/styles/card.css";
import Head from "next/head";
import { Noto_Sans_TC } from "next/font/google";
import {} from "next/font/google";
export const notoSans = Noto_Sans_TC({
  weight: ["400", "700"],
  // weight: "400",
  subsets: ["latin"],
});
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>記憶卡遊戲</title>
      </Head>
      <main className={notoSans.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
