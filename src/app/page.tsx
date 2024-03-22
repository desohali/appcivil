"use client";
import Inicio from "./components/inicio";
import Nosotros from "./components/nosotros";
import Servicios from "./components/servicios";
import Contacto from "./components/contacto";
import Portafolio from "./components/portafolio";
import React from "react";
import { Divider, Typography } from "antd";
const { Title } = Typography;

var globalWindow: any = typeof window !== 'undefined' ? window : {};

const App: React.FC = () => {

  const [isMovil, setCollapsed] = React.useState(globalWindow?.innerWidth < 768);
  React.useEffect(() => {
    const handleResize = () => {
      setCollapsed(globalWindow?.innerWidth < 768);
    };

    globalWindow?.addEventListener('resize', handleResize);

    return () => {
      globalWindow?.removeEventListener('resize', handleResize);
    };
  }, []);

  const containerStyles = {
    width: isMovil ? "100%" : "85%",
    padding: "1rem 0rem",
    margin: "auto"
  };


  return (
    <div style={{ width: "100%" }}>
      <div id="inicio" style={{ width: "100%", padding: "1rem 0rem" }}>
        {/* <Divider orientation="left"><Title level={4} style={{ marginBottom: 0 }}>INICIO</Title></Divider>
        <div className="triangle" /> */}
        <Inicio />
      </div>


      <div id="servicios" style={{ width: "100%", padding: "1rem 0rem" }}>
        <Divider orientation="left"><Title level={4} >SERVICIOS</Title></Divider>
        <div className="triangle" />
        <div style={containerStyles}><Servicios /></div>
      </div>


      <div id="nosotros" style={{ width: "100%", padding: "1rem 0rem" }}>
        <Divider orientation="left"><Title level={4} >NOSOTROS</Title></Divider>
        <div className="triangle" />
        <div style={containerStyles}><Nosotros /></div>
      </div>

      {/* <div id="portafolio" style={{ width: "100%", background: "red", padding: "1rem 0rem" }}>
        <Portafolio />
      </div> */}

      <div id="contacto" style={{ width: "100%", padding: "1rem 0rem" }}>
        <Divider orientation="left"><Title level={4} >CONTACTO</Title></Divider>
        <div className="triangle" />
        <Contacto />
      </div>
    </div>
  );
}

export default App;