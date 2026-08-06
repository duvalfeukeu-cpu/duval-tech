import { useRef, useState } from "react";
import toast from "react-hot-toast";

const ProfileCard = ({
  settings,
  setSettings,
}) => {

  const fileInputRef = useRef(null);

  const [uploading, setUploading] = useState(false);

  // ==========================
  // OUVRIR LE SELECTEUR
  // ==========================

  const handleChooseImage = () => {

    fileInputRef.current.click();

  };

  // ==========================
  // UPLOAD IMAGE
  // ==========================

  const handleUpload = async (e) => {

    const file = e.target.files[0];

    if (!file) return;

    try {

      setUploading(true);

      // Aperçu instantané

      const preview = URL.createObjectURL(file);

      setSettings((prev) => ({
        ...prev,
        avatar: preview,
      }));

      // Upload de l'image

      const formData = new FormData();

      formData.append("image", file);

      const uploadResponse = await fetch(`${import.meta.env.VITE_API_URL}/api/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

const uploadData = await uploadResponse.json();

console.log("Réponse upload :", uploadData);

if (!uploadResponse.ok) {

  throw new Error(
    uploadData.message || "Erreur lors de l'upload."
  );

}

const imageUrl = uploadData.imageUrl;

console.log("Image URL :", imageUrl);

      // Sauvegarde immédiate dans settings

      const token = localStorage.getItem("token");

      const saveResponse = await fetch(
        `${import.meta.env.VITE_API_URL}/api/settings`,
        {
          method: "PUT",

          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },

          body: JSON.stringify({
            ...settings,
            avatar: imageUrl,
          }),
        }
      );

      const saveData = await saveResponse.json();

      if (!saveResponse.ok) {

        throw new Error(
          saveData.message ||
          "Erreur lors de la sauvegarde."
        );

      }

      setSettings((prev) => ({
        ...prev,
        avatar: imageUrl,
      }));

      toast.success("Photo de profil mise à jour.");

    } catch (error) {

      console.error(error);

      toast.error(error.message);

    } finally {

      setUploading(false);

    }

  };

  // ==========================
  // SUPPRIMER L'AVATAR
  // ==========================

  const removeAvatar = async () => {

    try {

      const token = localStorage.getItem("token");

      const response = await fetch( 
        `${import.meta.env.VITE_API_URL}/api/settings`,
        {
          method: "PUT",

          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },

          body: JSON.stringify({
            ...settings,
            avatar: "",
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {

        throw new Error(
          data.message ||
          "Impossible de supprimer la photo."
        );

      }

      setSettings((prev) => ({
        ...prev,
        avatar: "",
      }));

      toast.success("Photo supprimée.");

    } catch (error) {

      console.error(error);

      toast.error(error.message);

    }

  };
    // ==========================
  // UI
  // ==========================

  return (

    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">

      <div className="flex flex-col items-center">

        {/* Avatar */}

        {
          settings.avatar ? (

            <img
              src={settings.avatar}
              alt="Avatar"
              className="
                w-40
                h-40
                rounded-full
                object-cover
                border-4
                border-blue-500
                shadow-lg
              "
            />

          ) : (

            <div
              className="
                w-40
                h-40
                rounded-full
                bg-blue-600
                text-white
                flex
                items-center
                justify-center
                text-5xl
                font-bold
                shadow-lg
              "
            >

              {
                settings.fullname
                  ? settings.fullname
                      .split(" ")
                      .map((word) => word[0])
                      .join("")
                      .substring(0, 2)
                      .toUpperCase()
                  : "DT"
              }

            </div>

          )
        }

        {/* Nom */}

        <h2 className="mt-6 text-3xl font-bold text-slate-900">

          {settings.fullname || "Votre nom"}

        </h2>

        {/* Métier */}

        <p className="text-slate-500 mt-2 text-lg">

          {settings.title || "Votre profession"}

        </p>

        {/* Email */}

        {
          settings.email && (

            <p className="text-slate-400 mt-1">

              {settings.email}

            </p>

          )
        }

        {/* Boutons */}

        <div className="flex flex-wrap justify-center gap-4 mt-8">

          <button

            onClick={handleChooseImage}

            disabled={uploading}

            className="
              bg-blue-600
              hover:bg-blue-700
              disabled:bg-slate-400
              text-white
              px-6
              py-3
              rounded-xl
              transition
              font-semibold
            "

          >

            {

              uploading

                ? "⏳ Upload..."

                : "📷 Changer la photo"

            }

          </button>

          <button

            onClick={removeAvatar}

            className="
              bg-red-600
              hover:bg-red-700
              text-white
              px-6
              py-3
              rounded-xl
              transition
              font-semibold
            "

          >

            🗑 Supprimer

          </button>

        </div>

      </div>

      {/* Input caché */}

      <input

        ref={fileInputRef}

        type="file"

        accept="image/*"

        hidden

        onChange={handleUpload}

      />

    </div>

  );

};

export default ProfileCard;