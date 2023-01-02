import React, {Link} from "react";
import styles from "./styles.module.css";

function Intro() {
  const imgs = [
      <img
        id="0"
        style={{
          width: "250px",
          height: "300px",
          objectFit: "contain",
          display: "block",
          marginLeft: "5px",
          borderRadius: "20px",
        }}
        src={require("./assets/calculator.jpg")}
        alt="calculator img"
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
      src={require("./assets/challanges.jpg")}
      alt="challanges img"
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
      src={require("./assets/movie.jpg")}
      alt="movie img"
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
      src={require("./assets/tic_tac_toe.jpg")}
      alt="tic tac to img"
    />,
    <img
      id="4"
      style={{
        width: "380px",
        height: "300px",
        objectFit: "contain",
        display: "block",
        // margin: "20px auto",
        borderRadius: "5px",
      }}
      src={require("./assets/travel.jpg")}
      alt="travel img"
    />,
    <img
      id="5"
      style={{
        width: "200px",
        height: "150px",
        objectFit: "contain",
        display: "block",
        marginLeft: "5px",
        borderRadius: "15px",
      }}
      src={require("./assets/web-food.jpg")}
      alt="web_food img"
    />,
  ];

  return (
    <div className={styles.home}>
      <div className={styles.cols}>
        <div className={styles.letter}>
          <div>Hello, Visitors!</div>
          <div>Welcome to my page😊</div>
          <div>This page includes some products</div>
          <div>I'v made to be a front-end engineer!</div>
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

export default Intro;
