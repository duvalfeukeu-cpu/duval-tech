import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

// ==========================
// CREATION DU CONTEXT
// ==========================

const AuthContext = createContext();

// ==========================
// PROVIDER
// ==========================

const AuthProvider = ({ children }) => {

  // ==========================
  // STATES
  // ==========================

  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  // ==========================
  // VERIFICATION AU DEMARRAGE
  // ==========================

  useEffect(() => {

    try {

      const savedToken = localStorage.getItem("token");
      const savedUser = localStorage.getItem("user");

      if (savedToken && savedUser) {
        setToken(savedToken);
        setUser(JSON.parse(savedUser));
      }

    } catch (error) {

      console.error("Erreur Local Storage :", error);

      localStorage.removeItem("token");
      localStorage.removeItem("user");

    } finally {

      setLoading(false);

    }

  }, []);

  // ==========================
  // LOGIN
  // ==========================

  const login = async (email, password) => {

    try {

      const response = await fetch(
        "http://localhost:5000/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Email ou mot de passe incorrect."
        );
      }

      // ==========================
      // SAUVEGARDE
      // ==========================

      localStorage.setItem("token", data.token);

      localStorage.setItem(
        "user",
        JSON.stringify(data.admin)
      );

      setToken(data.token);
      setUser(data.admin);

      return {
        success: true,
      };

    } catch (error) {

      console.error("Erreur de connexion :", error);

      return {
        success: false,
        message: error.message,
      };

    }

  };

  // ==========================
  // LOGOUT
  // ==========================

  const logout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setToken(null);
    setUser(null);

  };

  // ==========================
  // VALEURS DU CONTEXT
  // ==========================

  const value = {
    user,
    token,
    loading,
    login,
    logout,
    isAuthenticated: Boolean(token),
  };

  // ==========================
  // PROVIDER
  // ==========================

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );

};

// ==========================
// HOOK PERSONNALISE
// ==========================

export const useAuth = () => {
  return useContext(AuthContext);
};

// ==========================
// EXPORT
// ==========================

export default AuthProvider;