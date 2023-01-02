import React from "react";
import DetailList from "../../../../components/Details/Detail";
import styles from "./styles.module.css";

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
