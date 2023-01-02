import React from "react";
import styles from "./styles.module.css";

function Detail({ content }) {
  return (
    <>
      <div className={styles.contentBox}>
        <div className={styles.titleImgFrame}>
          <div className={styles.itemTitle}>{content.title}</div>
          <div>{content.img}</div>
        </div>
        <div className={styles.detailFrame}>
          <div className={styles.highlight}>Detail :</div>
          <div>{content.description}</div>
          <br />
          <div>
            <button className={styles.linkBtn}>
              <a className="linkItem" target="_blank" href={content.url}>
                페이지 바로가기
              </a>
            </button>
            <button className={styles.linkBtn}>
              <a className="linkItem" target="_blank" href={content.blog}>
                블로그 게시글 보기
              </a>
            </button>
          </div>
          <br />
          <div className={styles.highlight}>Skills : </div>
          <span>{content.skills}</span>
          <br />
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
      img: <img src={require("./assets/challanges.jpg")} alt="challanges" className={styles.projectImg}/>,
      description: `
        Udemy 강의를 수강하며 HTML과 CSS를 사용해 하루 또는 일정 기간의 목표를 세우는 페이지를 구현했습니다. 
        단순히 클론코딩 하지 않고, 완성 이미지를 보고 스스로 구현해본 후 강의를 수강하며 수정 및 보완하는 방식으로 개발하였습니다.
        이 페이지를 만들며 어려웠던 부분은 favicon과 요소간 겹침에 관한 것입니다. 
        이전에 사용해 본 경험이 없는 새로운 부분이였고 이론을 견고히 하기 위해 경험이 중요함을 체감하였습니다.`,
      url: `https://github.com/Ryomi-j/UpcomingChallenges.git `,
      blog: "https://premubo.tistory.com/entry/HTMLCSS-My-Upcoming-Challenges",
      skills: [
        <img
          className={styles.skillLogos}
          src={require("./assets/html.png")}
          alt="html logo"
        />,
        <img
          className={styles.skillLogos}
          src={require("./assets/css.png")}
          alt="css logo"
        />,
      ],
    },
    {
      id: 2,
      title: "Travel",
      img: <img src={require("./assets/travel.jpg")} alt="travel"  className={styles.projectImg}/>,
      description: `
        Udemy 강의를 수강하며 각 나라의 도시를 알아 볼 수 있는 페이지를 구현했습니다. 
        해당 페이지를 구현하며 position속성을 사용해 메인 페이지에 배경사진을 넣는 것을 연습을 했습니다.
        메인페이지에서 'Discover places' 또는 'Destination' 버튼을 누르면 
        각 도시에 대한 간략한 설명이 적힌 페이지를 확인할 수 있습니다.
        `,
      url: `https://github.com/Ryomi-j/Travel-Goals.git`,
      blog: "https://premubo.tistory.com/entry/HTMLCSSTravel",
      skills: [
        <img
          className={styles.skillLogos}
          src={require("./assets/html.png")}
          alt="html logo"
        />,
        <img
          className={styles.skillLogos}
          src={require("./assets/css.png")}
          alt="css logo"
        />,
      ],
    },
    {
      id: 3,
      title: "Web Food",
      img: <img src={require("./assets/web-food.jpg")} alt="web_food"  className={styles.projectImg}/>,
      description: `
        Udemy 강의에서 반응형 웹을 학습하며 만든 페이지 입니다. 
        해당 페이지를 만들며 unit과 미디어쿼리를 이해할 수 있었고 적절히 사용하는 방법을 학습하였습니다.`,
      url: "https://github.com/Ryomi-j/Web-Food.git",
      blog: "https://premubo.tistory.com/entry/HTMLCSS-Responsive-Web",
      skills: [
        <img
          className={styles.skillLogos}
          src={require("./assets/html.png")}
          alt="html logo"
        />,
        <img
          className={styles.skillLogos}
          src={require("./assets/css.png")}
          alt="css logo"
        />,
      ],
    },
    {
      id: 4,
      title: "Tic, Tac, Toe",
      img: <img src={require("./assets/tic tac toe.jpg")} alt="tic tac toe"  className={styles.projectImg}/>,
      description: `
        Udemy 강의를 수강하며 DOM 연습을 위해 구편한 페이지입니다. 
        자바스크립트와 DOM을 사용해 각 선수의 정보를 입력받아 게임을 진행할 수 있으며 승자를 가려내는 기능을 하는 페이지 입니다.
        해당 페이지 구현을 통해 modal창, defer과 같은 새로운 개념들을 익힐 수 있었고 자바스크립트와 DOM의 적절한 사용을 통해
        게임을 구현한 것에 보람을 느낄 수 있었습니다`,
      url: "https://ryomi-j.github.io/Play-Tic-Tac-To/",
      blog: "https://premubo.tistory.com/entry/Practice-Tic-Tac-Toe",
      skills: [
        <img
          className={styles.skillLogos}
          src={require("./assets/html.png")}
          alt="html logo"
        />,
        <img
          className={styles.skillLogos}
          src={require("./assets/css.png")}
          alt="css logo"
        />,
        <img
          className={styles.skillLogos}
          src={require("./assets/js.png")}
          alt="Java Script logo"
        />,
      ],
    },
    {
      id: 5,
      title: "Calculator",
      img: <img src={require("./assets/calculator.jpg")}  className={styles.projectImg}/>,
      description: `
        React 학습 후 만든 계산기 입니다. 
        아이폰 계산기를 모델로 삼아 만들었으며, 두 숫자를 계산할 수 있습니다. 
        useState와 onClick이벤트의 작용방식을 이해하고 사용하는 것에 익숙해 질 수 있었습니다.`,
      url: "https://ryomi-j.github.io/Calculator",
      blog: "https://premubo.tistory.com/entry/Practice-Caculator",
      skills: (
        <img
          className={styles.skillLogos}
          src={require("./assets/react.png")}
          alt="react logo"
        />
      ),
    },
    {
      id: 6,
      title: "Movie App",
      img: <img src={require("./assets/movie.jpg")} alt="movie" className={styles.projectImg} />,
      description: `
        노마드 코더 강의를 통해 React의 큰 틀을 이해하며 만든 페이지입니다.
        해당 강의를 통해 fetch한 데이터를 관리 및 사용하고 렌더링하는 등의 
        기본적인 내용을 학습한 후 Detail 페이지를 만들고 전체 페이지의 스타일링했습니다.

        해당 페이지는 반응형 웹으로 평점 8.8 이상의 영화 목록을 제공합니다. 
        onMouseEnter과 onMoseLeave를 사용해 각 영화 Poster에 Hover 효과를 주었으며,
        영화 제목을 누르면 상세 페이지로 연결되게 구현했습니다.
        
        Detail page에서는 영화의 상세 정보를 제공하고 있으며 
        해당 페이지의 링크를 클릭하면 데이터가 제공하는 영화의 상세 페이지로 연결됩니다.
        `,
      url: `https://ryomi-j.github.io/Movie-App/`,
      blog: "https://premubo.tistory.com/entry/React-Movie-App",
      skills: (
        <img
          className={styles.skillLogos}
          src={require("./assets/react.png")}
          alt="react logo"
        />
      ),
    },
    {
      id: 7,
      title: "Portfolio",
      img: <img src={require("./assets/portfolio.jpg")} alt="portfolio img"  className={styles.projectImg}/>,
      description: `
        React를 사용해 제작한 개인 포트폴리오 페이지입니다.
        Introduction 페이지에서 개인 정보와 사용 가능한 기술을 확인할 수 있고
        History 페이지에서는 그 동안 만든 프로젝트의 간략한 설명과 기타 상세 정보를 확인할 수 있습니다.  
        `,
      url: `https://ryomi-j.github.io/Portfolio_Page/`,
      blog: "https://premubo.tistory.com/entry/React-Porfolio-page",
      skills: (
        <img
          className={styles.skillLogos}
          src={require("./assets/react.png")}
          alt="react logo"
        />
      ),
    },
  ];
  return (
    <div>
      {contents.reverse().map((content) => (
        <Detail
          key={content.id}
          content={content}
          title={content.title}
          img={content.img}
          description={content.description}
          url={content.url}
          blog={content.blog}
          skills={content.skills}
        />
      ))}
    </div>
  );
}

export default DetailList;
