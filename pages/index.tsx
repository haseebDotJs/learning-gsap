import type { NextPage } from "next";
import React, { useEffect } from "react";

//
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Home: NextPage = () => {
  // let tween;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const from = (__className: string) => {
      return {
        scrollTrigger: {
          trigger: __className,
          toggleActions: "restart pause reverse pause",
        },
        rotation: 360,
        // ease: "elastic",
        x: 0,
        // immediateRender: true,
        // paused: true,
        // opacity: 0,
      };
    };
    const to = (__className: string) => {
      return {
        scrollTrigger: {
          trigger: __className,
          toggleActions: "restart pause reverse pause",
          start: "top center",
          end: "bottom 80%",
          endTrigger: "grey",
          markers: true,
        },
        opacity: 1,
        x: 400,
        scale: 2.5,
        duration: 3,
        rotation: 360,
      };
    };
    // gsap.fromTo(".green", from(".green"), to(".green"));
    gsap.to(".orange", to(".green"));
    // gsap.fromTo(".grey", from(".grey"), to(".grey"));
  }, []);

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
  return (
    <React.Fragment>
      <div className="home">
        <div className="box-container">
          <div className="box green"></div>
        </div>
        <div className="box-container">
          <div className="box orange"></div>
        </div>
        <div className="box-container">
          <div className="box grey"></div>
        </div>
      </div>
      {/* <div>
        <div className="">
          <button onClick={play}>Play</button>
        </div>{" "}
        <div className="">
          <button onClick={reverse}>Reverse</button>
        </div>
        <div className="">
          <button onClick={resume}>Resume</button>
        </div>
        <div className="">
          <button onClick={pause}>Pause</button>
        </div>
      </div> */}
    </React.Fragment>
  );
};

export default Home;
