import { Navigate } from "react-router-dom";

import { useAuth } from "../../contexts/AuthContext";

const ProtectedRoute = ({ children }) => {

  const {
    loading,
    isAuthenticated,
  } = useAuth();

  // ==========================
  // CHARGEMENT
  // ==========================

  if (loading) {

    return (
      <div
        className="
          min-h-screen
          flex
          items-center
          justify-center
          text-xl
          font-semibold
        "
      >
        Chargement...
      </div>
    );

  }

  // ==========================
  // NON CONNECTE
  // ==========================

  if (!isAuthenticated) {

    return <Navigate to="/login" replace />;

  }

  // ==========================
  // CONNECTE
  // ==========================

  return children;

};

export default ProtectedRoute;