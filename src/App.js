import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login/Login";
import { Signup } from "./pages/Signup/Signup";
import { Test } from "./pages/Test/Test";
import { Result } from "./pages/Result/Result";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="signup" element={<Signup />} />
        <Route exact path="test" element={<Test />} />
        <Route exact path="result" element={<Result />} />
      </Routes>
    </div>
  );
}

export default App;
