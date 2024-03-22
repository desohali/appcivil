import { Col, Divider, Row, Typography } from 'antd'
import React from 'react'
import {
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined
} from '@ant-design/icons';

const { Title } = Typography;

const Contacto = () => {
  return (
    <Row gutter={[16, 16]}>
      <Col xs={24} sm={24} md={8} lg={6} >
        <div style={{ width: '100%', padding: '0' }}>
          <Divider orientation="left"><Title level={3}>Contáctanos</Title></Divider>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
            <EnvironmentOutlined style={{ fontSize: '24px', marginRight: '1rem' }} />
            <p style={{ margin: 0 }}>Dirección: Cajabamba, Cajamarca, Perú</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
            <MailOutlined style={{ fontSize: '24px', marginRight: '1rem' }} />
            <p style={{ margin: 0 }}>Correo Electrónico: hameralbarran@gmail.com</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <PhoneOutlined style={{ fontSize: '24px', marginRight: '1rem' }} />
            <p style={{ margin: 0 }}><a href="tel:+51968554228">Teléfono: +51968554228</a></p>
          </div>
        </div>
      </Col>
      <Col xs={24} sm={24} md={16} lg={18} >
        <iframe style={{ width: "100%", height: "350px" }} src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3954.580742755317!2d-78.04952072489196!3d-7.620513692394924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sjr.Zavala%20903%20cajabamaba!5e0!3m2!1ses-419!2spe!4v1711067758641!5m2!1ses-419!2spe" loading="lazy" ></iframe>
      </Col>
    </Row>
  )
}

export default Contacto