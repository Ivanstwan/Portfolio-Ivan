import React, { useState, useEffect } from "react";
import "./myWorkDetail.css";
import DisplayProj from "../assets/images/display-1.jpg";

import iconReact from "../assets/images/react-js.png";
import iconAws from "../assets/images/aws.png";
import iconNode from "../assets/images/node-js.png";
import iconMySQL from "../assets/images/mysql.png";

function MyWorkDetail() {
  const [preview, setPreview] = useState(false);

  useEffect(() => {
    console.log("use effect");
    // 1. FADE IN ANIMATION, when in view (WORK-TITLE & WORK-LABEL)
    const slideLeft = document.querySelectorAll(".slide-left");
    const slideRight = document.querySelectorAll(".slide-right");

    const appearOption = {
      threshold: 1,
      rootMargin: "0px 0px 80px 0px",
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

    slideLeft.forEach((slider) => {
      appearOnScroll.observe(slider);
    });
    slideRight.forEach((slider) => {
      appearOnScroll.observe(slider);
    });
  });

  return (
    <div className="my-work-detail">
      <div className="mw-project-container">
        <hr className="mw-dash-border" />
        <div className="mw-project">
          <div className="mw-project-text-container  slide-left">
            <div className="mw-project-title">Organic Plant Shop</div>
            <div className="mw-project-text">
              A mock Ecommerce website that sells variety organic plant from
              flower, tree, and herb. You as a client able from register an
              account to buying and checkout the plant you choose. The project
              is deployed on AWS (Amazon Web Service) and using MERN stack with
              MySQL database.
            </div>
            <div className="mw-project-icon-container">
              <div className="mw-project-icon">
                <img src={iconMySQL} className="mw-project-icon-img" />
              </div>
              <div className="mw-project-icon">
                <img src={iconReact} className="mw-project-icon-img" />
              </div>
              <div className="mw-project-icon">
                <img src={iconNode} className="mw-project-icon-img" />
              </div>
              <div className="mw-project-icon">
                <img src={iconAws} className="mw-project-icon-img" />
              </div>
            </div>

            <hr className="mw-dash-border-text" />

            <div className="mw-project-detail">
              <div className="mw-project-banner-text">
                <div className="mw-project-banner-text-1">
                  Check out the deployed website.
                </div>
                <div className="mw-project-banner-text-2">
                  Check out the deployed website.
                </div>
              </div>
              <a className="mw-project-link" href="http://basic-ecommerce.xyz">
                www.basic-ecommerce.xyz
              </a>
              <a
                className="mw-project-link-2"
                href="https://github.com/Ivanstwan/Basic-Ecommerce-Clean"
              >
                GitHub Source Code
              </a>
            </div>
            <div className="mw-project-link-hover" />
          </div>
          <div className="mw-project-image-container slide-right">
            <img src={DisplayProj} className="mw-project-image" />
          </div>
        </div>
        {/* PREVIEW */}
        <div className="mw-project-preview">
          <div className="mw-proj-preview-title-container">
            <div
              className="mw-proj-preview-title"
              onClick={() => {
                setPreview(!preview);
              }}
            >
              <div className="mw-proj-prev-text">
                Website Preview - Userflow
              </div>
              <i
                className={
                  preview
                    ? "fas fa-long-arrow-alt-right mw-proj-prev-icon active"
                    : "fas fa-long-arrow-alt-right mw-proj-prev-icon"
                }
              />
            </div>
          </div>
          <div
            className={
              preview
                ? "mw-proj-userflow-container"
                : "mw-proj-userflow-container hidden"
            }
          >
            <div className={preview ? "mw-proj-user" : "mw-proj-user hidden"}>
              {/* <iframe
                width="420"
                height="315"
                src="https://www.youtube.com/embed/tgbNymZ7vqY"
              ></iframe> */}
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/XagUoSmO_q4"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            {/* <div className="mw-proj-admin"></div> */}
          </div>
        </div>
        <hr className="mw-dash-border" />
      </div>
    </div>
  );
}

export default MyWorkDetail;
