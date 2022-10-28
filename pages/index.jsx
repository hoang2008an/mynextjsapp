import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Logo from "../components/Logo";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Mathvn</title>
        <link rel="icon" href="/Math.svg" />
      </Head>
      <Header></Header>
      <main className="w-full flex-1 flex-col items-center justify-center px-20 text-center flex min-h-screen py-16">
        <h1 className="text-6xl font-bold pt-30">
          Chào mừng đến với{" "}
          <Link href="/" passHref>
            <a className="text-blue-600">Mathvn!</a>
          </Link>
        </h1>

        <p className="mt-3 text-2xl pt-20">
          Bắt đầu ngay bằng việc chọn một trong những chức năng bên dưới
        </p>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <Link href="/giai_pt" passHref>
            <a className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600">
              <h3 className="text-2xl font-bold">Giải phương trình &rarr;</h3>
              <p className="mt-4 text-xl">
                Giải các phương trình bậc 1 đến bậc 4 nhanh chóng và chính xác
              </p>
            </a>
          </Link>
          <a
            href="https://nextjs.org/learn"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Learn &rarr;</h3>
            <p className="mt-4 text-xl">
              Learn about Next.js in an interactive course with quizzes!
            </p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Examples &rarr;</h3>
            <p className="mt-4 text-xl">
              Discover and deploy boilerplate example Next.js projects.
            </p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Deploy &rarr;</h3>
            <p className="mt-4 text-xl">
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t py-8">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  );
}
