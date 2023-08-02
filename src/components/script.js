import React from "react";
import panelaTradicional from "../assets/panela_tradicional.png";
import panelaLongaVida from "../assets/panela_longaVida.png";
import panelaIndustrial from "../assets/panela_industrial.png";
import panelaHotel from "../assets/panela_hotel.png";
import panelaMarflon from "../assets/panela_marflon.png";
import panelaFundida from "../assets/panela_fundida.png";
import panelaCaboMadeira from "../assets/panela_caboMadeira.png";
import panelaExtra from "../assets/panela_extra.png";
import panelaPresente from "../assets/panela_presente.png";
import INDUSTRIAL from "./industrial";
import Products from "./Products";

import { Fade, Reveal } from "react-reveal";

const Script = () => {
  let component = <Products />;
  let carrousel;
  let teste = <INDUSTRIAL />;
  switch (window.location.pathname) {
    case "/catalogo":
      component = <INDUSTRIAL />;
      break;
  }

  return component;
};
