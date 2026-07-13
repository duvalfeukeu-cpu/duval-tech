import Sidebar from "./Sidebar";
import Header from "./Header";
import Main from "./Main";

const MainLayout = ({
  children,
  page,
  setPage,
}) => {
  return (
    <div className="flex min-h-screen bg-slate-100">

      {/* Sidebar */}

      <Sidebar
        page={page}
        setPage={setPage}
      />

      {/* Partie droite */}

      <div className="flex-1 flex flex-col">

        {/* Header */}

        <Header />

        {/* Main */}

        <Main>
          {children}
        </Main>

      </div>

    </div>
  );
};

export default MainLayout;