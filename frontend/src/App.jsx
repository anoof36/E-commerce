import RouterGuard from "./components/layouts/layout";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  Navigate,
} from "react-router-dom";
import LoginPage from "./pages/loginPage";
import HomePage from "./pages/homePage";
import "./App.css";

function App() {


console.log("working App");

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<RouterGuard />}>
            <Route index element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
