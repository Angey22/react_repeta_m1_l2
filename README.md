# По лекции Репеты. Модуль 1, лекция - 2: "Компоненты и коллекции. Стилизация - теория"

[Видео лекции - "Компоненты и коллекции. Стилизация - теория":](https://www.youtube.com/watch?v=XRs3v6pNOH8&t=0s){:target="_blank"}

- [Декомпозиция элементов макета на Реакт компоненты (0:00:40...0:13:50);](https://www.youtube.com/watch?v=XRs3v6pNOH8&t=40s){:target="_blank"}
- [App.js и правила импорта, описание вспомогательного файла "jsconfig.son" (0:14:10...0:16:30);](https://www.youtube.com/watch?v=XRs3v6pNOH8&t=850s){:target="_blank"}
- [Создаем компонент "PageTitle" + Описание борьбы со стандартной ошибкой Реакта - ".env" (0:16:35...0:21:20);](https://www.youtube.com/watch?v=XRs3v6pNOH8&t=995s){:target="_blank"}
- [Создаем компонент "EventBoard" + Прописываем "PropTypes" (0:21:25...0:29:40);](https://www.youtube.com/watch?v=XRs3v6pNOH8&t=1285s){:target="_blank"}
- [Пробный "рендер" коллекции карточек (0:29:45...0:31:25);](https://www.youtube.com/watch?v=XRs3v6pNOH8&t=1785s){:target="_blank"}
- [Создаем компонент "Event" + Использование библиотеки - "react-icons" (0:31:30...0:52:05);](https://www.youtube.com/watch?v=XRs3v6pNOH8&t=1890s){:target="_blank"}

- [Как добавить свои SVG иконки в React приложение-1 ? (доп. материал НЕ из лекции);](https://www.youtube.com/watch?v=pRpaDlqhiT8){:target="_blank"}
- [Как добавить свои SVG иконки в React приложение-2 ? (доп. материал НЕ из лекции);](https://blog.logrocket.com/how-to-use-svgs-react/){:target="_blank"}

- [Продолжаем создавать компонент "Event", работаем с датой и временем, используем библиотеку - "date-fns" + Концепция реэкспорта функций (0:52:10...1:03:30);](https://www.youtube.com/watch?v=XRs3v6pNOH8&t=3130s){:target="_blank"}
- [Настройка разноцветных "плашек" карточек - free/paid/vip (1:03:35...1:09:00);](https://www.youtube.com/watch?v=XRs3v6pNOH8&t=3815s){:target="_blank"}
- [Настройка автоматического размеров иконок + Использование метода "Object.freeze({})" (1:09:05...1:14:50);](https://www.youtube.com/watch?v=XRs3v6pNOH8&t=4145s){:target="_blank"}
- [Ответы на вопросы по пройденному материалу лекции (1:14:55...1:24:27);](https://www.youtube.com/watch?v=XRs3v6pNOH8&t=4495s)

# По лекции Репеты. Модуль 1, лекция - 3: "Emotion (стилизация JS)"

[Видео лекции - "Emotion (стилизация JS)":](https://www.youtube.com/watch?v=S9-zFqxeEr8&t=0s){:target="_blank"}

- [Основы динамического CSS - теория + Установка пакетов "@emotion/styled" и "@emotion/react" (0:00:05...0:04:50);](https://www.youtube.com/watch?v=S9-zFqxeEr8&t=5s){:target="_blank"}
- [Стилизуем компонент "App" с помощью - "Emotion" (0:04:55...0:09:00);](https://www.youtube.com/watch?v=S9-zFqxeEr8&t=295s){:target="_blank"}
- [Стилизуем компонент "PageTitle" с помощью - "Emotion" (0:09:15...0:11:35);](https://www.youtube.com/watch?v=S9-zFqxeEr8&t=555s){:target="_blank"}
- [Стилизуем компонент "EventBoard" с помощью - "Emotion" (0:11:35...0:13:15);](https://www.youtube.com/watch?v=S9-zFqxeEr8&t=695s){:target="_blank"}
- [Стилизуем компонент "Event" с помощью - "Emotion", настройка динамического изменения стилей (0:13:20...0:33:15);](https://www.youtube.com/watch?v=S9-zFqxeEr8&t=800s){:target="_blank"}
- [Как создать "темизацию" (изменение темы) с помощью - "Emotion" (0:33:20...0:41:35);](https://www.youtube.com/watch?v=S9-zFqxeEr8&t=2000s){:target="_blank"}
- ["spacing" и ее динамическое изменение с помощью - "Emotion" (0:41:40...0:48:45);](https://www.youtube.com/watch?v=S9-zFqxeEr8&t=2500s){:target="_blank"}
- [Ответы на вопросы (0:48:50...0:54:44);](https://www.youtube.com/watch?v=S9-zFqxeEr8&t=2930s)

# Дополнительный материал:

- [react-icons](https://react-icons.github.io/react-icons/){:target="_blank"}
- [date-fns](https://date-fns.org/){:target="_blank"}
- [prop-types](https://www.npmjs.com/package/prop-types){:target="_blank"}
- [Emotion](https://emotion.sh/docs/introduction){:target="_blank"}

# Вспомогательный материал:

## Components

### Page title

```html
<h1 class="title">Text</h1>
```

```css
.title {
  margin-top: 0;
  text-align: center;
  text-transform: uppercase;
}
```

### EventBoard

```html
<div class="eventBoard">Event cards</div>
```

```css
.eventBoard {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, auto));
  gap: 24px;
  padding-left: 16px;
  padding-right: 16px;
}
```

### Event

```html
<div class="event">
  <h2 class="title">{name}</h2>
  <p class="info">
    <i class="icon"></i>
    Location
  </p>
  <p class="info">
    <i class="icon"></i>
    Speaker
  </p>
  <p class="info">
    <i class="icon"></i>
    Start Date
  </p>
  <p class="info">
    <i class="icon"></i>
    Duration
  </p>
  <span class="chip free|paid|vip">Event type</span>
</div>
```

Icons:

- FaMapMarkerAlt
- FaUserAlt
- FaCalendarAlt
- FaClock

```css
.event {
  position: relative;
  border: 2px dashed black;
  padding: 8px;
  border-radius: 4px;
}

.title {
  margin-top: 0;
  font-size: 14px;
  line-height: 24px;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

.info {
  display: flex;
  align-items: center;
  margin-top: 0;
  margin-bottom: 8px;
  color: var(--color-primary-text);
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  letter-spacing: 0.25px;
}

.icon {
  display: block;
  margin-right: 8px;
  color: var(--color-secondary-text);
}

.chip {
  position: absolute;
  top: 4px;
  right: 4px;
  padding: 4px 8px;
  border-radius: 4px;
  text-transform: uppercase;
  background-color: #000;
  color: #fff;
}

.free {
  background-color: var(--color-green);
}

.paid {
  background-color: var(--color-blue);
}

.vip {
  background-color: var(--color-red);
}
```

## Utils

```js
import { format, formatDistanceStrict } from "date-fns";

const formatEventStart = (start) => {
  return format(Date.parse(start), "dd MMMM yyyy, HH:mm");
};

const formatEventDuration = (start, end) => {
  return formatDistanceStrict(Date.parse(start), Date.parse(end));
};
```
