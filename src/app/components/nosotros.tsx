"use client";
import { Avatar, Col, Divider, List, Row, Segmented, Tabs } from 'antd';
import {
  CheckCircleOutlined
} from '@ant-design/icons';
import React from 'react'
import nosotros from '../../../public/nosotros.svg';
import Image from 'next/image';

const tabs = [
  {
    key: '1',
    label: 'Nosotros',
    children: 'Estamos comprometidos con la excelencia y la satisfacción del cliente. Con una trayectoria sólida y un equipo altamente capacitado, nos enorgullece ofrecer soluciones integrales para proyectos de construcción civil de cualquier escala.Desde el diseño inicial hasta la entrega final, nos comprometemos a mantener los más altos estándares en cada fase del proceso de construcción.Además de nuestro enfoque en la excelencia técnica, también valoramos la responsabilidad ambiental y el compromiso con las comunidades en las que operamos.'
  },
  {
    key: '2',
    label: 'Misión',
    children: 'Nuestra misión es proporcionar servicios de construcción civil de alta calidad, que superen las expectativas de nuestros clientes en términos de seguridad, eficiencia y excelencia. Nos comprometemos a trabajar con integridad, ética y profesionalismo en cada proyecto, contribuyendo así al desarrollo sostenible de las comunidades en las que operamos.'
  },
  {
    key: '3',
    label: 'Visión',
    children: 'Nuestra visión es convertirnos en líderes reconocidos en el sector de la construcción civil, destacando por nuestra innovación, calidad y compromiso con la satisfacción del cliente. Buscamos expandir nuestra presencia a nivel regional, manteniendo siempre nuestro enfoque en la excelencia operativa y el crecimiento sostenible.'
  },
  {
    key: '4',
    label: 'Objetivos',
    children: `Garantizar la seguridad en todos los aspectos de nuestras operaciones, tanto para nuestro equipo como para los residentes locales y otras partes interesadas.
    Mantener altos estándares de calidad en cada etapa de los proyectos, desde la planificación hasta la entrega final.
    Mejorar continuamente nuestros procesos y adoptar tecnologías innovadoras para aumentar la eficiencia y reducir los costos.
    Fomentar relaciones sólidas con nuestros clientes, basadas en la transparencia, la comunicación abierta y la confianza mutua.
    Contribuir activamente al desarrollo sostenible mediante prácticas ambientalmente responsables y la participación en proyectos que beneficien a las comunidades locales.
    Capacitar y motivar a nuestro equipo, proporcionando oportunidades de crecimiento profesional y un entorno de trabajo seguro y colaborativo.`
  }
];

const valores = [
  {
    description: 'Compromiso con la Excelencia en la Calidad',
  },
  {
    description: 'Integridad y Honestidad en Todas las Interacciones',
  },
  {
    description: 'Priorizando la Seguridad de Nuestro Equipo y Nuestros Proyectos',
  },
  {
    description: 'Fomentando la Innovación y la Adopción Tecnológica',
  },
  {
    description: 'Compromiso con la Sostenibilidad y el Respeto Ambiental',
  },
];

const Nosotros = () => {

  const onChange = (key: string) => {
    console.log(key);
  };


  return (
    <Row gutter={[16, 16]}>
      <Col xs={24} sm={24} md={24} lg={24}>
        <Tabs
          tabPosition="left"
          animated
          onChange={onChange}
          type="card"
          items={tabs.map((t) => {
            return {
              label: t.label,
              key: t.key,
              children: (
                <Row gutter={[16, 16]}>
                  <Col xs={24} sm={24} md={12} lg={8}>
                    <Image src={nosotros}
                      layout="responsive"
                      alt="Logo"
                      width={300}
                      height={200} />
                  </Col>
                  <Col xs={24} sm={24} md={12} lg={16}>
                    {t.children}
                  </Col>
                </Row>
              ),
            };
          })}
        />

        <Divider plain>NUESTROS VALORES</Divider>
        
        <List
          itemLayout="horizontal"
          dataSource={valores}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={<CheckCircleOutlined />}
                description={item?.description}
              />
            </List.Item>
          )}
        />
      </Col>
    </Row>
  )
}

export default Nosotros;