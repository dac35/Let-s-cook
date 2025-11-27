export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#FFA5AB] to-[#F9DBBD] py-8 mt-16 text-center text-[#450920] rounded-t-3xl shadow-inner">
      {/* Título bonito */}
      <h3 className="text-2xl font-bold tracking-wide">
        🍰 LET'S<span className="text-[#A53860]">COOK</span>
      </h3>

      {/* Subtítulo */}
      <p className="mt-1 text-sm opacity-80">
        Endulzando tus días con recetas especiales
      </p>

      {/* Iconos */}
      <div className="flex justify-center gap-6 mt-4 opacity-90">
        <a
          href="#"
          className="hover:scale-110 transition-transform duration-200"
        >
          🍓
        </a>

        <a
          href="#"
          className="hover:scale-110 transition-transform duration-200"
        >
          🧁
        </a>

        <a
          href="#"
          className="hover:scale-110 transition-transform duration-200"
        >
          🍪
        </a>
      </div>

      {/* Copy */}
      <p className="mt-6 text-xs opacity-70">
        © 2025 LetsCook — hecho con amor y azúcar 💗
      </p>
    </footer>
  );
}
