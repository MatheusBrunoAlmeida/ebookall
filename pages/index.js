import Head from 'next/head'

import Header from '../widgets/Header';
import Banner from '../widgets/Banner';

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ebook</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;600&display=swap" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap" rel="stylesheet"></link>
      </Head>

      <Banner />
    </div>
  )
}
