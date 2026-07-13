const Main = ({ children }) => {
  return (
    <main
      className="
        flex-1
        p-8
        overflow-y-auto
      "
    >
      {children}
    </main>
  );
};

export default Main;