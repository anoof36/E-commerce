import "bootstrap/dist/css/bootstrap.min.css"; //Bootstrap
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Includes Popper.js and Bootstrap JS
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
import Footer from "./components/common/footer";
import Header from "./components/common/header";
import ProductList from "./admin/pages/productsList";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/admin" element={<RouterGuard />}>
            <Route index element={<ProductList />} />
          </Route>
          <Route path="/" element={<RouterGuard />}>
            <Route index element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/products" element={<ProductsPage />} />
          </Route>
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
