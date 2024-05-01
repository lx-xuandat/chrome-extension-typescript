import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons'
import { MenuProps, Button } from 'antd'
import { Menu } from 'antd'

const Extension: React.FC = () => {

  useEffect(() => {
    /*
    Query logic
    */
    console.log('i fire once');
  }, []);

  return null;
};


const ButtonAddToCart: React.FC = () => {
  useEffect(() => {
    /*
    Query logic
    */
    console.log('ButtonAddToCart i fire once');
  }, []);
  const handleClick = () => {
    console.log('Button clicked!')
  }

  return (
    <Button type="primary" onClick={handleClick}>
      Click me
    </Button>
  )
}

const ToolBar: React.FC = () => {

  type MenuItem = Required<MenuProps>['items'][number]

  const items: MenuItem[] = [
    {
      label: 'Navigation One',
      key: 'mail',
      icon: <MailOutlined />,
    },
    {
      label: 'Navigation Two',
      key: 'app',
      icon: <AppstoreOutlined />,
      disabled: true,
    },
    {
      label: 'Navigation Three - Submenu',
      key: 'SubMenu',
      icon: <SettingOutlined />,
      children: [
        {
          type: 'group',
          label: 'Item 1',
          children: [
            { label: 'Option 1', key: 'setting:1' },
            { label: 'Option 2', key: 'setting:2' },
          ],
        },
        {
          type: 'group',
          label: 'Item 2',
          children: [
            { label: 'Option 3', key: 'setting:3' },
            { label: 'Option 4', key: 'setting:4' },
          ],
        },
      ],
    },
    {
      key: 'alipay',
      label: (
        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
          Navigation Four - Link
        </a>
      ),
    },
  ]

  const [current, setCurrent] = useState('mail')

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e)
    setCurrent(e.key)
  }

  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
}


const createElement = () => {
  const element = document.createElement('vitexpress')

  return element
}

ReactDOM.createRoot(createElement() as HTMLElement).render(
  <React.StrictMode>
    <ToolBar />
  </React.StrictMode>
)

ReactDOM.createRoot(createElement() as HTMLElement).render(
  <React.StrictMode>
    <ButtonAddToCart />
  </React.StrictMode>
)

ReactDOM.createRoot(createElement() as HTMLElement).render(
  <React.StrictMode>
    <Extension />
  </React.StrictMode>
)
