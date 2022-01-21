import "./App.scss";
import LoadingBar from "react-redux-loading-bar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import CategoryPage from "./components/CategoryPage";
function App() {
  return (
    <div className="App">
      <div className="div2">
        <LoadingBar style={{ backgroundColor: "blue", height: "5px" }} />
        <Header />
        <LoadingBar style={{ backgroundColor: "blue", height: "5px" }} />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<CategoryPage />} />
        </Routes>
        <LoadingBar style={{ backgroundColor: "blue", height: "5px" }} />
      </div>
    </div>
  );
}

export default App;
