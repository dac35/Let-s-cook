import { useEffect, useState } from "react";
import { db } from "../lib/firebase";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";

export default function ListRecetas() {
  const [recetas, setRecetas] = useState([]);

  useEffect(() => {
    const q = query(
      //lee la coleccion por el orden de la fecha de creacion
      collection(db, "recetas"),
      orderBy("fechaCreacion", "desc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const lista = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setRecetas(lista);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-10 p-4">
      <h2 className="text-3xl font-bold text-center text-[#A53860] mb-6">
        ✨ Lista de Recetas ✨
      </h2>

      {recetas.length === 0 ? (
        <p className="text-center text-[#450920]">No hay recetas aún...</p>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {recetas.map((r) => (
            <div
              key={r.id}
              className="bg-white/80 backdrop-blur-md border border-[#F7CAD0] p-5 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.01] transition"
            >
              <h3 className="text-2xl font-semibold text-[#A53860]">
                {r.titulo}
              </h3>

              <p className="mt-2 text-[#450920] font-medium">{r.descripcion}</p>

              <p className="mt-3 text-sm text-[#6A3A43]">{r.detalle}</p>

              <p className="mt-3 text-xs text-gray-500">
                {r.fechaCreacion?.toDate().toLocaleString("es-PE") ??
                  "Sin fecha"}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
