# По лекции Репеты. Модуль 1, лекция - 2: "Компоненты и коллекции. Стилизация - теория"

[Видео лекции - "Компоненты и коллекции. Стилизация - теория":](https://www.youtube.com/watch?v=XRs3v6pNOH8&t=0s);

- [Декомпозиция элементов макета на Реакт компоненты (0:00:40...0:13:50);](https://www.youtube.com/watch?v=XRs3v6pNOH8&t=40s);
- [App.js и правила импорта, описание вспомогательного файла "jsconfig.son" (0:14:10...0:16:30);](https://www.youtube.com/watch?v=XRs3v6pNOH8&t=850s);
- [Компонент "PageTitle" (0:16:35...0:00:00);](https://www.youtube.com/watch?v=XRs3v6pNOH8&t=995s);

# Дополнительный материал:

- [react-icons](https://react-icons.github.io/react-icons/)
- [date-fns](https://date-fns.org/)
- [prop-types](https://www.npmjs.com/package/prop-types)

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
