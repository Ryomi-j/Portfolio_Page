import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./routes/Home";
import Introduction from "./routes/Introduction";
import History from "./routes/History";
import style from './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <div className={style.App} style={{backgroundColor:"rgb(254, 247, 237)"}}>
        <Navigation />
        <Routes>
          <Route path={"/"} element={<Home />}></Route>
          <Route path="/Introduction" element={<Introduction />}></Route>
          <Route path="/History" element={<History />}></Route>
        </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
export default App;
