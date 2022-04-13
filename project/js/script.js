/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener('DOMContentLoaded', () => {//частично загружает код на страницу что бы не нагружать систему
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    const adv = document.querySelectorAll('.promo__adv img'),
          bg = document.querySelector('.promo__bg'),
          genre = bg.querySelector('.promo__genre'),
          addForm = document.querySelector('form.add'),
          addInput = addForm.querySelector('.adding__input'),
          checkbox = addForm.querySelector('[type="checkbox"]'),
          movielist = document.querySelector('.promo__interactive-list');

    
    addForm.addEventListener('submit', (event) => {
        event.preventDefault();
    
        let newFilm = addInput.value;
        const favorite = checkbox.checked;

        if (newFilm) { // если что ввели то это выполниться

            if (newFilm.length > 21) { // обрезка количества знаков, если больше 21 знака пишет '...'
                newFilm = `${newFilm.substring(0, 22)}...`;
            }

            if (favorite) { // если стоит галочка (True) он выполнит 
                console.log("Добавляем любимый фильм");
            }
            
            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
    
            createMovieList(movieDB.movies, movielist);
    
    
        }
    
        event.target.reset();
    
    });
    
    
    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    
    };

    const makeChanges = () => {
        genre.textContent ="драма";
        bg.style.backgroundImage = "url('./img/bg.jpg')";
    
    };
    
    const sortArr = (arr) => {
        arr.sort();
    };

    
    

    
    function createMovieList(films, parent) {
        parent.innerHTML = '';
        sortArr(films);

    
        films.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item"> ${i+1} ${film}
                    <div class="delete"></div>
                </li>
        
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();//удалить элемент со страницы
                movieDB.movies.splice(i, 1);//удалить элемент из базы даных 
                // i-это каждый елемент который мы нажали удалить, 
                // 1 это количество элементов сколько нам нужно удалить
                createMovieList(movieDB.movies, movielist);

            
            });
        });
    
    }


    deleteAdv(adv);
    makeChanges();
    createMovieList(movieDB.movies, movielist);
    
});








