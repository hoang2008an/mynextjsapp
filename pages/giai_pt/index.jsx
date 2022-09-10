import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Selector from '../component/Selector'
import {useState} from "react";
import Setter from '../component/Setter'
import {solve_pt1,solve_pt2,solve_pt3,solve_pt4} from '../../../algorithim/pt'
export default function Home() {
    let num_param=2;
    const [option,set_option]=useState("PT bậc 2");
    const [para,set_para]=useState([]);
    let result=""
    if (para.length>0) {
        switch(para.length){
            case 2:
                result=solve_pt1(para[0],para[1]);
                break;
            case 3:
                result=solve_pt2(para[0],para[1],para[2]);
                break;
            case 4:
                result=solve_pt3(para[0],para[1],para[2],para[3]);
                break;
            case 5:
                result=solve_pt4(para[0],para[1],para[2],para[3],para[4]);

        }
    }
    switch (option) {
        case "PT bậc 1":
            num_param = 2;

            break;
        case "PT bậc 2":
            num_param = 3;
            break;
        case "PT bậc 3":
            num_param = 4;
            break;
        case "PT bậc 4":
            num_param = 5;
            break;
    }
  return (
    <div className={styles.container}>
      <Head>
        <title >Giải phương trình</title>
        <meta name="description" content="Giải phương trình bậc 1,2 ,3, 4 nhanh chóng và chính xác" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <h1 className="text-center text-3xl font-bold text-gray-800">Giải phương trình</h1>

      <Selector _value={["PT bậc 1", "PT bậc 2","PT bậc 3","PT bậc 4"]} setoption={set_option}></Selector>
        <div className="flex justify-center">
        {option==="PT bậc 1" && <div>Nhập hai tham số a và b của phương trình bậc một ax+b=0</div>}
        {option==="PT bậc 2" && <div>Nhập hai tham số a và b của phương trình bậc hai ax^2+bx+c=0</div> }
        {option==="PT bậc 3" && <div>Nhập hai tham số a và b của phương trình bậc ba ax^3+bx^2+cx+d=0</div> }
        {option==="PT bậc 4" && <div>Nhập hai tham số a và b của phương trình bậc tư ax^4+bx^3+cx^2+dx+e=0</div> }
</div>
        <Setter num_param={num_param} setoption={set_para}></Setter>
          {para.map((value,key)=>(
                <div key={key}>{value}</div>
          ))}

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
