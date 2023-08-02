import Navbar from "./components/NavigationBar";
import CarouselImg from "./components/Carousel";
import imagePan from "./assets/panela.png";
import Products from "./components/Products";
import FUNDIDA from "./components/Fundida";
import HOTEL from "./components/hotel";
import EXTRA from "./components/Extra";
import MARFLON from "./components/Marflon";
import PRESENTES from "./components/Presentes";
import CABO from "./components/Madeira";
import LONGA from "./components/longavida";
import Vidro from "./components/TampaDeVidro";
import Pressao from "./components/PanelaDePressao";
import { FaArrowRight } from "react-icons/fa";
import About from "./components/About";
import { useMediaQuery } from "@react-hook/media-query";
import NavigationHamburguer from "./components/NavigationHamburguer";
import Tradicional from "./components/Tradicional";
import INDUSTRIAL from "./components/industrial";
import VISION from "./components/Vision";
import AssadeiraFrango from "./components/TradicionalItens/assadeiraFrango";
import AquecedorDeArroz from "./components/TradicionalItens/aquecedorDeArroz";
import Segunda from "./components/SegundaParte";
import Terceira from "./components/TerceiraParte";
import Quarta from "./components/QuartaParte";
import Quinta from "./components/QuintaParte";
import Sobre from "./components/Sobre";
import SobreEmpresa from "./components/SobreEmpresa";

import AssadeiraOblonga from "./components/TradicionalItens/assadeiraOblonga";
import AssadeiraPizza from "./components/TradicionalItens/assadeiraPizza";
import AssadeiraRedonda from "./components/TradicionalItens/assadeiraRedonda";
import AssadeiraRedondaAlta from "./components/TradicionalItens/assadeiraRedondaAlta";
import AssadeiraRetangularAlta from "./components/TradicionalItens/assadeiraRetangularAlta";
import AssadeiraRetangularBaixa from "./components/TradicionalItens/assadeiraRetangularBaixa";
import AssadeiraRetangularGrelha from "./components/TradicionalItens/assadeiraRetangularGrelha";
import BaciaReforçada from "./components/TradicionalItens/baciaReforçada";
import BaldeFosco from "./components/TradicionalItens/baldeFosco";
import BaldeGelo from "./components/TradicionalItens/baldeGelo";
import BandejaLuxo from "./components/TradicionalItens/bandejaLuxo";
import BandejaRetangular from "./components/TradicionalItens/bandejaRetangular";
import BuleChines from "./components/TradicionalItens/buleChines";
import BuleConicoPolido from "./components/TradicionalItens/buleConicoPolido";
import CafeteiraInteiriça from "./components/TradicionalItens/cafeteiraInteiriça";
import CafeteiraMarlita from "./components/TradicionalItens/cafeteiraMarlita";
import CaldeirãoBojudo from "./components/TradicionalItens/caldeirãoBojudo";
import CanecaChopp from "./components/TradicionalItens/canecaChopp";
import CanecaExtra from "./components/TradicionalItens/canecaExtra";
import CanecaFosca from "./components/TradicionalItens/canecaFosca";
import CanecaoEspecial from "./components/TradicionalItens/canecaoEspecial";
import CanecaoMedida from "./components/TradicionalItens/canecaoMedida";
import CaçarolaEspecialAlça from "./components/TradicionalItens/caçarolaEspecialAlça";
import CaçarolaEspecialCabo from "./components/TradicionalItens/caçarolaEspecialCabo";
import CaçarolaJapi from "./components/TradicionalItens/caçarolaJapi";
import ChaleiraChinesa from "./components/TradicionalItens/chaleiraChinesa";
import ChaleiraPolida from "./components/TradicionalItens/chaleiraPolida";
import ComedouroCaes from "./components/TradicionalItens/comedouroCaes";
import ConchaExtra from "./components/TradicionalItens/conchaExtra";
import ConchaExtraCaboBaquelite from "./components/TradicionalItens/conchaExtraCaboBaquelite";
import ConchaSuperForte from "./components/TradicionalItens/conchaSuperForte";
import CopoExtra from "./components/TradicionalItens/copoExtra";
import CopoExtraAsa from "./components/TradicionalItens/copoExtraAsa";
import CopoExtraInfantil from "./components/TradicionalItens/copoExtraInfantil";
import EscorredorArroz from "./components/TradicionalItens/escorredorArroz";
import EspumadeiraExtra from "./components/TradicionalItens/espumadeiraExtra";
import EspumadeiraExtraBaquelite from "./components/TradicionalItens/espumadeiraExtraBaquelite";
import EspumadeiraSuperForte from "./components/TradicionalItens/espumadeiraSuperForte";
import FervedorApito from "./components/TradicionalItens/fervedorApito";
import FervedorInderramavel from "./components/TradicionalItens/fervedorInderramavel";
import FervedorTradicional from "./components/TradicionalItens/fervedorTradicional";
import FiltraOleo from "./components/TradicionalItens/filtraOleo";
import FormaBanhoMaria from "./components/TradicionalItens/formaBanhoMaria";
import FormaBoloDupla from "./components/TradicionalItens/formaBoloDupla";
import FormaBoloSemTampa from "./components/TradicionalItens/formaBoloSemTampa";
import FormaCoracao from "./components/TradicionalItens/formaCoracao";
import FormaCuscuz from "./components/TradicionalItens/formaCuscuz";
import FormaCuscuzConjugada from "./components/TradicionalItens/formaCuscuzConjugada";
import FormaCuscuzIndividual from "./components/TradicionalItens/formaCuscuzIndividual";
import FormaEmpada from "./components/TradicionalItens/formaEmpada";
import FormaPao from "./components/TradicionalItens/formaPao";
import FormaPudimPolida from "./components/TradicionalItens/formaPudimPolida";
import FormaPudimTampa from "./components/TradicionalItens/formaPudimTampa";
import FormaQueijo from "./components/TradicionalItens/formaQueijo";
import FormaTorta from "./components/TradicionalItens/formaTorta";
import FunilFosco from "./components/TradicionalItens/funilFosco";
import JarraBojuda from "./components/TradicionalItens/jarraBojuda";
import JarraLuxoTampa from "./components/TradicionalItens/jarraLuxoTampa";
import JarraRetaTampa from "./components/TradicionalItens/jarraRetaTampa";
import LataoGordura from "./components/TradicionalItens/lataoGordura";
import LataoLeite from "./components/TradicionalItens/lataoLeite";
import MarmitaOperaria from "./components/TradicionalItens/marmitaOperaria";
import MarmitaPolida from "./components/TradicionalItens/marmitaPolida";
import MarmitaTermica from "./components/TradicionalItens/marmitaTermica";
import MoringaBocaLarga from "./components/TradicionalItens/moringaBocaLarga";
import MoringaBocaLargaCabo from "./components/TradicionalItens/moringaBocaLargaCabo";
import MoringaPolida from "./components/TradicionalItens/moringaPolida";
import NaoAcheiNome from "./components/TradicionalItens/naoAcheiNome";
import PassadorMacarrao from "./components/TradicionalItens/passadorMacarrao";
import PipoqueiraPolida from "./components/TradicionalItens/pipoqueiraPolida";
import PortaGarrafaCerveja from "./components/TradicionalItens/portaGarrafaCerveja";
import PortaLata from "./components/TradicionalItens/portaLata";
import PratoFosco from "./components/TradicionalItens/pratoFosco";
import PortaLatao from "./components/TradicionalItens/portaLatao";
import PortaLitraoCerveja from "./components/TradicionalItens/portaLitraoCerveja";
import Pucaro from "./components/TradicionalItens/pucaro";
import TachoFosco from "./components/TradicionalItens/tachoFosco";
import TampaAvulsa from "./components/TradicionalItens/tampaAvulsa";
import TaçaTulipa from "./components/TradicionalItens/taçaTulipa";
import TigelaPolida from "./components/TradicionalItens/tigelaPolida";
import Urinol from "./components/TradicionalItens/urinol";

import CacarolaVisionTampaVidroAlça from "./components/VisionItens/CacarolaVisionTampaVidroAlça";
import CacarolaVisionTampaVidroCabo from "./components/VisionItens/caçarolaVisionTampaVidroCabo";
import CanecaoVision from "./components/VisionItens/CanecaoVision";
import FrigideiraVisionFrancesa from "./components/VisionItens/FrigideiraVisionFrancesa";
import FrigideiraVisionTampaVidro from "./components/VisionItens/FrigideiraVisionTampaVidro";
import PaelleraVisionTampaVidro from "./components/VisionItens/PaelleraVisionTampaVidro";

import CacarolaBojuda from "./components/MadeiraItens/CaçarolaBojuda";
import CacarolaConicaAlca from "./components/MadeiraItens/CaçarolaConicaAlça";
import CacarolaConicaLixadaCabo from "./components/MadeiraItens/CaçarolaConicaLixadaCabo";
import CanecaoExtraMadeira from "./components/MadeiraItens/CanecaoExtraMadeira";
import FrigideiraConica from "./components/MadeiraItens/FrigideiraConica";

import CacarolaExtraAlca from "./components/ExtraItens/CacarolaExtraAlca";
import CacarolaExtraCabo from "./components/ExtraItens/CacarolaExtraCabo";
import CanecaoExtra from "./components/ExtraItens/CanecaoExtra";
import CanecaoExtraLuxo from "./components/ExtraItens/CanecaoExtraLuxo";
import FrigideiraExtraFrancesa from "./components/ExtraItens/FrigideiraExtraFrancesa";
import FrigideiraExtraTampa from "./components/ExtraItens/FrigideiraExtraTampa";

import AssadeiraRedondaMarflon from "./components/MarflonItens/AssadeiraRedondaMarflon";
import AssadeiraRetangularMarflonAlta from "./components/MarflonItens/AssadeiraRetangularMarflonAlta";
import CacarolaMarflonAlca from "./components/MarflonItens/CacarolaMarflonAlca";
import CacarolaMarflonCabo from "./components/MarflonItens/CacarolaMarflonCabo";
import CaldeiraoRetoMarflon from "./components/MarflonItens/CaldeiraoRetoMarflon";
import CanecaoMarflon from "./components/MarflonItens/CanecaoMarflon";
import FormaCuscuzMarflon from "./components/MarflonItens/FormaCuscuzMarflon";
import FormaPaoMarflon from "./components/MarflonItens/FormaPaoMarflon";
import FrigideiraAntiaderente from "./components/MarflonItens/FrigideiraAntiaderente";
import FrigideiraAntiaderenteTampa from "./components/MarflonItens/FrigideiraAntiaderenteTampa";
import FrigideiraMarflon from "./components/MarflonItens/FrigideiraMarflon";
import FrigideiraMarflonFrancesa from "./components/MarflonItens/FrigideiraMarflonFrancesa";
import FrigideiraMarflonTampa from "./components/MarflonItens/FrigideiraMarflonTampa";
import FritaOvoMarflon from "./components/MarflonItens/FritaOvoMarflon";
import HamburgueiraMarflon from "./components/MarflonItens/HamburgueiraMarflon";
import JogoFritadeiraMarflon from "./components/MarflonItens/JogoFritadeiraMarflon";
import OmeleteiraMarflon from "./components/MarflonItens/OmeleteiraMarflon";
import PaelleraMarflon from "./components/MarflonItens/PaelleraMarflon";
import PanquequeiraMarflon from "./components/MarflonItens/PanquequeiraMarflon";

import CacarolaLongaVidaAlca from "./components/LongaItens/CacarolaLongaVidaAlca";
import CacarolaLongaVidaCabo from "./components/LongaItens/CacarolaLongaVidaCabo";
import FrigideiraLongaVida from "./components/LongaItens/FrigideiraLongaVida";
import FrigideiraLongaVidaTampa from "./components/LongaItens/FrigideiraLongaVidaTampa";

import CacarolaMutiusos from "./components/PresentesItens/CaçarolaMultiusos";
import ChurrasqueiraEletrica from "./components/PresentesItens/ChurrasqueiraEletrica";
import ChurrasqueiraMarlux from "./components/PresentesItens/ChurrasqueiraMarlux";
import ConjuntoAnaMaria5 from "./components/PresentesItens/ConjuntoAnaMaria5";
import ConjuntoBahia5 from "./components/PresentesItens/ConjuntoBahia5";
import ConjuntoCida5 from "./components/PresentesItens/ConjuntoCida5";
import ConjuntoCristal6 from "./components/PresentesItens/ConjuntoCristal6";
import ConjuntoEsmeralda6 from "./components/PresentesItens/ConjuntoEsmeralda6";
import ConjuntoFlavia6 from "./components/PresentesItens/ConjuntoFlavia6";
import ConjuntoKeka5 from "./components/PresentesItens/ConjuntoKeka5";
import ConjuntoMarcia7 from "./components/PresentesItens/ConjuntoMarcia7";
import ConjuntoMelissa6 from "./components/PresentesItens/ConjuntoMelissa6";
import ConjuntoRegina7 from "./components/PresentesItens/ConjuntoRegina7";
import ConjuntoRubi7 from "./components/PresentesItens/ConjuntoRubi7";
import ConjuntoTopazio6 from "./components/PresentesItens/ConjuntoTopazio6";
import ConjuntoTurquesa6 from "./components/PresentesItens/ConjuntoTurquesa6";
import EspagueteiraMarflon from "./components/PresentesItens/EspagueteiraMarflon";
import FrigideiraFritaFacil from "./components/PresentesItens/FrigideiraFritaFacil";
import JogoParaAgua6 from "./components/PresentesItens/JogoParaAgua6";
import JogoParaMantimentos5 from "./components/PresentesItens/JogoParaMantimentos5";
import MoringaBocaLargaCaixa from "./components/PresentesItens/MoringaBocaLargaCaixa";
import PanelaMeiaPressaoConjugada from "./components/PresentesItens/PanelaMeiaPressaoConjugada";
import PipoqueiraKids from "./components/PresentesItens/PipoqueiraKids";
import Empresa from "./components/Empresa";

import AssadeiraHotelRetangularAlta from "./components/HotelItens/AssadeiraHotelRetangularAlta";
import AssadeiraHotelRetangularAltaAlça from "./components/HotelItens/AssadeiraHotelRetangularAltaAlça";
import BuleHotel from "./components/HotelItens/BuleHotel";
import CacarolaHotel from "./components/HotelItens/CacarolaHotel";
import CacarolaVaporHotel from "./components/HotelItens/CacarolaVaporHotel";
import CafeteiraHotel from "./components/HotelItens/CafeteiraHotel";
import CaldeiraoHotel from "./components/HotelItens/CaldeiraoHotel";
import CanecaoHotel from "./components/HotelItens/CanecaoHotel";
import ChaleiraHotel from "./components/HotelItens/ChaleiraHotel";
import ConchaIndustrial from "./components/HotelItens/ConchaIndustrial";
import EscorredorArrozHotel from "./components/HotelItens/EscorredorArroz";
import EscorredorMacarraoHotel from "./components/HotelItens/EscorredorMacarrao";
import EspumadeiraIndustrial from "./components/HotelItens/EspumadeiraIndustrial";
import FervedorInderramavelHotel from "./components/HotelItens/FervedorInderramavelHotel";
import FormaBoloHotelSemTampa from "./components/HotelItens/FormaBoloHotelSemTampa";
import FormaCuscuzHotel from "./components/HotelItens/FormaCuscuzHotel";
import FrigideiraHotel from "./components/HotelItens/FrigideiraHotel";
import LataoLeiteHotel from "./components/HotelItens/LataoLeiteHotel";

import CacarolaComAlcaFundida from "./components/FundidaItens/CacarolaComAlcaFundida";
import CacarolaFundidaAlca from "./components/FundidaItens/CacarolaFundidaAlca";
import CaldeiraoFundido from "./components/FundidaItens/CaldeiraoFundido";
import ChurrasqueiraFundida from "./components/FundidaItens/ChurrasqueiraFundida";
import FrigideiraFundidaTampa from "./components/FundidaItens/FrigideiraFundidaTampa";
import PilaoFundido from "./components/FundidaItens/PilaoFundido";
import TachoFundidoTampa from "./components/FundidaItens/TachoFundidoTampa";

import CacarolaIndustrial from "./components/IndustrialItens/CacarolaIndustrial";
import CaldeiraoIndustrial from "./components/IndustrialItens/CaldeiraoIndustrial";

import CacarolaTampaVidroAlca from "./components/VidroItens/CacarolaTampaVidroAlca";
import CacarolaTampaVidroCabo from "./components/VidroItens/CacarolaTampaVidroCabo";
import FrigideiraTampaVidro from "./components/VidroItens/FrigideiraTampaVidro";

import Borracha from "./components/PressaoItens/Borracha";
import ConjAnelValv from "./components/PressaoItens/ConjAnelValv";
import PanelaPressao from "./components/PressaoItens/PanelaPressao";
import PanelaPressaoCraqueada from "./components/PressaoItens/PanelaPressaoCraqueada";
import PanelaPressaoFechamentoExterno from "./components/PressaoItens/PanelaPressaoFechamentoExterno";
import PanelaPressaoIndustrial from "./components/PressaoItens/PanelaPressaoIndustrial";
import PanelaPressaoMarflon from "./components/PressaoItens/PanelaPressaoMarflon";
import PanelaPressaoNueva from "./components/PressaoItens/PanelaPressaoNueva";
import PanelaPressaoNuevaCraqueada from "./components/PressaoItens/PanelaPressaoNuevaCraqueada";
import PanelaPressaoNuevaMarflon from "./components/PressaoItens/PanelaPressaoNuevaMarflon";
import Peso from "./components/PressaoItens/Peso";

import teste1 from "./components/aquecedorDeArroz";

function App() {
  console.log("app?");
  const isSmallScreen = useMediaQuery("(max-width: 640px)");
  const isMediumScreen = useMediaQuery("(max-width: 768px)");
  let component = <Products />;
  let component2 = <Segunda />;
  let component3 = <Terceira />;
  let component4 = <Quarta />;
  let component5 = <Empresa />;
  let component6 = "";
  let component7 = <Sobre />;
  let component8 = <SobreEmpresa />;
  let teste = <INDUSTRIAL />;
  let carrousel;

  switch (window.location.pathname) {
    default:
      component = <Products />;
      carrousel = <CarouselImg />;
      break;
    case "/empresa":
      component = "";
      component3 = "";
      component4 = "";
      component2 = <Empresa />;
      component7 = <SobreEmpresa />;
      break;
    case "/Passador%20P%20Macarrao":
      component = <PassadorMacarrao />;
      break;
    case "/Aquecedor%20P%20Arroz":
      component = <AquecedorDeArroz />;
      break;
    case "/catalogo":
      component = <Products />;
      carrousel = "";
      break;
    case "/Principal":
      component = <Products />;
      carrousel = <CarouselImg />;
      break;
    case "/contato":
      component = "";
      component2 = "";
      component3 = "";
      component4 = "";
      component6 = <Quinta />;

      break;
    case "/TRADICIONAL":
      component = <Tradicional />;
      break;
    case "/LONGA%20VIDA":
      component = <LONGA />;
      break;
    case "/INDUSTRIAL":
      component = <INDUSTRIAL />;
      break;
    case "/HOTEL":
      component = <HOTEL />;
      break;
    case "/MARFLON":
      component = <MARFLON />;
      break;
    case "/FUNDIDA":
      component = <FUNDIDA />;
      break;
    case "/CABO":
      component = <CABO />;
      break;
    case "/PRESENTES":
      component = <PRESENTES />;
      break;
    case "/EXTRA":
      component = <EXTRA />;
      break;
    case "/VISION":
      component = <VISION />;
      break;
    case "/Tampa%20de%20Vidro":
      component = <Vidro />;
      break;
    case "/Assadeira%20Oblonga":
      component = <AssadeiraOblonga />;
      break;
    case "/Assadeira%20P%20Frango":
      component = <AssadeiraFrango />;
      break;
    case "/Assadeira%20P%20Pizza":
      component = <AssadeiraPizza />;
      break;
    case "/Assadeira%20Redonda":
      component = <AssadeiraRedonda />;
      break;
    case "/Assadeira%20Redonda%20Alta":
      component = <AssadeiraRedondaAlta />;
      break;
    case "/Assadeira%20Retangular%20Alta":
      component = <AssadeiraRetangularAlta />;
      break;
    case "/Assadeira%20Retangular%20C%20Grelha":
      component = <AssadeiraRetangularGrelha />;
      break;
    case "/Assadeira%20Retangular%20Baixa":
      component = <AssadeiraRetangularBaixa />;
      break;
    case "/Bacia%20Reforçada":
      component = <BaciaReforçada />;
      break;
    case "/Balde%20Fosco":
      component = <BaldeFosco />;
      break;
    case "/Balde%20P/Gelo":
      component = <BaldeGelo />;
      break;
    case "/Bandeja%20Luxo":
      component = <BandejaLuxo />;
      break;
    case "/Bandeja%20Retangular":
      component = <BandejaRetangular />;
      break;
    case "/Bule%20Chines%20Luxo":
      component = <BuleChines />;
      break;
    case "/Bule%20Conico%20Polido":
      component = <BuleConicoPolido />;
      break;
    case "/Cacarola%20Especial%20C%20Alça":
      component = <CaçarolaEspecialAlça />;
      break;
    case "/Cacarola%20Especial%20C%20Cabo":
      component = <CaçarolaEspecialCabo />;
      break;
    case "/Cacarola%20Japi":
      component = <CaçarolaJapi />;
      break;
    case "/Cafeteira%20inteirica":
      component = <CafeteiraInteiriça />;
      break;
    case "/Cafeteira%20%20Marlita":
      component = <CafeteiraMarlita />;
      break;
    case "/Caldeirao%20Bojudo":
      component = <CaldeirãoBojudo />;
      break;
    case "/Caneca%20P/%20Chopp":
      component = <CanecaChopp />;
      break;
    case "/Caneca%20Extra":
      component = <canecaExtra />;
      break;
    case "/Caneca%20Fosca":
      component = <CanecaFosca />;
      break;
    case "/Canecao%20Especial":
      component = <CanecaoEspecial />;
      break;
    case "/Canecao%20medida":
      component = <CanecaoMedida />;
      break;
    case "/Chaleira%20Chinesa":
      component = <ChaleiraChinesa />;
      break;
    case "/Chaleira%20Polida":
      component = <ChaleiraPolida />;
      break;
    case "/Comedouro%20P/%20Caes":
      component = <ComedouroCaes />;
      break;
    case "/Concha%20Extra":
      component = <ConchaExtra />;
      break;
    case "/Concha%20Extra%20C%20Cabo%20Baquelite":
      component = <ConchaExtraCaboBaquelite />;
      break;
    case "/Concha%20Super%20Forte":
      component = <ConchaSuperForte />;
      break;
    case "/Copo%20Extra":
      component = <CopoExtra />;
      break;
    case "/Copo%20Extra%20C%20Asa":
      component = <CopoExtraAsa />;
      break;
    case "/Copo%20Extra%20Infantil":
      component = <CopoExtraInfantil />;
      break;
    case "/Escorredor%20P/%20Arroz":
      component = <EscorredorArroz />;
      break;
    case "/Espumadeira%20Extra":
      component = <EspumadeiraExtra />;
      break;
    case "/Espumadeira%20Extra%20C%20Cabo%20Baquelite":
      component = <EspumadeiraExtraBaquelite />;
      break;
    case "/Espumadeira%20Super%20Forte":
      component = <EspumadeiraSuperForte />;
      break;
    case "/Fervedor%20C%20Apito":
      component = <FervedorApito />;
      break;
    case "/Fervedor%20Inderramável":
      component = <FervedorInderramavel />;
      break;
    case "/Fervedor%20Tradicional":
      component = <FervedorTradicional />;
      break;
    case "/Filtra%20Oleo":
      component = <FiltraOleo />;
      break;
    case "/Forma%20Banho%20Maria":
      component = <FormaBanhoMaria />;
      break;
    case "/Forma%20P%20Bolo%20Dupla":
      component = <FormaBoloDupla />;
      break;
    case "/Forma%20P%20Bolo%20S%20Tampa":
      component = <FormaBoloSemTampa />;
      break;
    case "/Forma%20de%20Pudim%20C%20Tampa":
      component = <FormaPudimTampa />;
      break;
    case "/Forma%20Coracao":
      component = <FormaCoracao />;
      break;
    case "/Forma%20P%20Cuscuz":
      component = <FormaCuscuz />;
      break;
    case "/Forma%20P%20Cuscuz%20Conjugada":
      component = <FormaCuscuzConjugada />;
      break;
    case "/Forma%20P%20Cuscuz%20Individual":
      component = <FormaCuscuzIndividual />;
      break;
    case "/Forma%20P%20Empada":
      component = <FormaEmpada />;
      break;
    case "/Forma%20P%20Pao":
      component = <FormaPao />;
      break;
    case "/Forma%20P%20Pudim%20Polida":
      component = <FormaPudimPolida />;
      break;
    case "/Forma%20de%20Pudim%20C%20Tampa":
      component = <FormaPudimTampa />;
      break;
    case "/Forma%20P%20Queijo":
      component = <FormaQueijo />;
      break;
    case "/Forma%20P%20Torta":
      component = <FormaTorta />;
      break;
    case "/Funil%20Fosco":
      component = <FunilFosco />;
      break;
    case "/Jarra%20Bojuda":
      component = <JarraBojuda />;
      break;
    case "/Jarra%20Luxo%20C%20Tampa":
      component = <JarraLuxoTampa />;
      break;
    case "/Jarra%20Reta%20C%20Tampa":
      component = <JarraRetaTampa />;
      break;
    case "/Latão%20P%20Gordura":
      component = <LataoGordura />;
      break;
    case "/Latão%20P%20Leite":
      component = <LataoLeite />;
      break;
    case "/Marmita%20Operaria":
      component = <MarmitaOperaria />;
      break;
    case "/Marmita%20Polida":
      component = <MarmitaPolida />;
      break;
    case "/Marmita%20Termica":
      component = <MarmitaTermica />;
      break;
    case "/Moringa%20Boca%20Larga":
      component = <MoringaBocaLarga />;
      break;
    case "/Moringa%20Boca%20Larga%20C%20Cabo":
      component = <MoringaBocaLargaCabo />;
      break;
    case "/Moringa%20Polida":
      component = <MoringaPolida />;
      break;
    case "/Passador%20P%20Macarrão":
      component = <PassadorMacarrao />;
      break;
    case "/Pipoqueira%20Polida":
      component = <PipoqueiraPolida />;
      break;
    case "/Porta%20Garrafa%20de%20Cerveja":
      component = <PortaGarrafaCerveja />;
      break;
    case "/Porta%20Lata":
      component = <PortaLata />;
      break;
    case "/Porta%20Latao":
      component = <PortaLatao />;
      break;
    case "/Porta%20Litrao%20de%20Cerveja":
      component = <PortaLitraoCerveja />;
      break;
    case "/Panela%20de%20Pressao":
      component = <Pressao />;
      break;

    case "/Prato%20Fosco":
      component = <PratoFosco />;
      break;
    case "/Pucaro":
      component = <Pucaro />;
      break;
    case "/Taça%20Tulipa":
      component = <TaçaTulipa />;
      break;
    case "/Tacho%20Fosco":
      component = <TachoFosco />;
      break;
    case "/Tampa%20Avulsa":
      component = <TampaAvulsa />;
      break;
    case "/Tigela%20Polida":
      component = <TigelaPolida />;
      break;
    case "/Urinol":
      component = <Urinol />;
      break;
    case "/Cacarola%20Vision%20Tampa%20Vidro%20com%20Alca":
      component = <CacarolaVisionTampaVidroAlça />;
      break;
    case "/Cacarola%20Vision%20Tampa%20Vidro%20com%20Cabo":
      component = <CacarolaVisionTampaVidroCabo />;
      break;
    case "/Canecao%20Vision":
      component = <CanecaoVision />;
      break;
    case "/Frigideira%20Vision%20com%20Tampa%20Vidro":
      component = <FrigideiraVisionFrancesa />;
      break;
    case "/Frigideira%20Vision%20Francesa":
      component = <FrigideiraVisionTampaVidro />;
      break;
    case "/Paellera%20Vision%20com%20Tampa%20Vidro":
      component = <PaelleraVisionTampaVidro />;
      break;

    case "/Cacarola%20Bojuda":
      component = <CacarolaBojuda />;
      break;
    case "/Cacarola%20Alca%20Madeira":
      component = <CacarolaConicaAlca />;
      break;
    case "/Cacarola%20Conica%20Lixada%20C%20Cabo":
      component = <CacarolaConicaLixadaCabo />;
      break;
    case "/Canecao%20Extra%20Cabo%20de%20Madeira":
      component = <CanecaoExtraMadeira />;
      break;
    case "/Frigideira%20Conica":
      component = <FrigideiraConica />;
      break;

    case "/Cacarola%20Extra1":
      component = <CacarolaExtraAlca />;
      break;
    case "/Cacarola%20Extra%20C%20Cabo":
      component = <CacarolaExtraCabo />;
      break;
    case "/Canecao%20Extra":
      component = <CanecaoExtra />;
      break;
    case "/Canecao%20Extra%20Luxo":
      component = <CanecaoExtraLuxo />;
      break;
    case "/Frigideira%20Extra%20C%20Tampa":
      component = <FrigideiraExtraTampa />;
      break;
    case "/Frigideira%20Extra%20Francesa":
      component = <FrigideiraExtraFrancesa />;
      break;

    case "/Assadeira%20Redonda%20Marflon":
      component = <AssadeiraRedondaMarflon />;
      break;
    case "/Assadeira%20Retangular%20Marflon%20Alta":
      component = <AssadeiraRetangularMarflonAlta />;
      break;
    case "/Cacarola%20Marflon%20com%20Alca":
      component = <CacarolaMarflonAlca />;
      break;
    case "/Cacarola%20Marflon%20com%20Cabo":
      component = <CacarolaMarflonCabo />;
      break;
    case "/Caldeirao%20Reto%20Marflon":
      component = <CaldeiraoRetoMarflon />;
      break;
    case "/Canecao%20Marflon":
      component = <CanecaoMarflon />;
      break;
    case "/Forma%20para%20Cuscuz%20Marflon":
      component = <FormaCuscuzMarflon />;
      break;
    case "/Forma%20para%20Pao%20Marflon":
      component = <FormaPaoMarflon />;
      break;
    case "/Frigideira%20Antiaderente":
      component = <FrigideiraAntiaderente />;
      break;
    case "/Frigideira%20Antiaderente%20com%20Tampa":
      component = <FrigideiraAntiaderenteTampa />;
      break;
    case "/Frigideira%20Marflon":
      component = <FrigideiraMarflon />;
      break;
    case "/Frigideira%20Marflon%20Francesa":
      component = <FrigideiraMarflonFrancesa />;
      break;
    case "/Frigideira%20Marflon%20com%20Tampa":
      component = <FrigideiraMarflonTampa />;
      break;
    case "/Frita%20Ovo%20Marflon":
      component = <FritaOvoMarflon />;
      break;
    case "/Hamburgueira%20Marflon":
      component = <HamburgueiraMarflon />;
      break;
    case "/Jogo%20Frigideira%20Marflon":
      component = <JogoFritadeiraMarflon />;
      break;
    case "/Omeleteira%20Marflon":
      component = <OmeleteiraMarflon />;
      break;
    case "/Paellera%20Antiaderente%20com%20Tampa%20Vidro":
      component = <PaelleraMarflon />;
      break;
    case "/Panquequeira%20Marflon":
      component = <PanquequeiraMarflon />;
      break;

    case "/Cacarola%20Longa%20Vida%20com%20Alca":
      component = <CacarolaLongaVidaAlca />;
      break;
    case "/Cacarola%20Longa%20Vida%20com%20Cabo":
      component = <CacarolaLongaVidaCabo />;
      break;
    case "/Frigideira%20Longa%20Vida":
      component = <FrigideiraLongaVida />;
      break;
    case "/Frigideira%20Longa%20Vida%20Com%20Tampa":
      component = <FrigideiraLongaVidaTampa />;
      break;

    case "/Cacarola%20MultiUso":
      component = <CacarolaMutiusos />;
      break;
    case "/Churrasqueira%20Eletrica%20Super%20Grill":
      component = <ChurrasqueiraEletrica />;
      break;
    case "/Churrasqueira%20Marlux%20Grill":
      component = <ChurrasqueiraMarlux />;
      break;
    case "/Conjunto%20Ana%20Maria%205%20pcs":
      component = <ConjuntoAnaMaria5 />;
      break;
    case "/Conjunto%20Bahia%205%20pcs":
      component = <ConjuntoBahia5 />;
      break;
    case "/Conjunto%20Cida%205%20pcs":
      component = <ConjuntoCida5 />;
      break;
    case "/Conjunto%20Cristal%206%20pcs":
      component = <ConjuntoCristal6 />;
      break;
    case "/Conjunto%20Esmeralda%206%20pcs":
      component = <ConjuntoEsmeralda6 />;
      break;
    case "/Conjunto%20Flavia%206%20pcs":
      component = <ConjuntoFlavia6 />;
      break;
    case "/Conjunto%20Keka%205%20pcs":
      component = <ConjuntoKeka5 />;
      break;
    case "/Conjunto%20Marcia%207%20pcs":
      component = <ConjuntoMarcia7 />;
      break;
    case "/Conjunto%20Melissa%206%20pcs":
      component = <ConjuntoMelissa6 />;
      break;
    case "/Conjunto%20Regina%207%20pcs":
      component = <ConjuntoRegina7 />;
      break;
    case "/Conjunto%20Rubi%207%20pcs":
      component = <ConjuntoRubi7 />;
      break;
    case "/Conjunto%20Topazio%206%20pcs":
      component = <ConjuntoTopazio6 />;
      break;
    case "/Conjunto%20Turquesa%206%20pcs":
      component = <ConjuntoTurquesa6 />;
      break;
    case "/Espagueteira%20Marflon":
      component = <EspagueteiraMarflon />;
      break;
    case "/Frigideira%20Frita%20Facil":
      component = <FrigideiraFritaFacil />;
      break;
    case "/Jogo%20para%20Agua%206%20pcs":
      component = <JogoParaAgua6 />;
      break;
    case "/Jogo%20para%20Mantimentos%205%20pcs":
      component = <JogoParaMantimentos5 />;
      break;
    case "/Moringa%20Boca%20Larga%20c%20Caixa":
      component = <MoringaBocaLargaCaixa />;
      break;
    case "/Panela%20Meia%20Pressao%20Conjugada":
      component = <PanelaMeiaPressaoConjugada />;
      break;
    case "/Pipoqueira%20Kids":
      component = <PipoqueiraKids />;
      break;

    case "/Assadeira%20Hotel%20Retangular%20Alta":
      component = <AssadeiraHotelRetangularAlta />;
      break;
    case "/Assadeira%20Hotel%20Alca":
      component = <AssadeiraHotelRetangularAltaAlça />;
      break;
    case "/Bule%20Hotel":
      component = <BuleHotel />;
      break;
    case "/Cacarola%20Hotel":
      component = <CacarolaHotel />;
      break;
    case "/Cacarola%20Vapor%20Hotel":
      component = <CacarolaVaporHotel />;
      break;
    case "/Cafeteira%20Hotel":
      component = <CafeteiraHotel />;
      break;
    case "/Caldeirao%20Hotel":
      component = <CaldeiraoHotel />;
      break;
    case "/Canecao%20Hotel":
      component = <CanecaoHotel />;
      break;
    case "/Chaleira%20Hotel":
      component = <ChaleiraHotel />;
      break;
    case "/Concha%20Industrial":
      component = <ConchaIndustrial />;
      break;
    case "/Escorredor%20para%20Arroz":
      component = <EscorredorArrozHotel />;
      break;
    case "/Escorredor%20para%20Macarrao":
      component = <EscorredorMacarraoHotel />;
      break;
    case "/Espumadeira%20Industrial":
      component = <EspumadeiraIndustrial />;
      break;
    case "/Fervedor%20Inderramavel%20Hotel":
      component = <FervedorInderramavelHotel />;
      break;
    case "/Forma%20para%20Bolo%20Hotel%20s%20Tampa":
      component = <FormaBoloHotelSemTampa />;
      break;
    case "/Forma%20para%20Cuscuz%20Hotel":
      component = <FormaCuscuzHotel />;
      break;
    case "/Frigideira%20Hotel":
      component = <FrigideiraHotel />;
      break;
    case "/Latao%20para%20Leite%20Hotel":
      component = <LataoLeiteHotel />;
      break;

    case "/Cacarola%20Fundida%20c%20alca":
      component = <CacarolaComAlcaFundida />;
      break;
    case "/Cacarola%20Fundida%20c%20alca%20fundida":
      component = <CacarolaFundidaAlca />;
      break;
    case "/Caldeirao%20Fundido":
      component = <CaldeiraoFundido />;
      break;
    case "/Churrasqueira%20Lumigrill%20Fundida":
      component = <ChurrasqueiraFundida />;
      break;
    case "/Frigideira%20Fundida%20com%20Tampa":
      component = <FrigideiraFundidaTampa />;
      break;
    case "/Pilao%20Fundido":
      component = <PilaoFundido />;
      break;
    case "/Tacho%20Fundido%20com%20Tampa":
      component = <TachoFundidoTampa />;
      break;

    case "/Cacarola%20Industrial":
      component = <CacarolaIndustrial />;
      break;
    case "/Caldeirao%20Industrial":
      component = <CaldeiraoIndustrial />;
      break;

    case "/Cacarola%20Longa%20Vida%20Tampa%20Vidro%20com%20Alca":
      component = <CacarolaTampaVidroAlca />;
      break;
    case "/Cacarola%20Longa%20Vida%20Tampa%20Vidro%20com%20Cabo":
      component = <CacarolaTampaVidroCabo />;
      break;
    case "/Frigideira%20Longa%20Vida%20com%20Tampa%20Vidro":
      component = <FrigideiraTampaVidro />;
      break;

    case "/Borracha%20Panela%20Meia%20Pressao":
      component = <Borracha />;
      break;
    case "/Conjunto%20Anel%20e%20Valvula":
      component = <ConjAnelValv />;
      break;
    case "/Panela%20de%20Pressao1":
      component = <PanelaPressao />;
      break;
    case "/Panela%20de%20Pressao%20Craqueada":
      component = <PanelaPressaoCraqueada />;
      break;
    case "/Panela%20de%20Pressao%20Com%20Fechamento%20Externo":
      component = <PanelaPressaoFechamentoExterno />;
      break;
    case "/Panela%20de%20Pressao%20Industrial":
      component = <PanelaPressaoIndustrial />;
      break;
    case "/Panela%20de%20Pressao%20Marflon":
      component = <PanelaPressaoMarflon />;
      break;
    case "/Panela%20de%20Pressao%20Nueva":
      component = <PanelaPressaoNueva />;
      break;
    case "/Panela%20de%20Pressao%20Nueva%20Craqueada":
      component = <PanelaPressaoNuevaCraqueada />;
      break;
    case "/Panela%20de%20Pressao%20Nueva%20Marflon":
      component = <PanelaPressaoNuevaMarflon />;
      break;
    case "/Peso%20para%20Panela%20de%20Pressao":
      component = <Peso />;
      break;
  }

  return (
    <div className="overflow-hidden bg-[#FAFBFF]">
      <div className="fixed z-20 w-screen">
        {isSmallScreen || isMediumScreen ? (
          <NavigationHamburguer />
        ) : (
          <Navbar />
        )}
      </div>
      {carrousel}
      {component4}
      <div className="mb-28 mt-14">
        {component}
        {component3}
      </div>

      <div
        className="
            mt-0
            sm:mt-0
            md:mt-0
            lg:mt-36
            "
      >
        {component2}
        {component7}
        {component6}
        {component6}
      </div>
    </div>
  );
}

export default App;
