import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../componentes/footer";
import FormReceta from "../componentes/formrecetas";

export default function Inicio() {
  const [openCard, setOpenCard] = useState(null);

  const recetas = [
    {
      id: 1,
      titulo: "Cupcakes de Fresa",
      descripcion: "Suaves, dulces y perfectos para la tarde ✨",
      detalle:
        "Cupcakes esponjositos con frosting de fresa natural. Una receta rápida y deliciosa.",
      img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjDKO-qUN5ywENQIwNQeDoP7eWduwDA-nLdQYG1pfFBIjnsb14HVKVE8lSRqo0Ry8BUFdA-gPeOjRNAQJd5oVbsMZJrqGNhZH4dAMJ6PEA4CjYgSa-27nfhBpOPR04kND3q7TtusHKSzw-d/s1600/IMG_4443o.JPG",
    },
    {
      id: 2,
      titulo: "Galletas Choco Chips",
      descripcion: "Clásicas, crocantes y deliciosas 🍪",
      detalle:
        "Hechas con chispas de chocolate semiamargo y mantequilla real. Perfectas para acompañar con leche.",
      img: "https://recetasdecocina.elmundo.es/wp-content/uploads/2015/09/cookies-receta.jpg",
    },
    {
      id: 3,
      titulo: "Cheesecake de maracuya",
      descripcion: "Fácil, cremoso y sin horno 💗",
      detalle:
        "Una capa de galleta crocante, crema suave y topping de maracuya.",
      img: "https://confiterialuben.com/wp-content/uploads/2021/05/CHEESECAKE-MARACUYA-2.png",
    },
    {
      id: 4,
      titulo: "Brownies Fudgy",
      descripcion: "Húmedos, chocolatosos y adictivos 🍫",
      detalle:
        "Brownies densos y con centro suave, hechos con cacao puro y trocitos de chocolate derretido.",
      img: "https://www.spicebangla.com/wp-content/uploads/2024/03/Fudgy-Brownie-Recipe-1.webp",
    },
    {
      id: 5,
      titulo: "Tiramisú Clásico",
      descripcion: "Cremoso, elegante y sin horno ☕",
      detalle:
        "Capas de crema de mascarpone, bizcotelas remojadas en café y cacao espolvoreado.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS380n8LIZ7H127HDdv6QCq3-lzK15_6EIaE5vYE9fRV0_oHUC0oWhY9NBikDOnT1pzRi4&usqp=CAU",
    },
    {
      id: 6,
      titulo: "Crepes Dulces",
      descripcion: "Delicados, suaves y combinan con todo 🥞",
      detalle:
        "Crepas francesas finitas con topping de fresas, Nutella o manjar.",
      img: "https://sibeti.com/wp-content/uploads/2021/10/receta-y-como-hacer-crepas-dulces-1200x900.jpg",
    },
    {
      id: 7,
      titulo: "Mousse de Chocolate",
      descripcion: "Ligero y aireado, perfecto para postre ✨",
      detalle:
        "Mousse hecho con chocolate semiamargo, crema batida y toques de vainilla.",
      img: "https://www.recetasnestle.com.ec/sites/default/files/srh_recipes/4f40dbe76e4ef2833262f0269d9548e5.jpg",
    },
    {
      id: 8,
      titulo: "Panqueques Esponjosos",
      descripcion: "Perfectos para el desayuno 🥞💗",
      detalle:
        "Panqueques gruesos y suaves, acompañados con miel, frutas o azúcar impalpable.",
      img: "https://osterstatic.reciperm.com/webp/Panqueques%20de%20frutas.webp",
    },
    {
      id: 9,
      titulo: "Rollitos de Canela",
      descripcion: "Dulces, suaves y con frosting 🤎",
      detalle:
        "Rollos suaves de masa dulce con relleno de canela y azúcar morena.",
      img: "https://recipesblob.oetker.es/assets/6b05091f99ea4d81a135ba761be989df/750x910/rollos-de-canela-y-chocolate.jpg",
    },
  ];

  return (<Footer />), (<FormReceta />);
}
