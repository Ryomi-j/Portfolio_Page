import React from "react";
import styles from "./Detail.module.css";

function Detail({ content }) {
  return (
    <>
      <div className={styles.itemTitle}>{content.title}</div>
      <div>
        <div className={styles.img}>{content.img}</div>
        <div className={styles.detail}>
          <div>Detail :</div>
          <div>{content.description}</div>
          <div>
            <b>Function : </b> {content.func}
          </div>
          <div>
            <b>
              <a href={content.link}>블로그 게시글 보기</a>
            </b>
          </div>
          <div>
            <b>Skills : </b> {content.skills}
          </div>
        </div>
      </div>
    </>
  );
}

function DetailList() {
  const contents = [
    {
      id: 1,
      title: "My Upcomming Challenges",
      img: "이미지",
      description: `
        Udemy 강의를 수강하며 HTML과 CSS를 사용해 처음으로 개발하였습니다. 
        단순히 클론코딩 하지 않고, 완성 이미지를 보고 스스로 구현해본 후 강의를 수강하며 수정 및 보완하는 방식으로 개발하였습니다.
        이 페이지를 만들며 어려웠던 부분은 favicon과 요소간 겹침에 관한 것입니다. 
        이전에 사용해 본 경험이 없는 새로운 부분이였고 이론을 견고히 하기 위해 경험이 중요함을 체감하였습니다.`,
      func: `하루 또는 일정 기간의 목표를 세우는 페이지 입니다. `,
      link: "https://premubo.tistory.com/entry/HTMLCSS-My-Upcoming-Challenges",
      skills: "HTML, CSS",
    },
    {
      id: 2,
      title: "Travel",
      img: "img/",
      description: `
        Udemy 강의를 수강하며 해당 페이지를 구현했습니다. 
        Sementic 요소와 postion 속성을 학습할 수 있는 좋은 기회였습니다.

        `,
      func: `각 나라의 도시를 알아 볼 수 있는 페이지입니다.`,
      link: "https://premubo.tistory.com/entry/HTMLCSSTravel",
      skills: "HTML, CSS",
    },
    {
      id: 3,
      title: "Web Food",
      img: "img/",
      description: "설명",
      func: "기능",
      link: "https://premubo.tistory.com/entry/HTMLCSS-Responsive-Web",
      skills: "HTML, CSS",
    },
    {
      id: 4,
      title: "Tic, Tac, Toe",
      img: "img/",
      description: "설명",
      func: "기능",
      link: "https://premubo.tistory.com/entry/Practice-Tic-Tac-Toe",
      skills: "HTML, CSS, JS, DOM",
    },
    {
      id: 5,
      title: "calculator",
      img: "img/",
      description: "설명",
      func: "기능",
      link: "https://premubo.tistory.com/entry/Practice-Caculator",
      skills: "React",
    },
    {
      id: 6,
      title: "Movie App",
      img: "img/",
      description: "설명",
      func: "기능",
      link: "https://premubo.tistory.com/entry/React-Movie-App",
      skills: "React",
    },
  ];
  return (
    <div>
      {contents.map((content) => (
        <Detail
          key={content.id}
          content={content}
          title={content.title}
          img={content.img}
          description={content.description}
          func={content.func}
          link={content.link}
          skills={content.link}
        />
      ))}
    </div>
  );
}

export default DetailList;
