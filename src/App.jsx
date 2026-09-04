import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Admin from "./pages/Admin";

import ProtectedRoute from "./components/auth/ProtectedRoute";
import Layout from "./pages/Layout";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* ==========================
            SITE PUBLIC
        ========================== */}

        <Route element={<Layout />}>

          <Route
            index
            element={<Home />}
          />

        </Route>


        {/* ==========================
            LOGIN
        ========================== */}

        <Route
          path="/login"
          element={<Login />}
        />


        {/* ==========================
            ADMIN PROTÉGÉ
        ========================== */}

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;