import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import link from 'next/link'
//import dbConnect from "../utils/dbConnect";
//import mongoose from "mongoose";
export default function Home() {

  //dbConnect().then(r => console.log("connected"));
  return (

    <div className={styles.container}>
      <Head>
        <title >Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <div className='text-3xl text-green-600 p-2'>It is my next tailwind app</div>

        <p className={styles.description}>
          Get started by editing{''}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="/index.jsx" className={styles.card}>
            <h2>Giải phương trình &rarr;</h2>
            <p>Giải các phương trình từ bậc 1 đến bậc 4 nhanh chóng và chính xác</p>
          </a>

          <a href="/imaginary_number" className={styles.card}>
            <h2>Tính toán số ảo &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
