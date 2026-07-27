const SettingsForm = ({
  settings,
  setSettings,
  onSave,
  saving,
}) => {

  const handleChange = (e) => {

    setSettings({
      ...settings,
      [e.target.name]: e.target.value,
    });

  };

  const Input = ({
    label,
    name,
    placeholder,
    type = "text",
  }) => (

    <div>

      <label className="block text-sm font-semibold text-slate-700 mb-2">

        {label}

      </label>

      <input
        type={type}
        name={name}
        value={settings[name]}
        onChange={handleChange}
        placeholder={placeholder}
        className="
          w-full
          rounded-xl
          border
          border-slate-300
          bg-white
          px-4
          py-3
          outline-none
          transition
          focus:border-blue-500
          focus:ring-4
          focus:ring-blue-100
        "
      />

    </div>

  );

  return (

    <div className="space-y-8">

      {/* ===========================
          INFORMATIONS PERSONNELLES
      =========================== */}

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">

        <div className="mb-8">

          <h2 className="text-2xl font-bold text-slate-900">

            👤 Informations personnelles

          </h2>

          <p className="text-slate-500 mt-2">

            Ces informations seront affichées sur votre portfolio.

          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <Input
            label="Nom complet"
            name="fullname"
            placeholder="Duval Feukeu"
          />

          <Input
            label="Titre professionnel"
            name="title"
            placeholder="Développeur Full Stack"
          />

          <Input
            label="Adresse email"
            name="email"
            type="email"
            placeholder="contact@duvaltech.com"
          />

          <Input
            label="Téléphone"
            name="phone"
            placeholder="+237..."
          />

        </div>

        <div className="mt-6">

          <Input
            label="Localisation"
            name="location"
            placeholder="Douala, Cameroun"
          />

        </div>

        <div className="mt-6">

          <label className="block text-sm font-semibold text-slate-700 mb-2">

            Biographie

          </label>

          <textarea
            rows={6}
            name="bio"
            value={settings.bio}
            onChange={handleChange}
            placeholder="Présentez-vous..."
            className="
              w-full
              rounded-xl
              border
              border-slate-300
              px-4
              py-3
              outline-none
              resize-none
              transition
              focus:border-blue-500
              focus:ring-4
              focus:ring-blue-100
            "
          />

        </div>

      </div>


      {/* ===========================
          BOUTON SecurityCard.jsx 
      =========================== */}

      <div className="flex justify-end">

        <button
          onClick={onSave}
          disabled={saving}
          className="
            bg-blue-600
            hover:bg-blue-700
            disabled:bg-slate-400
            text-white
            font-semibold
            px-8
            py-4
            rounded-xl
            transition
            shadow-lg
          "
        >

          {saving
            ? "Enregistrement..."
            : "💾 Enregistrer les modifications"}

        </button>

      </div>

    </div>

  );

};

export default SettingsForm;