// Подключаем библиотеку "prop-types" в текущий файл компонента.
import PropTypes from "prop-types";

// Импорт стилей данного модуля из файла "EventBoard.module.css".
// import { pt } from 'date-fns/locale';
import css from './EventBoard.module.css'

// Импорт компонента "Event".
import {Event} from 'components/Event/Event';

// Код функции-компонента.
export const EventBoard = ({ events }) => {

    return (
    <div className={css.eventBoard}>

            {events.map(event =>
                <Event key={event.name}
                    name={event.name}
                    location={event.location}
                    speaker={event.speaker}
                    type={event.type}
                    start={event.time.start}
                    end={event.time.end} />)}

    </div>);
};

// Прописываем "PropTypes".
EventBoard.propTypes = {
    events: PropTypes.arrayOf(
        PropTypes.exact({
        name: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        speaker: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        time: {
            start: PropTypes.string.isRequired,
            end: PropTypes.string.isRequired
        },
        })
    ),
};