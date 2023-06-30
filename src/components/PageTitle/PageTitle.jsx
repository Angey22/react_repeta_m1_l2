// Подключаем библиотеку "prop-types" в текущий файл компонента.
import PropTypes from "prop-types";

// Импорт стилей данного модуля из файла "PageTitle.module.css".
// import css from './PageTitle.module.css';

// Импорт компонента со стилями из файла "PageTitle.styled.js".
import { Title } from "./PageTitle.styled";

// Код функции-компонента.
export const PageTitle = ({ text }) => {
    //! Используем компонент со стилями.
    return <Title>{text}</Title>;

    //! Используем модульный CSS.
    // return <h1 className={css.title}>{text}</h1>;
};

// Прописываем "PropTypes".
PageTitle.propTypes = {
    text: PropTypes.string.isRequired
};


//! Обрати внимание на то, что вместо атрибута "class" использовано служебное слово - "className".
//! Обрати внимание на то, что при импорте CSS стилей, набор импортируемых стилей воспринимается Реактом как объект, соответственно, каждый отдельный класс в этом наборе - является свойством этого объекта. Именно поэтому, при обращении к конкретному CSS классу с соответствующим набором стилей, была использована синтаксическая конструкция - "css.title" (имя_объекта.имя_CSS_класса).
//! Важной особенностью использования модульной стилизации является то, что к каждому имени класса добавляется "хешь" (уникальный набор символов), а это - делает невозможным возникновение конфликтов стилей между собой, даже с одинаковыми именами классов!!!

// Раскомментируй и посмотри лог.
// console.log(css);