import Head from 'next/head'
import Image from 'next/image'
import Footer from '../comps/footer'
import Navbar from '../comps/navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Hero List | Home</title>
        <meta name='keywords' content='heroes'/>
      </Head>
      <div>
        <h1 className={ styles.title }>Homepage</h1>
        <p className={ styles.text }> Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis dolores sapiente perferendis odit, sunt ullam ipsa dicta neque optio quod iusto nemo eius non aliquid iste nisi animi. Autem, quidem. </p>
        <p className={ styles.text }> Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis dolores sapiente perferendis odit, sunt ullam ipsa dicta neque optio quod iusto nemo eius non aliquid iste nisi animi. Autem, quidem. </p>
        <Link href="/heroes">
          <a className={ styles.btn }>See Heros Listing</a>
        </Link>
      </div>
    </>
  )
}
