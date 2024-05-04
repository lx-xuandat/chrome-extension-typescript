import './style.scss'

import React from 'react'
import ReactDOM from 'react-dom/client'

import { ButtonAddToCart } from './components/ButtonAddToCart.tsx'
import { ToolBar } from './components/ToolBar.tsx'
import { JSPath } from './configs/JSPath.ts'
import { AuthService } from './services/ApiRequest.tsx'

const createElementVitexpress = (_id: string) => {
  const element = document.createElement('vitexpress')
  element.id = _id

  switch (_id) {
    case 'ToolBar':
      let toolbar = document.querySelector('vitexpress#' + _id) as HTMLElement
      if (toolbar) {
        toolbar.replaceWith(element)
      } else {
        document.body.insertBefore(element, document.body.firstChild)
      }
      break;
    case 'ButtonAddToCart':
      let btnAdd = document.querySelector('vitexpress#' + _id + ', '  + JSPath.btn_buy) as HTMLElement
      if (btnAdd) {
        btnAdd.replaceWith(element)
      } else {
        document.body.insertBefore(element, document.body.lastChild)
      }
      break;
    default:
      break;
  }
  return element
}

const makeElement = (elementId: string): HTMLElement => {
  // Tạo một phần tử mới với tagName là 'vitexpress'
  const newElement = document.createElement('vitexpress') as HTMLElement;
  // Gán id cho phần tử mới
  newElement.id = elementId;

  // Lấy phần tử cha của thẻ body
  const parentElement = document.body.parentNode as HTMLElement;

  // Tìm phần tử cũ với id tương tự
  const oldElement = parentElement.querySelector(`vitexpress#${elementId}`) as HTMLElement;

  // Nếu phần tử cũ tồn tại, thay thế bằng phần tử mới, ngược lại, chèn phần tử mới vào cuối
  if (oldElement) {
    oldElement.replaceWith(newElement);
  } else {
    parentElement.appendChild(newElement);
  }

  return newElement;
};

AuthService.getAuth().then((user) => {
  console.log(user);

  ReactDOM.createRoot(createElementVitexpress('ToolBar') as HTMLElement).render(
    <React.StrictMode>
      <ToolBar JSPath={JSPath} User={user} />
    </React.StrictMode>
  )

  ReactDOM.createRoot(createElementVitexpress('ButtonAddToCart') as HTMLElement).render(
    <React.StrictMode>
      <ButtonAddToCart JSPath={JSPath} User={user} />
    </React.StrictMode>
  )
})
