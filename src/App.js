import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./routes/Home";
import Introduction from "./routes/Introduction";
import History from "./routes/History";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path={"/"} element={<Home />}></Route>
          <Route path="/Introduction" element={<Introduction />}></Route>
          <Route path="/History" element={<History />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
