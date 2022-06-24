import type { NextPage } from "next";
import React, { useEffect, useRef, useState } from "react";

//
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Flip } from "gsap/dist/Flip";

const Home: NextPage = () => {
  const [lap, setLap] = useState(true);
  const focusRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, Flip);
  }, []);

  const data = [
    {
      parentId: "section-1-parent",
      childId: "section-1-child",
      text: "section 1",
    },
    {
      parentId: "section-2-parent",
      childId: "section-2-child",
      text: "section 2",
    },
    {
      parentId: "section-3-parent",
      childId: "section-3-child",
      text: "section 3",
    },
  ];

  const moveToFocusDiv = (id: string) => {
    const focusDiv = document.getElementById("focus-div");
    const el = document.getElementById(id);
    Flip.from(`#focus-div, #${id}, #section-1,#section-2,#section-3`, {
      ease: "power1.inOut",
      duration: 0.8,
      absolute: true,
    });
    // setLap((prev) => !prev);
    console.log("first", focusDiv.childNodes.length < 1);
    if (
      id !== focusDiv?.childNodes[0]?.getAttribute("id") ||
      focusDiv.childNodes.length < 1
    ) {
      if (focusDiv?.style.minHeight !== "100vh") {
        focusDiv.style.minHeight = "100vh";
      }
      // checking if there is any child in focus div
      // focusDiv.childNodes = [];
      // const state = Flip.getState(`#${id}`);
      // focusDiv?.appendChild(el);

      const focusDivChildId = focusDiv?.childNodes[0]?.getAttribute("id");
      // console.log("first", focusDivChildId);
      if (focusDivChildId && focusDivChildId !== id) {
        console.log("running");
        const parendivId =
          focusDiv?.childNodes[0].getAttribute("data-parent-id");

        document
          .getElementById(parendivId)
          ?.appendChild(focusDiv?.childNodes[0]);
        focusDiv?.appendChild(el);
      } else {
        focusDiv?.appendChild(el);
      }

      // gsap.to(`#focus-div #${id}`, {
      //   rotation: 360,
      //   duration: 2,
      //   scrollTrigger: {
      //     trigger: `#focus-div #${id}`,
      //     scrub: 1,
      //     pin: true,
      //     end: "+=10000",
      //   },
      // });
    } else if (
      id === focusDiv?.childNodes[0]?.getAttribute("id") &&
      focusDiv.childNodes.length >= 1
    ) {
      gsap.to("#focus-div", {
        duration: 0.5,
      });
      focusDiv.style.minHeight = 0;
      const parendivId = focusDiv?.childNodes[0].getAttribute("data-parent-id");
      document.getElementById(parendivId)?.appendChild(focusDiv?.childNodes[0]);
      // focusDiv?.appendChild(el);
    }
    // Flip.from(childState, {
    //   ease: "ease-out",+

    //   duration: 0.8,
    //   absolute: true,
    // });
  };
  // const moveToFocusDiv = (id: string) => {
  //   const state = Flip.getState(`#${id}`);

  //   Flip.from(state, {
  //     ease: "power1.inOut",
  //     duration: 0.8,
  //     absolute: true,
  //   });
  //   const focusDiv = document.getElementById("focus-div");
  //   const el = document.getElementById(id);

  //   focusDiv?.appendChild(el);
  // };
  useEffect(() => {
    console.log("running");

    gsap.to(`#focus-div .section-child`, {
      rotation: 360,
      duration: 2,
      scrollTrigger: {
        trigger: ``,
        scrub: 1,
        pin: true,
        end: "+=10000",
      },
    });
  }, []);

  return (
    <React.Fragment>
      <div className="wrapper">
        <div className="boxes">
          {/* <div className="hero">This is my hero section</div> */}
          {data.map((item, i) => {
            return (
              <div
                key={item.parentId}
                id={item.parentId}
                className={`section `}
              >
                <div
                  id={item.childId}
                  className={`section-child ${`section-child-${i + 1}`}`}
                  data-parent-id={item.parentId}
                  onClick={() => moveToFocusDiv(item.childId)}
                >
                  {item.text}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={`show-element`} id="focus-div" ref={focusRef}>
        {/* <div className={`section-child ${`section-child-1`}`}>Section 1</div> */}
      </div>
    </React.Fragment>
  );
};

export default Home;
