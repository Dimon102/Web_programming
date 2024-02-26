# Лабораторная 3
Выделить из html (Лабораторная 2) данные.
Перенести html в js в виде шаблонов.
Цель - отделить данные так, чтобы при изменении длины массивов (добавлении и удалении элементов) из него, автоматически изменялось и отображаемое количество элементов этого массива (т.е. все элементы).

# установка gulp глобально
npm i gulp -g
npm i gulp-cli -g

# перед установкой gulp в проект, необходимо удостовреиться, что находитесь в корне проекта
# в корне проекта лежат файлы package.json и gulpfile.js
# команда cd в консоли

# для установки gulp необходимо в консоли написать:
npm i

# для запуска gulp в режиме разработки, пишем в консоли:
npm run dev

# для сборки проекта, чтобы опубликовать в продакшн:
npm run build --build

# в папку ./src/ необходимо разместить весь проект
# в папку ./dist/ gulp будет переносить уже готовые файлы, за которыми будет наблюдать
# и в случае изменения пересобирать проект и обновлять браузер
# в папке ./gulp/ находится вся логика и настройки для gulp