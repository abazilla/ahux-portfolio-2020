import React from 'react'

import styles from '../styles/Home.module.css'

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
console.log({ styles })

export default function Home() {
  // ScrollMagic === ScrollTrigger
  const tl = gsap.timeline()
  tl.from("#room", { scale: 5 })
  
  ScrollTrigger.defaults({
    toggleActions: "restart restart restart restart",
    markers: true,
  })

  ScrollTrigger.create({
    animation: tl,
    trigger: "body",
    start: 300,
    end: 600,
  })
  return (
      <main className={styles.main}>
        <div className={styles.svgs}>
          {/* <img id="foreground" src="/foreground.svg" alt="Foreground" className={styles.homeFg} /> fg is to thhe right of mid, in front of bg */}
          {/* <img id="mid" src="/mid.svg" alt="Mid" className={styles.homeMid} /> mid is in front of the apartment bg */}
          {/* <img id="background" src="/background.svg" alt="Background" className={styles.homeBg} /> bg is the apartment that room is in */}
          <img id="room" src="/room.svg" alt="Room" className={styles.homeRoom} />
        </div>
      </main>
  )
}
