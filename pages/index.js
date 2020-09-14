import Head from 'next/head'
import dynamic from 'next/dynamic'
import React, { useEffect } from 'react'

import styles from '../styles/Home.module.css'

// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

const DynamicComponentWithNoSSR = dynamic(
  () => import('./svg'),
  { ssr: false }
)

export default function Home() {
  // ScrollMagic === ScrollTrigger
  // const tl = gsap.timeline()
  // tl.from("#room", { scale: 5 })
  
  // ScrollTrigger.defaults({
  //   toggleActions: "restart pause resume none",
  //   markers: true,
  // })

  // ScrollTrigger.create({
  //   animation: tl,
  //   trigger: ".container",
  //   start: 300,
  //   end: 600,
  // })
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DynamicComponentWithNoSSR />

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Ligma &copy;
        </a>
      </footer>
    </div>
  )
}
