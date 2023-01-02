import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import History from "./views/MainPage/Tab/History/History";
import Introduction from "./views/MainPage/Tab/Profile/Introduce";
import Intro from "./views/MainPage/Tab/Intro/Intro";
import style from './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <div className={style.App} style={{backgroundColor:"rgb(254, 247, 237)"}}>
        <Navigation />
        <Routes>
          <Route path={"/"} element={<Intro />}></Route>
          <Route path={"/Portfolio_Page"} element={<Intro />}></Route>
          <Route path="/Introduction" element={<Introduction />}></Route>
          <Route path="/History" element={<History />}></Route>
        </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
export default App;
