import RouterGuard from "./components/layouts/layout";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  Navigate,
} from "react-router-dom";
import LoginPage from "./pages/loginPage";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<RouterGuard />}>
            {/* <Route index={true} path="home" element={<LoginPage />} /> */}
            <Route path="login" element={<LoginPage/>}/>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
