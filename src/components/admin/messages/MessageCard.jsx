const MessageCard = ({
  message,
  onDelete,
  onRead,
}) => {

  const date = new Date(message.created_at).toLocaleDateString(
    "fr-FR",
    {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }
  );

  return (
    <div
      className={`
        rounded-2xl
        border
        p-8
        shadow-sm
        transition
        hover:shadow-lg

        ${
          message.is_read
            ? "bg-white border-slate-200"
            : "bg-blue-50 border-blue-300"
        }
      `}
    >

      {/* Header */}

      <div className="flex justify-between items-start gap-6">

        <div>

          <h2 className="text-2xl font-bold text-slate-900">
            {message.name}
          </h2>

          <p className="text-slate-500 mt-1">
            {message.email}
          </p>

        </div>

        <div className="text-right">

          <span
            className={`
              px-4
              py-2
              rounded-full
              text-sm
              font-semibold

              ${
                message.is_read
                  ? "bg-slate-100 text-slate-600"
                  : "bg-blue-600 text-white"
              }
            `}
          >
            {message.is_read ? "Lu" : "Non lu"}
          </span>

          <p className="text-sm text-slate-400 mt-3">
            {date}
          </p>

        </div>

      </div>

      {/* Sujet */}

      <div className="mt-8">

        <h3 className="font-bold text-slate-800">
          📌 {message.subject}
        </h3>

      </div>

      {/* Message */}

      <div
        className="
          mt-5
          p-5
          rounded-xl
          bg-slate-50
          border
        "
      >

        <p className="leading-7 text-slate-700 whitespace-pre-wrap">
          {message.message}
        </p>

      </div>

      {/* Footer */}

      <div className="flex justify-end gap-4 mt-8">

        <button
          onClick={() => onRead(message)}
          className={`
            px-5
            py-3
            rounded-xl
            font-semibold
            transition

            ${
              message.is_read
                ? "bg-slate-200 hover:bg-slate-300 text-slate-700"
                : "bg-green-600 hover:bg-green-700 text-white"
            }
          `}
        >
          {message.is_read
            ? "Marquer comme non lu"
            : "Marquer comme lu"}
        </button>

        <button
          onClick={() => onDelete(message.id)}
          className="
            px-5
            py-3
            rounded-xl
            bg-red-600
            hover:bg-red-700
            text-white
            font-semibold
            transition
          "
        >
          Supprimer
        </button>

      </div>

    </div>
  );
};

export default MessageCard;