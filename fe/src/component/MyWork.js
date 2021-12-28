import React, { useEffect, useRef } from "react";
import "./myWork.css";
import ImageSlider from "./ImageSlider-2";
import basicEcom from "../assets/images/organic.png";

function MyWork() {
  document.addEventListener("mousemove", (e) => {
    // FOR CURSOR
    const cursors = document.querySelector(".cursor");

    // console.log(e);
    // console.log(cursors, "cursor");
    // console.log(cursor.style.left);
    if (cursors === null) {
      return null;
    } else {
      cursors.style.left = e.pageX + "px";
      cursors.style.top = e.clientY + "px";
    }

    // FOR IMAGE MESSAGE
    // const cursorMessage = cursors.querySelector(".cursor span");

    const images = document.querySelectorAll("div[data-hover]");

    // images.forEach((image) => {
    //   image.addEventListener("mouseover", () => {
    //     cursorMessage.innerHTML = image.getAttribute("data-hover");
    //   });
    //   image.addEventListener("mouseout", () => {
    //     cursorMessage.innerHTML = null;
    //   });
    // });

    // FOR IMAGE TEXT (EXPERIMENTAL)
    const cursorText = document.querySelector(".cursor-text");

    // console.log(cursor.style.left);
    cursorText.style.left = e.pageX + "px";
    cursorText.style.top = e.clientY + 30 + "px";

    images.forEach((image) => {
      image.addEventListener("mouseover", () => {
        cursorText.textContent = image.getAttribute("data-hover");
        // cursorText.innerHTML = image.getAttribute("data-hover");
      });
      image.addEventListener("mouseout", () => {
        cursorText.textContent = null;
        // cursorText.innerHTML = null;
      });
    });
  });

  useEffect(() => {
    console.log("use effect");
    // 1. FADE IN ANIMATION, when in view (WORK-TITLE & WORK-LABEL)
    const faders = document.querySelectorAll(".fade-in");

    const appearOption = {
      threshold: 1,
      rootMargin: "0px 0px -100px 0px",
    };
    const appearOption2 = {
      threshold: 1,
      rootMargin: "0px 0px 0px 0px",
    };

    const appearOnScroll = new IntersectionObserver(function (
      entries,
      appearOnScroll
    ) {
      console.log(entries, "entries");
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        } else {
          entry.target.classList.add("appear");
          appearOnScroll.unobserve(entry.target);
          console.log(entry);
        }
      });
    },
    appearOption);
    const appearOnScroll2 = new IntersectionObserver(function (
      entries,
      appearOnScroll
    ) {
      console.log(entries, "entries");
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        } else {
          entry.target.classList.add("appear");
          appearOnScroll.unobserve(entry.target);
          console.log(entry);
        }
      });
    },
    appearOption2);

    faders.forEach((fader) => {
      appearOnScroll.observe(fader);
    });

    // 2. WORK-FE & WORK-FEBE
    const fadersOpacity = document.querySelectorAll(".fade-opac");

    fadersOpacity.forEach((fader) => {
      appearOnScroll2.observe(fader);
    });
  });

  return (
    <div className="work-experience">
      <div className="cursor">{/* <span></span> */}</div>
      <div className="cursor-text"></div>
      <div className="work-container">
        <div className="work-title fade-in">Some of My Latest Work</div>
        <div className="work-table">
          <div className="work-graph">
            <div className="work-fe fade-opac">
              {/* <div className="fe-icon" data-hover="PROJECT NUMERO UNO">
                <div className="fe-icon-img-container">
                  <img src="https://images.unsplash.com/photo-1635541798333-40ab7ac707ec?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80" />
                </div>
                <p>Proj 1</p>
              </div>
              <div className="fe-icon" data-hover="Project 2">
                <div className="fe-icon-img-container">
                  <img src="https://images.unsplash.com/photo-1635541798333-40ab7ac707ec?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80" />
                </div>
                <p>Proj 1</p>
              </div>
              <div className="fe-icon" data-hover="Project 3">
                <div className="fe-icon-img-container">
                  <img src="https://images.unsplash.com/photo-1635541798333-40ab7ac707ec?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80" />
                </div>
                <p>Proj 1</p>
              </div> */}
            </div>
            <div className="work-be fade-opac"></div>
            <div className="work-febe fade-opac">
              <div
                className="fe-icon"
                data-hover="Basic Ecommerce"
                href="http://basic-ecommerce.xyz"
              >
                <a href="http://basic-ecommerce.xyz" className="fe-icon-inner">
                  {/* <i className="fas fa-arrow-down fe-icon-img" /> */}
                  <div className="fe-icon-img-container">
                    <img src={basicEcom} className="fe-icon-img" />
                  </div>
                  <p className="fe-icon-img-text">Plant Shop</p>
                </a>
              </div>
            </div>
          </div>
          <div className="work-label fade-in">
            <div className="work-label-fe">Front-End</div>
            <div className="work-label-be">Back-End</div>
            <div className="work-label-febe">Full Stack</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyWork;
