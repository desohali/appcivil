"use client";
import { Button, Carousel, Col, Grid, Result, Row } from 'antd'
import Image from 'next/image';
import React from 'react'

import imagen1 from '../../../public/1.jpg';
import imagen2 from '../../../public/4.jpg';
import imagen3 from '../../../public/3.jpg';
import { servicios as data } from './servicios';


const Inicio = () => {


  const [servicio, setServicio] = React.useState<any>(data[data.length - 1]);

  const [isMovil, setCollapsed] = React.useState(window.innerWidth < 768);
  React.useEffect(() => {
    const handleResize = () => {
      setCollapsed(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Row gutter={[16, 16]}>
      <Col xs={24} sm={24} md={24} lg={8} >
        <Result
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

