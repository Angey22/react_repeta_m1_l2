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

// Импорт стилей данного модуля из файла "EventBoard.module.css".
import css from './Event.module.css';

// Код функции-компонента.
export const Event = ({ name, location, speaker, type, start, end }) => {
    const formattedStart = formatEventStart(start);
    const duration = formatEventDuration(start, end);

    return (
    <div className={css.event}>
        <h2 className={css.title}>{name}</h2>
        <p className={css.info}>
            <FaMapMarkerAlt className={css.icon} size={16} />
            {location}
        </p>
        <p className={css.info}>
            <FaUserAlt className={css.icon} size={16} />
            {speaker}
        </p>
        <p className={css.info}>
            <FaCalendarAlt className={css.icon} size={16} />
            {formattedStart}
        </p>
        <p className={css.info}>
            <FaClock className={css.icon} size={16} />
            {duration}
        </p>
        {/* <span class="chip free|paid|vip">Event type</span> */}
    </div>
    )
};

// Прописываем "PropTypes".
Event.propTypes = {
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    speaker: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    time: {
        start: PropTypes.string.isRequired,
        end: PropTypes.string.isRequired,
    }
}