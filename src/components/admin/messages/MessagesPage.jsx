import { useEffect, useState } from "react";

import MessagesGrid from "./MessagesGrid";

const API = "http://localhost:5000/api/messages";

const MessagesPage = () => {
  // ==========================
  // STATES
  // ==========================

  const [messages, setMessages] = useState([]);

  const [search, setSearch] = useState("");

  // ==========================
  // LOAD MESSAGES
  // ==========================

const loadMessages = async () => {
  try {

    const token = localStorage.getItem("token");

    const response = await fetch(API, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Erreur lors du chargement.");
    }

    const data = await response.json();

    setMessages(data);

  } catch (error) {

    console.error(error);

  }
};

  useEffect(() => {
    loadMessages();
  }, []);

  // ==========================
  // RECHERCHE
  // ==========================

  const filteredMessages = messages.filter((message) => {

    const text = `
      ${message.name}
      ${message.email}
      ${message.subject}
      ${message.message}
    `.toLowerCase();

    return text.includes(search.toLowerCase());

  });

  // ==========================
  // SUPPRESSION
  // ==========================

  const handleDelete = async (id) => {

    if (!window.confirm("Supprimer ce message ?")) {
      return;
    }

    try {

      const token = localStorage.getItem("token");

        await fetch(`${API}/${id}`, {
         method: "DELETE",
         headers: {
          Authorization: `Bearer ${token}`,
        },
    });

      loadMessages();

    } catch (error) {

      console.error(error);

    }

  };

  // ==========================
  // MARQUER COMME LU
  // ==========================

  const handleRead = async (message) => {

    try {

const token = localStorage.getItem("token");

await fetch(`${API}/${message.id}`, {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
  body: JSON.stringify({
    is_read: !message.is_read,
  }),
});
      loadMessages();

    } catch (error) {

      console.error(error);

    }

  };
    // ==========================
  // UI
  // ==========================

  return (
    <div className="space-y-8">

      {/* HEADER */}

      <div className="flex items-center justify-between">

        <div>

          <h1 className="text-4xl font-bold text-slate-900">
            Gestion des messages
          </h1>

          <p className="text-slate-500 mt-2">
            Consultez tous les messages reçus depuis votre portfolio.
          </p>

        </div>

      </div>

      {/* RECHERCHE */}

      <input
        type="text"
        placeholder="🔍 Rechercher un message..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="
          w-full
          border
          border-slate-300
          rounded-xl
          p-4
          outline-none
          focus:ring-2
          focus:ring-blue-500
        "
      />

      {/* LISTE DES MESSAGES */}

      <MessagesGrid
        messages={filteredMessages}
        onDelete={handleDelete}
        onRead={handleRead}
      />

    </div>
  );
};

export default MessagesPage;