import React from 'react';
import { HomeOutlined, SettingOutlined, LinuxOutlined, XOutlined, OpenAIOutlined, TransactionOutlined, FacebookOutlined, ShoppingCartOutlined, UsergroupAddOutlined } from '@ant-design/icons';
import { MenuProps } from 'antd';
import { Menu } from 'antd';

export const ToolBar: React.FC<{ JSPath: any, User: any }> = ({ JSPath, User }) => {

  type MenuItem = Required<MenuProps>['items'][number];

  const items: MenuItem[] = [
    {
      label: 'Home',
      key: 'home',
      icon: <HomeOutlined />,
      // disabled: true,
    },
    {
      label: 'Services',
      key: 'Services',
      icon: <SettingOutlined />,
      children: [
        { label: 'Experice', key: 'Experice', icon: <OpenAIOutlined /> },
        { label: 'Cost', key: 'Cost', icon: <TransactionOutlined /> },
      ],
    },
    {
      label: 'Social',
      key: 'Social',
      icon: <XOutlined />,
      children: [
        {
          label: <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            Group
          </a>,
          key: 'Group',
          icon: <UsergroupAddOutlined />
        },
        {
          label: <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            Fanpage
          </a>,
          key: 'Fanpage',
          icon: <FacebookOutlined />
        }
      ],
    },
    {
      label: 'Account',
      key: 'Account',
      icon: <LinuxOutlined />,
      children: [
        {
          label: <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            Login | Logout
          </a>,
          key: 'Account:auth',
          icon: <UsergroupAddOutlined />
        },
        {
          label: <a href="http://localhost:8888/cart" target="_blank" rel="noopener noreferrer">
            Cart
          </a>,
          key: 'Cart',
          icon: <ShoppingCartOutlined />
        }
      ],
    }
  ];


  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);

  };

  return <Menu onClick={onClick} mode="horizontal" items={items} />;
};
