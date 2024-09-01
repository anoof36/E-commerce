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
import ProductsPage from "./pages/productsPage";
import "./App.css";
import AppHeader from "./components/common/header";
import Footer from "./components/common/footer";
function App() {


console.log("working App");

  return (
    <>
      <Router>
        <AppHeader />
        <Routes>
          <Route path="/" element={<RouterGuard />}>
            <Route index element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/products" element={<ProductsPage />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
