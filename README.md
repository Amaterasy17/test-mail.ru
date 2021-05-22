# Тестовое задание в Mail.ru Group

## Задание:
Написать компонент Figure на React и TypeScript. 
Стилизация Styled-components, JSS или свое решение на выбор.
Назначение компонента в следующем.
Так как картинки появляются только после их загрузки, то страница скачет.
Это выглядит не очень красиво.
Гораздо лучше выглядит, когда для картинок уже зарезервировано место,
а во время загрузки показывается лоадер.

## Решение
Чтобы посмотреть решение склонируйте репозиторий:

`git clone https://github.com/Amaterasy17/test-mail.ru`

## Запуск проекта:
Чтобы посмотреть пример работы компонента, сделайте следующие шаги:
* `npm install`
* `npm start`
  
    ![Start App](https://github.com/Amaterasy17/test-mail.ru/raw/master/screenshots/start.png)

* Открываем браузер по адресу: *http://localhost:3000*

## Тесты
Для запуска тестов необходимо выполнить команду:

`npm test`

![Start Test](https://github.com/Amaterasy17/test-mail.ru/raw/master/screenshots/start_test.png)

## Компонент и примеры его работы:

* Стандартный вид компонента c подписью:
  
  ![Start Test](https://github.com/Amaterasy17/test-mail.ru/raw/master/screenshots/dafault_figcapture.png)
  
По условию:
Компонент всегда занимает 100% ширины родителя.
Исходя из реальной ширины, зная соотношение сторон,
можно высчитать высоту будущей картинки. 
Если реальное соотношение сторон отличается от заданного, 
то картинка должна обрезаться под заданное соотношение
(центр оригинальной картинки должен оставаться в центре обрезанной)

Таким образом, получается **3 кейса** поведения компонента, внутри родителя.
Компонент должен подстариваться под ширину родителя, а также учитывать его высоту

* ### Совпадение соотношения сторон компонента и родителя

Это значит что посчитанная высота компонента, получилась такой же как у родителя.
В данном примере, пусть у нас будет родитель размерами: 300px * 500px
Компонент с соотношением 5:3


    `<Figure
    src=”https://images.pexels.com/photos/1647214/pexels-photo-1647214.jpeg?dl&fit=crop&crop=entropy&w=640&h=1006”
    arWidth={3}
    arHeight={5}
    />
    `   

Тогда будет следующий результат:

![Start Test](https://github.com/Amaterasy17/test-mail.ru/raw/master/screenshots/image_5:3.png)

* ### Высота компонента оказалась меньше высоты родителя

Возьмем того же родителя, только добавим ему задний фон, в виде серого цвета.
**Примечание: ВАЖНО:** на примере фон не компонента, который сделан, а фон родителя, в котором будет находиться компонент.
Компонент это просто картинка, можно сказать.
Компонент с соотношением 5:3


    `<Figure
    src=”https://images.pexels.com/photos/1647214/pexels-photo-1647214.jpeg?dl&fit=crop&crop=entropy&w=640&h=1006”
    arWidth={3}
    arHeight={4}
    />
    `  
![Start Test](https://github.com/Amaterasy17/test-mail.ru/raw/master/screenshots/image_4:3.png)

Компонент с соотношением 4:15


    `<Figure
    src=”https://images.pexels.com/photos/1647214/pexels-photo-1647214.jpeg?dl&fit=crop&crop=entropy&w=640&h=1006”
    arWidth={4}
    arHeight={15}
    />
    `  
![Start Test](https://github.com/Amaterasy17/test-mail.ru/raw/master/screenshots/image_4:15.png)

Таким образом, видно на примере, что компонент `Figure` подстраивается под размер родителя,
а также обрезает картинку в заданном соотношении, оставляя центр обрезанной в центре исходной.

* ### Высота компонента оказалась больше высоты родителя

В данном случае картинка, можно сказать смасштабируется, то есть приблизится, 
и при этом останется в пределах родителя.
Берем того же родителя (300px * 500px), тогда:
Компонент с соотношением 2:1, при таком соотношении его высота должна быть 600px, 
в результате картинка внтури `Figure` будет иметь такой размер, но она будет обрезана,
а также будет назодиться в пределах родителя


    `<Figure
    src=”https://images.pexels.com/photos/1647214/pexels-photo-1647214.jpeg?dl&fit=crop&crop=entropy&w=640&h=1006”
    arWidth={1}
    arHeight={2}
    />
    `  
![Start Test](https://github.com/Amaterasy17/test-mail.ru/raw/master/screenshots/image_2:1.png)

Аналогично, компонент с соотношением 3:1


    `<Figure
    src=”https://images.pexels.com/photos/1647214/pexels-photo-1647214.jpeg?dl&fit=crop&crop=entropy&w=640&h=1006”
    arWidth={1}
    arHeight={2}
    />
    `  
![Start Test](https://github.com/Amaterasy17/test-mail.ru/raw/master/screenshots/image_3:1.png)

### Другие примеры работы `Figure`:

* Закрывающий тег с невалидным src у фото

![Start Test](https://github.com/Amaterasy17/test-mail.ru/raw/master/screenshots/not_valid.png)

## Домашнее задание:

Находится в папке homework


*Примечание: Так как добавил свою кастомную сборку, пришлось в дальнейшем работать в новом репозитории,
ссылка на старый репозиторий в виде CRA template, на всякий случай: https://github.com/Amaterasy17/TestMailRu*