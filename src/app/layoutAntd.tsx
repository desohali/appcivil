"use client";
import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  WhatsAppOutlined,
  HomeOutlined,
  ProjectOutlined,
  ToolOutlined,
  ReadOutlined,
  ContactsOutlined
} from '@ant-design/icons';
import { Layout, Menu, Button, theme, FloatButton, Typography, Spin, Flex } from 'antd';
import Image from 'next/image';
import logo from '../../public/logo.svg';
import { useRouter } from 'next/navigation';
const { Title } = Typography;

const { Header, Sider, Content } = Layout;

var globalWindow: any = typeof window !== 'undefined' ? window : {};

const LayoutAntd = ({ children }: any) => {

  const router = useRouter();

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [loading, setloading] = React.useState<Boolean>(true);
  React.useEffect(() => {
    setloading(false);
  }, []);

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

  if (loading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        flexDirection: 'column',
      }}>
        <Image src={logo}
          alt="Logo"
          width={150}
          height={88} />

        <span style={{ marginTop: '10px', fontSize: "1rem", fontWeight: "bold", textAlign: "center" }}>
          <Spin />
          <Spin />
          <Spin />
        </span>
      </div>

    );
  }

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={isMovil} style={{ position: "relative", background: "" }}>
        <div style={{ width: "100%", padding: "1rem", margin: "auto", textAlign: "center" }}>
          <a href={location.origin}>
            <Image src={logo}
              layout="responsive"
              alt="Logo"
              width={300}
              height={176} />
          </a>
        </div>

        <Menu
          style={{ background: "" }}
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['/inicio']}
          onClick={(e) => {
            router.push(e.key.replace("/", "#"));
          }}
          items={[
            {
              key: '/inicio',
              icon: <HomeOutlined />,
              label: 'Inicio',
            },
            {
              key: '/servicios',
              icon: <ToolOutlined />,
              label: 'Servicios',
            },
            {
              key: '/nosotros',
              icon: <ProjectOutlined />,
              label: 'Nosotros',
            },
            /* {
              key: '/portafolio',
              icon: <ReadOutlined />,
              label: 'Portafolio',
            }, */
            {
              key: '/contacto',
              icon: <ContactsOutlined />,
              label: 'Contacto',
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Title level={3} style={{ margin: 0 }}>INGENIERÍA CIVIL TECH</Title>
        </Header>
        <Content
          style={{
            margin: '16px 8px',
            padding: 16,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
          <FloatButton icon={<WhatsAppOutlined />} href="https://wa.me/51968554228?text=Hola,%20me%20gustaría%20saber%20más%20sobre%20tus%20servicios" />
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutAntd;