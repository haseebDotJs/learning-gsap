import type { NextPage } from "next";
import React, { useEffect, useState } from "react";

//
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { snap } from "gsap-trial/src/all";

const Home: NextPage = () => {
  const [pauseCarousel, setPauseCarousel] = useState<boolean>(false);
  // let tween;
  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);
  //   gsap.defaults({ ease: "none", duration: 2 });

  //   // timeline
  //   gsap.utils.toArray(".box").forEach((panel, i) => {
  //     ScrollTrigger.create({
  //       trigger: panel,
  //       // start: "top top",
  //       pin: true,
  //       pinSpacing: false,
  //     });
  //   });

  //   ScrollTrigger.create({
  //     snap: 1 / 4, // snap whole page to the closest section!
  //   });
  // }, []);

  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);
  //   const from = (__className: string) => {
  //     return {
  //       scrollTrigger: {
  //         trigger: __className,
  //         toggleActions: "restart pause reverse pause",
  //       },
  //       rotation: 360,
  //       // ease: "elastic",
  //       x: 0,
  //       // immediateRender: true,
  //       // paused: true,
  //       // opacity: 0,
  //     };
  //   };
  //   const to = (__className: string) => {
  //     return {
  //       scrollTrigger: {
  //         trigger: __className,
  //         // toggleActions: "play pause reverse restart",
  //         start: "center center",
  //         // end: "bottom center",
  //         markers: true,
  //         scrub: 1,
  //         pin: true,
  //       },
  //       opacity: 1,
  //       x: 400,
  //       scale: 2.5,
  //       duration: 1,
  //       rotation: 360,
  //       end: "+=300",
  //     };
  //   };
  //   // gsap.to(".green", to(".green"));
  //   gsap.to(".orange", to(".orange"));
  //   // gsap.to(".green", { x: 100, duration: 1 });
  //   // gsap.to(".green", { y: 50, duration: 1, delay: 1 }); //wait 1 second
  //   // gsap.to(".green", { opacity: 0, duration: 1, delay: 2 });
  //   var tl = gsap.timeline({ repeat: 2, repeatDelay: 1 });
  // }, []);

  // const play = () => {
  //   tween?.play();
  // };
  // const reverse = () => {
  //   tween?.reverse();
  // };
  // const resume = () => {
  //   tween?.resume();
  // };
  // const pause = () => {
  //   tween?.pause();
  // };
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline();
    tl.set(".animation-text", { opacity: 0 });
    tl.to(".section-div", {
      duration: 5,
      x: 500,
      // scrollTrigger: {
      //   // start: "top 50%",
      //   markers: true,
      //   trigger: ".section-div",
      //   toggleActions: "restart reverse none none",
      //   scrub: true,
      // },
    })
      .to(".section-div", { scale: 1.75, rotate: 360, duration: 5 })
      .to(".animation-text", { opacity: 1, ease: "ease-in-out" });
    ScrollTrigger.create({
      animation: tl,
      trigger: ".section-div",
      start: "center center",
      end: "+=1000px",
      scrub: true,
      pin: true,
      pinSpacing: true,
      // anticipatePin: 1,
    });
  }, []);

  return (
    <React.Fragment>
      <div
        className="wrapper"
        onMouseEnter={() => setPauseCarousel(true)}
        onMouseLeave={() => setPauseCarousel(false)}
      >
        <div className="boxes">
          <div className="hero">This is my hero section</div>
          <div className="section">
            <div className="section-div">
              <p className="animation-text">How was the Animation</p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
