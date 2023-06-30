// Подключаем к файлу библиотеку "Emotion".
import styled from '@emotion/styled';

// Код компонента со стилями.
export const Board = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, auto));
    gap: 24px;
    padding-left: 16px;
    padding-right: 16px;
`;