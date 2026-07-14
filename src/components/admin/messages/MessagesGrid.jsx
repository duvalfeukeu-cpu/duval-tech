import MessageCard from "./MessageCard";

const MessagesGrid = ({
  messages,
  onDelete,
  onRead,
}) => {

  // ==========================
  // AUCUN MESSAGE
  // ==========================

  if (messages.length === 0) {

    return (

      <div
        className="
          bg-white
          rounded-2xl
          shadow
          p-16
          text-center
        "
      >

        <h2 className="text-2xl font-bold text-slate-900">
          Aucun message trouvé
        </h2>

        <p className="text-slate-500 mt-3">
          Les messages envoyés depuis votre portfolio
          apparaîtront ici.
        </p>

      </div>

    );

  }

  // ==========================
  // LISTE DES MESSAGES
  // ==========================

  return (

    <div
      className="
        grid
        gap-6
      "
    >

      {messages.map((message) => (

        <MessageCard
          key={message.id}
          message={message}
          onDelete={onDelete}
          onRead={onRead}
        />

      ))}

    </div>

  );

};

export default MessagesGrid;