import type { NextPage } from "next";
import React, { useEffect } from "react";

//
import { gsap } from "gsap";

const Home: NextPage = () => {
  let tween;
  if (typeof document !== "undefined") {
    tween = gsap.fromTo(
      ".box",
      {
        rotation: 360,
        duration: 2,
        ease: "elastic",
        x: 0,
        // immediateRender: true,
        // paused: true,
        opacity: 0,
      },
      {
        opacity: 1,
        x: 100,
        scale: 1.5,
      }
    );
  }
  // useEffect(() => {
  //   gsap.to(document.querySelectorAll(".box"), {
  //     rotation: 27,
  //     x: 100,
  //     duration: 1,
  //   });
  // }, []);

  const play = () => {
    tween?.play();
  };
  const reverse = () => {
    tween?.reverse();
  };
  const resume = () => {
    tween?.resume();
  };
  const pause = () => {
    tween?.pause();
  };
  return (
    <React.Fragment>
      <div className="home">
        <div>
          <div className="box green"></div>
        </div>
        <div>
          <div className="box orange"></div>
        </div>
        <div>
          <div className="box grey"></div>
        </div>
      </div>
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
    </React.Fragment>
  );
};

export default Home;
