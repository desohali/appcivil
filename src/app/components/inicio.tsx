"use client";
import React from 'react'
import Image from 'next/image';
import { Carousel, Col, Result, Row, Typography } from 'antd';

import imagen1 from '../../../public/1.jpg';
import imagen2 from '../../../public/4.jpg';
import imagen3 from '../../../public/3.jpg';

import { servicios as data } from './servicios';

const { Title } = Typography;

var globalWindow: any = typeof window !== 'undefined' ? window : {};

const Inicio = () => {

  const [servicio, setServicio] = React.useState<any>(data[data.length - 1]);

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
    <Row gutter={[16, 16]}>


      <Col xs={24} sm={24} md={24} lg={24}>
        <div style={containerStyles}>
          <Title level={5} style={{ textAlign: "center" }}>
            Nos especializamos en la ejecución de obras de ingeniería civil con un enfoque inquebrantable en la calidad y la eficiencia. Nuestro compromiso es llevar a cabo su proyecto de construcción con precisión y profesionalismo. No dude en contactarnos para explorar cómo podemos satisfacer sus necesidades de construcción con experiencia y dedicación.
          </Title>
        </div>
      </Col>


      <Col xs={24} sm={24} md={24} lg={8} >
        <Result
          style={{ padding: "24px" }}
          status="success"
          title={servicio?.label}
          subTitle={!isMovil ? servicio?.children : ""}
        />
      </Col>
      <Col xs={24} sm={24} md={24} lg={16}>
        <Carousel autoplay autoplaySpeed={5000} dotPosition="bottom" beforeChange={(e) => {
          const servicioRandom = data[Math.floor(Math.random() * data.length)];
          setServicio(servicioRandom);
        }} >
          <div>
            <Image src={imagen1}
              layout="responsive"
              alt="Logo"
              width={640}
              height={427} />
          </div>
          <div>
            <Image src={imagen2}
              layout="responsive"
              alt="Logo"
              width={640}
              height={427} />
          </div>
          <div>
            <Image src={imagen3}
              layout="responsive"
              alt="Logo"
              width={640}
              height={427} />
          </div>
        </Carousel>
      </Col>
    </Row>
  )
}

export default Inicio;

