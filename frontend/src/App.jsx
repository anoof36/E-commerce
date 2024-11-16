import "bootstrap/dist/css/bootstrap.min.css"; //Bootstrap
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Includes Popper.js and Bootstrap JS
import RouterGuard from "./components/layouts/layout";
import AdminRouterGuard from "./pages/admin/components/layouts/adminLayout";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  Navigate,
} from "react-router-dom";
import LoginPage from "./pages/user/loginPage";
import HomePage from "./pages/user/homePage";
import ProductsPage from "./pages/user/productsPage";
import "./App.css";
import Dashboard from "./pages/admin/dashboard";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/admin" element={<AdminRouterGuard />}>
            <Route index element={< Dashboard/>} />
          </Route>
          <Route path="/" element={<RouterGuard />}>
            <Route index element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/products" element={<ProductsPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
