import Head from 'next/head'
import React, { useEffect } from 'react'

import useScroll from '../utils/useScroll.js'
import styles from '../styles/Home.module.css'

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const { scrollX, scrollY, scrollDirection } = useScroll();
  console.log({ scrollX, scrollY, scrollDirection })
  // ScrollMagic === ScrollTrigger
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.svgs}>
          <img id="room" src="/room.svg" alt="Room" className={styles.homeRoom} />
          <img id="foreground" src="/foreground.svg" alt="Foreground" className={styles.homeFg} /> {/* fg is to thhe right of mid, in front of bg */}
          <img id="mid" src="/mid.svg" alt="Mid" className={styles.homeMid} /> {/*mid is in front of the apartment bg */}
          <img id="background" src="/background.svg" alt="Background" className={styles.homeBg} /> {/* bg is the apartment that room is in */}
        </div>
          {/* <img src="/Background.svg" alt="Vercel Logo" className={styles.logo} /> */}
        {/* <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div> */}
      </main>

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
