// Подключаем библиотеку "prop-types" в текущий файл компонента.
import PropTypes from "prop-types";

// Подключаем SVG иконки из библиотеки "react-icons"
import {
    FaMapMarkerAlt,
    FaUserAlt,
    FaCalendarAlt,
    FaClock
} from "react-icons/fa";

// Импорт вспомогательной функции "formatEventStar" из файла "formatEventStart.js"
// import { formatEventStart } from 'utils/formatEventStart';

// Импорт вспомогательной функции "formatEventDuration" из файла "formatEventDuration.js"
// import { formatEventDuration } from 'utils/formatEventDuration';

//! Пример использования концепции "реэкспорта" для импорта нескольких функций из разных файлов одной строкой.
import { formatEventStart, formatEventDuration } from 'utils';

// Импорт вспомогательного объекта с набором размеров иконок из файла "iconSize.js".
import { iconSize } from 'constans';

// Импорт стилей данного модуля из файла "EventBoard.module.css".
// import css from './Event.module.css';

// Импорт компонента со стилями из файла "Event.styled.js".
import { Card, EventName, Info, Chip } from "./Event.styled";

// Код функции-компонента.
export const Event = ({ name, location, speaker, type, start, end }) => {
    // Переменные для изменения формата даты через вспомогательные функции.
    const formattedStart = formatEventStart(start);
    const duration = formatEventDuration(start, end);

    //! Используем компонент со стилями.
    return (
    <Card>
        <EventName>{name}</EventName>
        <Info>
            <FaMapMarkerAlt size={iconSize.sm} />
            {location}
        </Info>
        <Info>
            <FaUserAlt size={iconSize.sm} />
            {speaker}
        </Info>
        <Info>
            <FaCalendarAlt size={iconSize.sm} />
            {formattedStart}
        </Info>
        <Info>
            <FaClock size={iconSize.sm} />
            {duration}
        </Info>
        <Chip eventType={type} img="hahaha">{type}</Chip>
    </Card>
    )

    //! Используем модульный CSS.
    // return (
    // <div className={css.event}>
    //     <h2 className={css.title}>{name}</h2>
    //     <p className={css.info}>
    //         <FaMapMarkerAlt className={css.icon} size={iconSize.sm} />
    //         {location}
    //     </p>
    //     <p className={css.info}>
    //         <FaUserAlt className={css.icon} size={iconSize.sm} />
    //         {speaker}
    //     </p>
    //     <p className={css.info}>
    //         <FaCalendarAlt className={css.icon} size={iconSize.sm} />
    //         {formattedStart}
    //     </p>
    //     <p className={css.info}>
    //         <FaClock className={css.icon} size={iconSize.sm} />
    //         {duration}
    //     </p>
    //     <span className={`${css.chip} ${css[type]}`}>{type}</span>
    // </div>
    // )
};

// Прописываем "PropTypes".
Event.propTypes = {
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    speaker: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    time: PropTypes.exact({
        start: PropTypes.string.isRequired,
        end: PropTypes.string.isRequired,
    })
}