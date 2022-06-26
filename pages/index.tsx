import type { NextPage } from "next";
import Image from "next/image";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

//
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Flip } from "gsap/dist/Flip";

gsap.registerPlugin(Flip, ScrollTrigger);

const Home: NextPage = () => {
  const insertRef = useRef(null);

  const toggleRelocation = () => {
    const relocate = document.querySelectorAll(".relocate");

    relocate.forEach((item) => {
      insertRef.current.appendChild(item);
    });
    const items = gsap.utils.toArray(".move");

    const state = Flip.getState(items);
    Flip.from(state, {
      // duration: 0.5,
      scale: true,
      absolute: true,
      ease: "power1.inOut",
    });
  };

  const data = [
    {
      img: "https://images.unsplash.com/photo-1648737154448-ccf0cafae1c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      extraClass: "relocate",
      id: 1,
    },
    {
      img: "https://images.unsplash.com/photo-1648737154448-ccf0cafae1c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      id: 2,
    },
    {
      img: "https://images.unsplash.com/photo-1648737154448-ccf0cafae1c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      id: 3,
    },
    {
      img: "https://images.unsplash.com/photo-1648737154448-ccf0cafae1c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      extraClass: "relocate",
      id: 4,
    },
    {
      img: "https://images.unsplash.com/photo-1648737154448-ccf0cafae1c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      id: 5,
    },
    {
      img: "https://images.unsplash.com/photo-1648737154448-ccf0cafae1c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      id: 6,
    },
    {
      img: "https://images.unsplash.com/photo-1648737154448-ccf0cafae1c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      extraClass: "relocate",
      id: 7,
    },
    {
      img: "https://images.unsplash.com/photo-1648737154448-ccf0cafae1c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      id: 8,
    },
  ];
  return (
    <React.Fragment>
      <div className="wrapper">
        {data.map((item) => {
          return (
            <div key={item.id} className={`move ${item.extraClass || ""}`}>
              <Image
                src={item.img}
                alt="random "
                width="400px"
                height={"200px"}
              />
            </div>
          );
        })}
      </div>
      <div className={`insert`} ref={insertRef}>
        {/* <div className={`section-child ${`section-child-1`}`}>Section 1</div> */}
      </div>
      <div>
        <button onClick={toggleRelocation}>Toggle Relocation</button>
      </div>
    </React.Fragment>
  );
};

export default Home;
