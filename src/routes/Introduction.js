import React from "react";
import styles from "./Introduction.module.css";

function Introduction() {
  return (
    <>
      <div className={styles.title}>Introduction</div>
      <div className={styles.content}>
        <div className={styles.img}>
          <img src="img/profile.png" alt="photo" className={styles.photo}/>
        </div>
        <div className={styles.detail}>
          <div className={styles.info}></div>
          <div className={styles.contact}></div>
        </div>
      </div>
    </>
  );
}

export default Introduction;
