// Импортируем компонент "PageTitle".
import { PageTitle } from "../PageTitle/PageTitle";

// Импортируем компонент "EventBoard".
import { EventBoard } from "../EventBoard/EventBoard";

// Импортируем в переменную данные из файла "upcoming-events.json".
import upcomingEvents from '../../upcoming-events.json';

// Импортируем стили из файла "App.styled.js".
import { Container } from './App.styled';

// Код функции-компонента.
export const App = () => {
    return (
        <Container>
            <PageTitle text="24th Core Worlds Coalition Conference" />
            <EventBoard events={upcomingEvents} />  
        </Container>
    );
};