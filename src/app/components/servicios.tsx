"use client";
import React from 'react';
import { Badge, Col, Collapse, Divider, Row, Typography } from 'antd';

const { Title } = Typography;

export const servicios = [
  {
    key: '1',
    label: 'Elaboración de Fichas Técnicas:',
    children: 'Nuestro equipo ofrece la elaboración detallada de fichas técnicas que cumplen con los estándares más exigentes de la industria. Desde análisis de materiales hasta especificaciones técnicas, garantizamos un enfoque preciso y profesional en cada proyecto.'
  },
  {
    key: '2',
    label: 'Cronogramas Gantt y Valorizado:',
    children: 'Nos especializamos en la planificación efectiva y la gestión financiera de proyectos. Utilizando herramientas como los cronogramas Gantt y valorizado, proporcionamos una visión clara y organizada del progreso del proyecto, optimizando tiempos y recursos.'
  },
  {
    key: '3',
    label: 'Levantamientos Topográficos:',
    children: 'Contamos con experiencia en levantamientos topográficos precisos y detallados. Nuestros ingenieros utilizan tecnología de vanguardia para obtener datos exactos del terreno, facilitando el diseño y la ejecución de proyectos de ingeniería civil.'
  },
  {
    key: '4',
    label: 'Elaboración de Expedientes Técnicos:',
    children: 'Ofrecemos servicios completos de elaboración de expedientes técnicos, garantizando la documentación necesaria para la correcta ejecución de proyectos. Desde planos hasta especificaciones técnicas, nos encargamos de cada detalle para asegurar la viabilidad y calidad del proyecto.'
  },
  {
    key: '5',
    label: 'Elaboración de Liquidaciones de Obras:',
    children: 'Nuestro equipo se encarga de la elaboración precisa y detallada de liquidaciones de obras, asegurando una evaluación justa y transparente de los trabajos realizados. Garantizamos una gestión eficiente y profesional de los aspectos financieros de cada proyecto.'
  },
  {
    key: '6',
    label: 'Elaboración de Valorizaciones de Obras:',
    children: 'Proporcionamos servicios especializados en la elaboración de valorizaciones de obras, evaluando de manera precisa y detallada el avance y los costos asociados a cada fase del proyecto. Nuestra experiencia asegura una gestión financiera óptima y transparente.'
  },
  {
    key: '7',
    label: 'Saneamiento Legal:',
    children: 'Brindamos asesoramiento y servicios especializados en saneamiento legal, garantizando el cumplimiento de las normativas y regulaciones vigentes en cada proyecto. Nuestro enfoque integral asegura la legalidad y seguridad jurídica de cada iniciativa.'
  },
  {
    key: '8',
    label: 'Ejecución de Obras:',
    children: 'Nuestro equipo cuenta con amplia experiencia en la ejecución de obras civiles, asegurando la realización eficiente y de alta calidad de cada proyecto. Desde la gestión de recursos hasta la supervisión en el terreno, nos comprometemos a cumplir con los plazos y estándares más exigentes. Con un enfoque centrado en la excelencia y la seguridad, garantizamos la satisfacción del cliente en cada etapa del proceso de construcción. Confía en nosotros para llevar a cabo tu proyecto con profesionalismo y compromiso.'
  }
];



const Servicios = () => {

  return (
    <Row gutter={[16, 16]}>
      <Col xs={24} sm={24} md={24} lg={24}>
        <Title level={5} style={{ textAlign: "center" }}>
          Nos enorgullecemos de ofrecer soluciones integrales en el ámbito de la construcción civil. Con una trayectoria de excelencia y un compromiso inquebrantable con la calidad, nos dedicamos a transformar visiones en realidades tangibles.
        </Title>
        <Title level={5} style={{ textAlign: "center" }}>
          Nuestros servicios abarcan todas las etapas del proceso de construcción, desde la planificación y el diseño hasta la ejecución y la entrega final. Ya sea que se trate de proyectos residenciales, comerciales o industriales, nuestro equipo altamente calificado y experimentado se encarga de cada detalle con precisión y profesionalismo.
        </Title>
      </Col>

      <Divider plain>NUESTRAS SOLUCIONES</Divider>

      {servicios.map((s) => (
        <Col xs={24} sm={12} md={12} lg={12}>
          <Badge.Ribbon text="Servicio">
            <Collapse
              defaultActiveKey={["1", "2", "3", "4"]}
              items={[{ key: s.key, label: <div style={{ width: "90%" }}>{s.label}</div>, children: <p>{s.children}</p> }]}
            />
          </Badge.Ribbon>
        </Col>
      ))}
    </Row>
  )
}

export default Servicios;