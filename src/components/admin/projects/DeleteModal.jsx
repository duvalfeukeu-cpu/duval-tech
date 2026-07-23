const DeleteModal = ({
  open,
  item,
  type = "élément",
  onClose,
  onConfirm,
  loading,
}) => {

  if (!open) return null;

  const itemName = item?.title || item?.name || "";

  return (
    <div
      className="
        fixed
        inset-0
        bg-black/60
        backdrop-blur-sm
        flex
        items-center
        justify-center
        z-50
      "
    >
      <div
        className="
          bg-white
          rounded-3xl
          shadow-2xl
          w-full
          max-w-lg
          p-8
        "
      >
        <div className="text-center">

          <div className="text-6xl mb-4">
            🗑️
          </div>

          <h2 className="text-3xl font-bold">
            Supprimer cette {type} ?
          </h2>

          <p className="text-slate-500 mt-4">
            Êtes-vous sûr de vouloir supprimer

            <span className="font-bold">
              {" "}
              {itemName}
            </span>

            ?
          </p>

          <p className="text-red-500 mt-3">
            Cette action est irréversible.
          </p>

        </div>

        <div className="flex gap-4 mt-10">

          <button
            onClick={onClose}
            className="
              flex-1
              border
              rounded-xl
              py-3
            "
          >
            Annuler
          </button>

          <button
            onClick={onConfirm}
            disabled={loading}
            className="
              flex-1
              bg-red-600
              hover:bg-red-700
              disabled:bg-red-400
              text-white
              rounded-xl
              py-3
            "
          >
            {loading
              ? "Suppression..."
              : "Supprimer"}
          </button>

        </div>

      </div>
    </div>
  );

};

export default DeleteModal;