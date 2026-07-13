import { Bell, Search } from "lucide-react";

const Header = () => {
  const today = new Date().toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <header
      className="
        bg-white
        rounded-2xl
        shadow-sm
        px-8
        py-5
        flex
        justify-between
        items-center
      "
    >
      {/* Recherche */}

      <div className="relative w-[420px]">

        <Search
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          size={20}
        />

        <input
          type="text"
          placeholder="Rechercher..."
          className="
            w-full
            py-3
            pl-12
            pr-4
            border
            rounded-xl
            outline-none
            focus:ring-2
            focus:ring-blue-500
          "
        />

      </div>

      {/* Partie droite */}

      <div className="flex items-center gap-8">

        {/* Notification */}

        <button
          className="
            relative
            w-12
            h-12
            rounded-full
            bg-slate-100
            flex
            items-center
            justify-center
            hover:bg-slate-200
          "
        >
          <Bell size={20} />

          <span
            className="
              absolute
              top-3
              right-3
              w-2
              h-2
              rounded-full
              bg-red-500
            "
          ></span>

        </button>

        {/* Profil */}

        <div className="flex items-center gap-3">

          <img
            src="https://i.pravatar.cc/150?img=3"
            alt="admin"
            className="
              w-12
              h-12
              rounded-full
            "
          />

          <div>

            <h3 className="font-semibold">
              Duval
            </h3>

            <p className="text-sm text-slate-500">
              {today}
            </p>

          </div>

        </div>

      </div>

    </header>
  );
};

export default Header;