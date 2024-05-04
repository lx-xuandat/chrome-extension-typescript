import React from 'react';
import { Button } from 'antd';
import { Taobao } from '../models/Taobao.ts';

export const ButtonAddToCart: React.FC<{ JSPath: any, User: any }> = ({ JSPath, User }) => {
  const resolve = (item: string) => {
    const app: { [key: string]: any } = {
      'detail.tmall.com': Taobao,
      'item.taobao.com': Taobao,
    };


    let host = window.location.host.split('.').slice(-3).join('.')
    switch (item) {
      case 'item':
        return new (app[host]);
      default:
        break;
    }
  };

  const handleClick = () => {
    try {
      const item = resolve('item');
      item.checkValid()


      console.log(item);
    } catch (error: any) {
      console.log(error)
      window.alert(error.message)
    }
  };

return (
  <Button type="primary" onClick={handleClick} id="vitexpress_btnorder">
    立即购买
  </Button>
);
};
