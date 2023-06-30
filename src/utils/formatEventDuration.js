// Подключаем библиотеку "data-fns" в текущий файл и импортируем из нее нужное нам свойство "formatDistanceStrict", предназначенное для обработки даты и времени в формате ISO-8601 (2022-02-17T14:30:00), с целью вычисления разницы (в часах) между двумя стандартными значениями даты.
import { formatDistanceStrict } from "date-fns";

//! Доп. функция библиотеки "data-fns", позволяющая локализировать отображение даты и времени под нужный ЯЗЫК (en, ru, ua и т.д.). Английский язык - по умолчанию (enGB - это англ. вариант для Великобритании).
import { enGB } from "date-fns/locale";
// Для включения локализации, в функцию "format()" нужно добавить третий аргумент-объект, например: {locale: ru}.

// Код функции.
export const formatEventDuration = (start, end) => {
  return formatDistanceStrict(Date.parse(start), Date.parse(end), {locale: enGB});
};