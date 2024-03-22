"use client";
import React from 'react';
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
import { Layout, Menu, Button, theme, FloatButton, Typography, Spin, Flex, Drawer } from 'antd';
import Image from 'next/image';
import logo from '../../public/logo.svg';
import { useRouter } from 'next/navigation';
const { Title } = Typography;

const { Header, Sider, Content } = Layout;

const itemMenu = [
  { title: 'Inicio', hash: 'inicio' },
  { title: 'Servicios', hash: 'servicios' },
  { title: 'Nosotros', hash: 'nosotros' },
  { title: 'Contacto', hash: 'contacto' },
];

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

  const [open, setOpen] = React.useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const items = [
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
  ]

  // observer
  React.useEffect(() => {
    let observerChangeHash: IntersectionObserver;

    observerChangeHash = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            globalWindow.history.pushState(null, '', `#${entry.target.id}`);
            setMenuActive([`/${entry.target.id}`]);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    setTimeout(() => {
      itemMenu.forEach(({ hash }) => {
        const target = document.getElementById(hash) as HTMLElement;
        observerChangeHash.observe(target);
      });
    }, 2000);

    return () => {
      observerChangeHash.disconnect();
    };
  }, []);

  const [menuActive, setMenuActive] = React.useState(['/inicio']);

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
      <Drawer placement="left" title="INGENIERÍA CIVIL" width={240} onClose={onClose} open={open}>
        <Sider trigger={null} collapsible style={{
          position: "relative",
          background: "#001529",
        }}>
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
            theme="dark"
            mode="inline"
            selectedKeys={menuActive}
            onClick={(e) => {
              router.push(e.key.replace("/", "#"));
              setMenuActive([e.key]);
            }}
            items={items}
          />
        </Sider>
      </Drawer>

      <Sider trigger={null} style={{
        position: "relative",
        display: isMovil ? "none" : "",
      }}>
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
          style={{}}
          theme="dark"
          mode="inline"
          selectedKeys={menuActive}
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
      <Layout className='layout'>
        <Header style={{ padding: 0, background: colorBgContainer, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
            {isMovil && (
              <div style={{ flex: '0 0 64px' }}>
                <Button
                  type="primary"
                  icon={isMovil ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                  onClick={showDrawer}
                  style={{
                    fontSize: '16px',
                    width: 64,
                    height: 64
                  }}
                />
              </div>
            )}
            <div style={{ flex: 1, textAlign: 'center' }}>
              <Title level={3} style={{ margin: 0 }}>INGENIERÍA CIVIL</Title>
            </div>
          </div>
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