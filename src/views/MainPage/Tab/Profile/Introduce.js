import React from "react";
import styles from "./styles.module.css";
import { GoMention, GoMarkGithub } from "react-icons/go";
import { FcBusinesswoman, FcIphone, FcLink } from "react-icons/fc";

function Introduction() {
  const skills = [
    { title: "html", img: "html" },
    { title: "css", img: "css" },
    { title: "js", img: "js" },
    { title: "react", img: "react" },
    { title: "redux", img: "redux" },
    { title: "git", img: "git" },
    { title: "github", img: "github" },
    { title: "Node.js", img: "Nodejs" },
    { title: "MySQL", img: "MySQL" },
  ];

  return (
    <div className={styles.home}>
      <div className={styles.title}>Introduction</div>
      <div className={styles.content}>
        <div className={styles.profileImgFrame}>
          <img
            src={require("./assets/profile.png")}
            alt="profile img"
            className={styles.photo}
          />
        </div>
        <div className={styles.detailFrame}>
          <div className={styles.info}>
            <div className={styles.itemTitle}>Personal Info</div>
            <div className={styles.infoFrame}>
              <p>
                <FcBusinesswoman size="50" className="icon" />
              </p>
              <p>
                이름
                <br />
                김은정
              </p>
              <p>
                <FcIphone size="50" className="icon" />
              </p>
              <p>
                연락처
                <br /> 010.4307.7246
              </p>
              <p>
                <GoMention size="40" className="icon" />
              </p>
              <p>
                이메일 <br />
                ryomi.j78@gmail.com
              </p>
              <p >
                <GoMarkGithub size="40" className="icon"/>
              </p>
              <p>
                <a
                  className={styles.profileLink}
                  href="https://github.com/Ryomi-j"
                >
                  Github
                </a>
              </p>
              <p>
                <FcLink size="50" className="icon" />
              </p>
              <p>
                <a
                  className={styles.profileLink}
                  href="https://premubo.tistory.com/"
                  style={{marginLeft:"-90px"}}>
                  Blog
                </a>
              </p>
            </div>
            <div className={styles.responsiveInfo}>
              <p style={{ fontFamily: "Dongle", fontSize: "30px" }}>
                <FcBusinesswoman size="50" />
                <b>김은정</b>
              </p>
              <p>
                <FcIphone size="50" />
                010.4307.7246
              </p>
              <p>
                <GoMention size="35" /> ryomi.j78@gmail.com
              </p>
              <p>
                <GoMarkGithub size="35" className="icon"  style={{marginRight:"10px"}}/>
                <a href="https://github.com/Ryomi-j" target="_blank">
                  Github
                </a>
              </p>
              <p>
                <FcLink size="50" className="icon"  style={{marginRight:"10px"}} />
                <a href="https://premubo.tistory.com/" target="_blank">
                  Blog
                </a>
              </p>
            </div>
          </div>
          <section className={styles.skillwrap}>
            <div className={styles.itemTitle}>Skills</div>
            <div className={styles.skillIcon}>
              {skills.map((skill, index) => (
                <div key={index}>
                  <img
                    key={index}
                    src={require("./assets/" + skill.img + ".png")}
                    alt={skill.title}
                    className={styles.logos}
                  />
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
