import React from "react";
import Nav from "./components/Nav.component.jsx";

import Logo from "./pages/0-Logo.page.jsx";
import Intro from "./pages/1-Intro.page.jsx";
import Trajetoria from "./pages/2-Trajetoria.page.jsx";
import ComoAjuda from "./pages/3-ComoAjuda.page.jsx";
import ComoAcontece from "./pages/4-ComoAcontece.page.jsx";
import QueEsperar from "./pages/5-QueEsperar.page copy.jsx";
import PerguntasFrequentes from "./pages/6-PerguntasFrequentes.page.jsx";
import Contato from "./pages/7-Contato.page.jsx";
import Mapa from "./pages/8-Mapa.page.jsx";

import { MobileProvider } from "./context/mobileContext.jsx";

function App() {
  return (
    <React.Fragment>
      <MobileProvider>
        <body>
          <Nav />
          <Logo />
          <Intro />
          <Trajetoria />
          <ComoAjuda />
          <ComoAcontece />
          <QueEsperar />
          <PerguntasFrequentes />
          <Contato />
          <Mapa />
        </body>
      </MobileProvider>
    </React.Fragment>
  );
}

export default App;
