import Link from 'next/link'
import Image from 'next/image'
import Button from 'react-bootstrap/Button'
export default function Logo(){
    return(
        <Link href="/">

        <section className="w-28 p-0 m-0 cursor-pointer">
            <Button as="a" variant="outline-primary">Button</Button>
            <Image src="/Math.svg" alt="MathVN" width={150} height={150}></Image>
            <p className="text-center font-bold text-red-600 text-2xl absolute -translate-y-5 translate-x-1">MathVN</p>
        </section>
        </Link>
    )
}