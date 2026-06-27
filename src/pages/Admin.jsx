import { useState } from "react";

const Admin = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    image: "",
    github: "",
    demo: "",
    technologies: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch(
    "https://duval-tech-api.onrender.com/api/projects", 
    {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      }
    );

    const data = await response.json();

    console.log("REPONSE =", data);

    alert("Projet ajouté !");
  } catch (error) {
    console.error(error);
  }
};
  return (
    <div className="max-w-3xl mx-auto py-10 px-4">

      <h1 className="text-4xl font-bold mb-8">
        Dashboard Admin
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >

        <input
          type="text"
          name="title"
          placeholder="Titre"
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <input
          type="text"
          name="description"
          placeholder="Description"
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <input
          type="text"
          name="image"
          placeholder="Lien image"
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <input
          type="text"
          name="github"
          placeholder="Github"
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <input
          type="text"
          name="demo"
          placeholder="Démo"
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <input
          type="text"
          name="technologies"
          placeholder="Technologies"
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded"
        >
          Ajouter Projet
        </button>

      </form>

    </div>
  );
};

export default Admin;