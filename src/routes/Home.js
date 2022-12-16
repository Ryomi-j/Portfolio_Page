import React from "react";
import styles from "./Home.module.css";

function Home() {
  const imgs = [
    { id: 1, title: "calculator", img: <img src="calculator.jpg" /> },
    { id: 2, title: "challenges", img: <img src="challgenge.jpg" /> },
    { id: 3, title: "contact_us", img: <img src="contact-us.jpg" /> },
    { id: 4, title: "movie", img: <img src="movie.jpg" /> },
    { id: 5, title: "tic_tac_toe", img: <img src="tic_tac_toe.jpg" /> },
    { id: 6, title: "travel", img: <img src="travel.jpg" /> },
    { id: 7, title: "web_food", img: <img src="web_food.jpg" /> },
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
            <div className={styles.small}>1</div>
            <div className={styles.largest}>2</div>
            <div className={styles.small}>3</div>
          </div>
          <div className={styles.right_col}>
            <div className={styles.medium}>4</div>
            <div className={styles.large}>5</div>
            <div className={styles.medium}>
              <img src="web_food.jpg" />
            </div>
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
