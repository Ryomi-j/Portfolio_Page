import React from "react";
import DetailList from "../components/Detail";
import styles from "./History.module.css";

function History() {
  return (
    <div className={styles.home}>
      <div className={styles.title}>History</div>
      <div className={styles.contents}>
        <DetailList />
      </div>
    </div>
  );
}

export default History;
