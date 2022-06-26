import type { NextPage } from "next";
import Image from "next/image";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

//
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Flip } from "gsap/dist/Flip";

gsap.registerPlugin(Flip, ScrollTrigger);

const Home: NextPage = () => {
  const containerRef = useRef(null);
  const squaresRef = useRef(null);
  useEffect(() => {
    squaresRef.current = gsap.utils.toArray(".swap");
    const state = Flip.getState(squaresRef.current);
    Flip.from(state, { duration: 2, ease: "power1.inOut" });
  }, []);

  const swap = ([a, b]: any) => {
    if (containerRef.current) {
      containerRef.current.children[0] === a
        ? containerRef.current.appendChild(a)
        : containerRef.current.appendChild(b);
    }
  };
  const doFlip = () => {
    const state = Flip.getState(squaresRef.current);

    swap(squaresRef.current);

    // Animate from the initial state to the end state
    Flip.from(state, { duration: 2, ease: "power1.inOut" });
  };

  // const data = [
  //   {
  //     img: "https://images.unsplash.com/photo-1648737154448-ccf0cafae1c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  //     extraClass: "relocate",
  //     id: 1,
  //   },
  //   {
  //     img: "https://images.unsplash.com/photo-1648737154448-ccf0cafae1c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  //     id: 2,
  //   },
  //   {
  //     img: "https://images.unsplash.com/photo-1648737154448-ccf0cafae1c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  //     id: 3,
  //   },
  //   {
  //     img: "https://images.unsplash.com/photo-1648737154448-ccf0cafae1c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  //     extraClass: "relocate",
  //     id: 4,
  //   },
  //   {
  //     img: "https://images.unsplash.com/photo-1648737154448-ccf0cafae1c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  //     id: 5,
  //   },
  //   {
  //     img: "https://images.unsplash.com/photo-1648737154448-ccf0cafae1c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  //     id: 6,
  //   },
  //   {
  //     img: "https://images.unsplash.com/photo-1648737154448-ccf0cafae1c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  //     extraClass: "relocate",
  //     id: 7,
  //   },
  //   {
  //     img: "https://images.unsplash.com/photo-1648737154448-ccf0cafae1c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  //     id: 8,
  //   },
  // ];
  return (
    <div className="container" ref={containerRef}>
      <div className="swap" onClick={doFlip}>
        1
      </div>
      <div className="swap" onClick={doFlip}>
        2
      </div>
    </div>
  );
};

export default Home;
