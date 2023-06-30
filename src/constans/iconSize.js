
// Код функции с набором стандартных размеров иконок в "px".
export const iconSize = Object.freeze({
    xs: 12,
    sm: 16,
    md: 24,
    ld: 32,
});

// "Object.freeze({})" - это статический метод объекта, который предотвращает изменение объекта во внешнем коде. Он "замораживает" состояние соответствующего объекта, что позволяет предотвратить возможное изменение "замороженного" объекта(не дает возможность в нем что-то изменить, добавить в него что-то, или удалить что-то из него).