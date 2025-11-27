import { useState } from "react";
import { db } from "../lib/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

export default function FormReceta() {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [detalle, setDetalle] = useState("");
  const [subiendo, setSubiendo] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubiendo(true);

    try {
      await addDoc(collection(db, "recetas"), {
        titulo,
        descripcion,
        detalle,
        fechaCreacion: Timestamp.now(),
        imagen: null, // Opcional, lo dejamos como null
      });

      setTitulo("");
      setDescripcion("");
      setDetalle("");

      alert("¡Receta agregada con éxito!");
    } catch (error) {
      console.error("Error al agregar la receta:", error);
      alert("Hubo un error al guardar la receta.");
    } finally {
      setSubiendo(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white/80 backdrop-blur-md p-8 rounded-xl shadow-lg border border-[#F7CAD0] mt-10">
      <h2 className="text-3xl font-bold text-center text-[#A53860] mb-6">
        ✨ Agregar Nueva Receta ✨
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-[#A53860]">
            Título de la Receta
          </label>
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
            className="mt-1 w-full bg-white border border-[#F7CAD0] text-[#450920] px-4 py-3 rounded-xl focus:ring-2 focus:ring-[#DA627D]"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[#A53860]">
            Descripción corta
          </label>
          <textarea
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            rows="2"
            required
            className="mt-1 w-full bg-white border border-[#F7CAD0] text-[#450920] px-4 py-3 rounded-xl focus:ring-2 focus:ring-[#DA627D]"
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium text-[#A53860]">
            Detalle completo
          </label>
          <textarea
            value={detalle}
            onChange={(e) => setDetalle(e.target.value)}
            rows="3"
            required
            className="mt-1 w-full bg-white border border-[#F7CAD0] text-[#450920] px-4 py-3 rounded-xl focus:ring-2 focus:ring-[#DA627D]"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={subiendo}
          className="w-full py-3 px-4 rounded-xl text-sm font-semibold text-white bg-[#A53860] hover:bg-[#DA627D] disabled:opacity-50 transition"
        >
          {subiendo ? "Guardando..." : "Agregar Receta"}
        </button>
      </form>
    </div>
  );
}
