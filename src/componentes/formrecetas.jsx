import { useState, useRef } from "react";
import { db, storage } from "../lib/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function FormReceta() {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [detalle, setDetalle] = useState("");
  const [imagen, setImagen] = useState(null);
  const [nombreImagen, setNombreImagen] = useState(
    "Ningún archivo seleccionado"
  );
  const [subiendo, setSubiendo] = useState(false);

  const inputFileRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagen(file);
      setNombreImagen(file.name);
    } else {
      setNombreImagen("Ningún archivo seleccionado");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!imagen) {
      alert("Por favor, selecciona una imagen.");
      return;
    }

    setSubiendo(true);

    try {
      const storageRef = ref(storage, `recetas/${Date.now()}_${imagen.name}`);
      await uploadBytes(storageRef, imagen);
      const imageUrl = await getDownloadURL(storageRef);

      await addDoc(collection(db, "recetas"), {
        titulo,
        descripcion,
        detalle,
        imagen: imageUrl,
        fechaCreacion: Timestamp.now(),
      });

      // limpiar formulario
      setTitulo("");
      setDescripcion("");
      setDetalle("");
      setImagen(null);
      setNombreImagen("Ningún archivo seleccionado");
      if (inputFileRef.current) inputFileRef.current.value = "";

      alert("¡Receta agregada con éxito!");
    } catch (error) {
      console.error("Error al agregar la receta:", error);
      alert("Hubo un error al subir la receta.");
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

        <div>
          <label className="block text-sm font-medium text-[#A53860]">
            Imagen de la Receta
          </label>

          <div className="mt-1 flex items-center">
            <input
              type="file"
              ref={inputFileRef}
              onChange={handleFileChange}
              accept="image/*"
              required
              className="hidden"
            />

            <button
              type="button"
              onClick={() => inputFileRef.current.click()}
              className="cursor-pointer bg-[#FFA5AB] text-[#450920] font-semibold py-2 px-4 rounded-xl hover:bg-[#F9DBBD] transition"
            >
              Elegir imagen
            </button>

            <span className="ml-4 text-gray-600 text-sm">{nombreImagen}</span>
          </div>
        </div>

        <button
          type="submit"
          disabled={subiendo}
          className="w-full py-3 px-4 rounded-xl text-sm font-semibold text-white bg-[#A53860] hover:bg-[#DA627D] disabled:opacity-50 transition"
        >
          {subiendo ? "Subiendo receta..." : "Agregar Receta"}
        </button>
      </form>
    </div>
  );
}
