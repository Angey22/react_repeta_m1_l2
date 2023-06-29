// Импорт "глобальных" элементов.
import React from 'react';
import ReactDOM from 'react-dom/client';

// Импорт "локальных" элементов.
import './index.css';
import { App } from 'components/App';

//! Упрощенная запись начальной точки "рендера", которую приводит Репета, но она дает ошибку и не рендерится.
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root'),
// );

// Стандартная запись начальной точки "рендера".
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//! Код написанный в файле "jsconfig.json" позволяет устанавливать все пути для импорта файлов относительно директории "src", благодаря чему упрощается адресация при настройке путей импорта функций (компонентов) из одного файла в другой. 

