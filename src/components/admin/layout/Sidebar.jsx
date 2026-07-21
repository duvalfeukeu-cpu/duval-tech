import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";

const Sidebar = ({ page, setPage }) => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const menus = [
    {
      id: "dashboard",
      label: "🏠 Dashboard",
    },
    {
      id: "projects",
      label: "📁 Projets",
    },
    {
      id: "skills",
      label: "💻 Compétences",
    },
    {
      id: "messages",
      label: "📩 Messages",
    },
    {
      id: "settings",
      label: "⚙ Paramètres",
    },
  ];

  return (
    <aside className="w-72 min-h-screen bg-slate-900 text-white flex flex-col">

      {/* Logo */}
      <div className="p-8 border-b border-slate-800">
        <h1 className="text-3xl font-bold">
          DUVAL TECH
        </h1>

        <p className="text-slate-400 mt-2 text-sm">
          Tableau de bord
        </p>
      </div>

      {/* Menu */}
      <nav className="flex-1 p-6">
        <ul className="space-y-3">
          {menus.map((menu) => (
            <li key={menu.id}>
              <button
                onClick={() => setPage(menu.id)}
                className={`
                  w-full
                  text-left
                  px-5
                  py-3
                  rounded-xl
                  transition
                  ${
                    page === menu.id
                      ? "bg-blue-600"
                      : "hover:bg-slate-800"
                  }
                `}
              >
                {menu.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-6 border-t border-slate-800">
        <button
          onClick={handleLogout}
          className="
            w-full
            bg-red-600
            hover:bg-red-700
            py-3
            rounded-xl
            transition
          "
        >
          Déconnexion
        </button>
      </div>

    </aside>
  );
};

export default Sidebar;