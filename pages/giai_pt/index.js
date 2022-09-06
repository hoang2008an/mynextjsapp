import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Selector from '../component/Selector'
import {useState} from "react";
export default function Home() {
    const [option,setoption]=useState();
  return (
    <div className={styles.container}>
      <Head>
        <title >Giải phương trình</title>
        <meta name="description" content="Giải phương trình bậc 1,2 ,3, 4 nhanh chóng và chính xác" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <h1 className="text-center text-3xl font-bold text-gray-800">Giải phương trình</h1>
      </main>
      <Selector _value={["PT bậc 1", "PT bậc 2","PT bậc 3","PT bậc 4"]} setoption={setoption}></Selector>
        <div className="flex justify-center">
        {option==="PT bậc 1" && <div>Nhập hai tham số a và b của phương trình bậc một ax+b=0</div> }
        {option==="PT bậc 2" && <div>Nhập hai tham số a và b của phương trình bậc hai ax^2+bx+c=0</div> }
        {option==="PT bậc 3" && <div>Nhập hai tham số a và b của phương trình bậc ba ax^3+bx^2+cx+d=0</div> }
        {option==="PT bậc 4" && <div>Nhập hai tham số a và b của phương trình bậc tư ax^4+bx^3+cx^2+dx+e=0</div> }
</div>

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
