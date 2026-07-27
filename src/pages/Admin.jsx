import { useState } from "react";

import MainLayout from "../components/admin/layout/MainLayout";

import Dashboard from "../components/admin/dashboard/Dashboard";
import ProjectsPage from "../components/admin/projects/ProjectsPage";
import SkillsPage from "../components/admin/skills/SkillsPage";
import MessagesPage from "../components/admin/messages/MessagesPage";
import SettingsPage from "../components/admin/settings/SettingsPage";

const Admin = () => {
  const [page, setPage] = useState("dashboard");

  const renderPage = () => {
    switch (page) {

  case "dashboard":
    return <Dashboard />;

  case "projects":
    return <ProjectsPage />;

  case "skills":
    return <SkillsPage />;

  case "messages":
    return <MessagesPage />;

  case "settings":
    return <SettingsPage />;

  default:
    return <Dashboard />;
      }
  };

  return (
    <MainLayout
      page={page}
      setPage={setPage}
    >
      {renderPage()}
    </MainLayout>
  );
};

export default Admin;