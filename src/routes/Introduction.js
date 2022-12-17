import React from "react";
import styles from "./Introduction.module.css";
import { GoMention, GoMarkGithub } from "react-icons/go";
import { FcBusinesswoman, FcIphone, FcLink } from "react-icons/fc";

function Introduction() {
  return (
    <div className={styles.home}>
      <div className={styles.title}>Introduction</div>
      <div className={styles.content}>
        <div className={styles.img}>
          <img src="https://Ryomi-j.github.io/Portfolio_Page/img/profile.png" alt="photo" className={styles.photo} />
        </div>
        <div className={styles.detail}>
          <div className={styles.info}>
            <div className={styles.headline}>Personal Info</div>
            <table className={styles.table}>
              <tr>
                <th rowSpan={2} className={styles.icon}>
                  <FcBusinesswoman size="50" />
                </th>
                <th>이름</th>
                <th rowSpan={2} className={styles.icon}>
                  <FcIphone size="50"  />
                </th>
                <th><b>연락처</b></th>
                <th rowSpan={2} className={styles.icon}>
                  <GoMention size="50" />
                </th>
                <th><b>이메일</b></th>
              </tr>
              <tr>
                <th className={styles.value}>김은정</th>
                <th className={styles.value}>010.4307.7246</th>
                <th className={styles.value}>ryomi.j78@gmail.com</th>
              </tr>
              <tr>
                <th></th>
                <th></th>
                <th colSpan={3}>
                  <GoMarkGithub size="40" className="icon" /><span>    </span>
                  <b>  <a href="https://github.com/Ryomi-j">Github</a></b>
                </th>
                <th colSpan={3}>
                  <FcLink size="50" className="icon" />  
                  <b>  <a href="https://premubo.tistory.com/">Blog</a></b>
                </th>
                <th></th>
                <th></th>
              </tr>
            </table>
          </div>
          <div className={styles.contact}></div>
          <div className={styles.headline}>Skills</div>
          <div>
            <img className={styles.logos} src="https://Ryomi-j.github.io/Portfolio_Page/img/skills/html.png" alt="html logo" />
            <img className={styles.logos} src="https://Ryomi-j.github.io/Portfolio_Page/img/skills/css.png" alt="css logo" />
            <img className={styles.logos} src="https://Ryomi-j.github.io/Portfolio_Page/img/skills/js.png" alt="Java Script logo" />
            <img className={styles.logos} src="https://Ryomi-j.github.io/Portfolio_Page/img/skills/react.png" alt="react logo" />
            <img className={styles.logos} src="https://Ryomi-j.github.io/Portfolio_Page/img/skills/redux.png" alt="redux logo" />
            <img className={styles.logos} src="https://Ryomi-j.github.io/Portfolio_Page/img/skills/git.png" alt="git logo" />
            <img className={styles.logos} src="https://Ryomi-j.github.io/Portfolio_Page/img/skills/github.png" alt="github logo" />
            <img className={styles.logos} src="https://Ryomi-j.github.io/Portfolio_Page/img/skills/Node.js_logo.png" alt="Node.js logo" />
            <img className={styles.logos} src="https://Ryomi-j.github.io/Portfolio_Page/img/skills/MySQL.jpg" alt="MySQL logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
