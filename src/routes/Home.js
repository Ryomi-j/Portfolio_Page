import React from "react";
import styles from "./Home.module.css";

function Home() {
  const imgs = [
    <img
      id="0"
      style={{
        width: "250px",
        height: "300px",
        objectFit: "contain",
        display: "block",
        marginLeft: "5px",
      }}
      src="img/calculator.jpg"
      alt="calculator"
    />,
    <img
      id="1"
      style={{
        width: "250px",
        height: "170px",
        objectFit: "contain",
        display: "block",
        marginLeft: "3px",
        borderRadius: "15px",
      }}
      src="img/challanges.jpg"
      alt="challanges"
    />,
    <img
      id="2"
      style={{
        width: "200px",
        height: "150px",
        objectFit: "contain",
        display: "block",
        borderRadius: "10px",
      }}
      src="img/movie.jpg"
      alt="movie"
    />,
    <img
      id="3"
      style={{
        width: "250px",
        height: "170px",
        objectFit: "contain",
        display: "block",
        borderRadius: "5px",
      }}
      src="img/tic tac toe.jpg"
      alt="tic tac to"
    />,
    <img
      id="4"
      style={{
        width: "380px",
        height: "300px",
        objectFit: "contain",
        display: "block",
        margin:'0 auto',
        borderRadius: "5px",
      }}
      src="img/travel.jpg"
      alt="travel"
    />,
    <img
      id="5"
      style={{
        width: "200px",
        height: "150px",
        objectFit: "contain",
        display: "block",
        marginLeft: "4px",
        borderRadius: "15px",
      }}
      src="img/web-food.jpg"
      alt="web_food"
    />,
  ];

  return (
    <div className={styles.home}>
      <div className={styles.cols}>
        <div className={styles.letter}>
          <div>Hello, Visitors!</div>
          <div>Welcome to my page😊</div>
          <div>This page includes some products</div>
          <div>I practiced to be a front-end engineer!</div>
          <div> Just look around🙋‍♀️</div>
        </div>
        <div className={styles.imgs}>
          <div className={styles.left_col}>
            <div className={styles.small}>{imgs[2]}</div>
            <div className={styles.largest}>{imgs[4]}</div>
            <div className={styles.small}>{imgs[5]}</div>
          </div>
          <div className={styles.right_col}>
            <div className={styles.medium}>{imgs[3]}</div>
            <div className={styles.large}>{imgs[0]}</div>
            <div className={styles.medium}>{imgs[1]}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;