"use client";
import Inicio from "./components/inicio";
import Nosotros from "./components/nosotros";
import Servicios from "./components/servicios";
import Contacto from "./components/contacto";
import Portafolio from "./components/portafolio";
import React from "react";
import { Divider, Typography } from "antd";
const { Title } = Typography;
const itemMenu = [
  { title: 'Inicio', hash: 'inicio' },
  { title: 'Servicios', hash: 'servicios' },
  { title: 'Nosotros', hash: 'nosotros' },
  { title: 'Contacto', hash: 'contacto' },
];

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

  // observer
  const [currentHash, setCurrentHash] = React.useState<any>();
  React.useEffect(() => {
    let observerChangeHash: any;
    itemMenu.forEach(({ hash }) => {
      const target = document.getElementById(hash) as HTMLElement;
      observerChangeHash?.observe(target);
    });

    observerChangeHash = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            //setCurrentHash(entry.target.id);
            window.history.pushState(null, '', `#${entry.target.id}`);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    return () => {
      //window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div style={{ width: "100%" }}>
      <div id="inicio" style={{ width: "100%", padding: "1rem 0rem" }}>
        <Divider orientation="left"><Title level={4} style={{ marginBottom: 0 }}>INICIO</Title></Divider>
        <div className="triangle" />
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