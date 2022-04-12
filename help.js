// Git 
git init //создать git в документе
git config --global или --local user.name "Yuriy" // имя разрботчика
git config --global или --local user.email yuriy.sam2002@gmail.com // мейл разрботчика
git status // статус файлов
git add -A // добавить все файлы
git commit -a -m"О изменениях" // создание комита
git log // просмотр всех комитов
//Заходим на github и создаем новый файл и копируем команды в терминал
git push // загрузка на github



// Цикл 
for(let i = 1; i < 8; i++) {
    console.log("повторяет каждый раз пока i = 8");
};



// Условия
if (a = b) {
    console.log("если а = б выведет это сообщение");
}else {
    console.log("если а != б выведет это сообщение");
}



// Функции 

function nameFunction() {
    console.log("функция выведет это сообщение");

}
nameFunction() //запускает функцию



// Получение элементов со страницы
{
    const box = document.getElementById("box"), // получение элемента через id
      btns = document.getElementsByTagName("button"), // получение элемента через тег (Html колекция)
      circles = document.getElementsByClassName("circle"), // получение всех элементов через class (Html колекция) (без точки)
      hearts = document.querySelectorAll(".heart"), // получение всех элементов через css селектор (Html колекция) (forEach) (с точкой)
      oneHeart = document.querySelector(".heart"), // получение только первого элемента через css селектор (Html колекция) (forEach) (с точкой)


      masive = document.querySelectorAll(".masive"), // массив содержит элементы apples, ananas
      apples = masive.querySelectorAll(".apples"),// берется не с документа а с выше написаного масива
      ananas = masive.querySelectorAll(".ananas"),// берется не с документа а с выше написаного масива
      
console.log(btns[1]);//получить второй элемент масива btns

hearts.forEach(item => {
    console.log(item);
}); // вывести все элементы масива hearts

}




//Действия с элементами на странице
{
    box.style.backgroundColor = "blue";//меняется цвет фона элемента
    box.style.width = "500px";
    
    box.style.cssText = `backgroundColor: blue; width: ${num}px`;
    for (let i = 0; i < hearts.length; i++) {
        hearts[i].style.backgroundColor = "blue";// перебор элементов и присваение ним синего фона
    };
    hearts.forEach(item => {
        item.style.backgroundColor = "blue";
    })
    
    
    btns[1].style.borderRadius = "100%";//меняется радиус только второго элемента
    
    
    const div = document.createElement("div");// создали элемент внутри js
    
    div.classList.add('black');//div получил свойства класса black
    
    document.body.append(div);//в конец тега body добавили нами создан тег div
    document.body.prepend(div);//в начало тега body добавили нами создан тег div
    
    document.querySelector('wrapper').append(div);//в конец тега wrapper добавили нами создан тег div
    
    
    hearts[0].before(div);// перед первым элементе hearts вставили элемент div
    hearts[0].after(div);// после первого элемента hearts вставили элемент div
    
    circles[0].remove();//первый элемент circles был удален из документа
    
    hearts[0].replaceWith(circles[0]);// первый элемент hearts стал на место первого элемента circles при этом элемент circles пропал
    
    div.innerHTML = '<h1>hello World</h1>';// внутри блока div появился текст заголовок 1 hello World,
    div.textContent = '<h1>hello World</h1>';// внутри блока div появился текст "<h1>hello World</h1>"(не работает как Html),
    
    div.insertAdjacentHTML('beforebegin', '<h2>Hello</h2>');// перед элементом div вставить Html код '<h2>Hello</h2>'
    div.insertAdjacentHTML('afterbegin', '<h2>Hello</h2>');// внутрь элемента div вставить Html код '<h2>Hello</h2>' на первом месте(также как с prepend)
    div.insertAdjacentHTML('beforeend', '<h2>Hello</h2>');// внутрь элемента div вставить Html код '<h2>Hello</h2>' на последнем месте(также как с append)
    div.insertAdjacentHTML('afterend', '<h2>Hello</h2>');// после элемента div вставить Html код '<h2>Hello</h2>'
    
    
}




// События и их обработчики

{
    const btn = document.querySelector('button');


btn.addEventListener('click', () => {// при нажатии сообщение Click
alert('Click');
});
btn.addEventListener('click', () => {
alert('second Click');// при нажатии сначала сообщение Click и потом сообщение second Click
});



btn.onclick = function() {// при нажатии сообщение Click
alert('Click');
};

btn.onclick = function() {
alert('second Click');// при нажатии сообщение second Click, первое событие пропадает
};


btn.addEventListener('mouseenter', (e) => {// при навидении сообщение hi
console.log('hi');
});
btn.addEventListener('click', (e) => {// при клике на элемент, элемент удаляется
console.log(e.target);
e.target.remove();

});

const deleteElement = (e) => { //функция которая удаляет элемент
e.target.remove();

};
btn.addEventListener('click', deleteElement, {once: true});// после клика на этот элемент выполняется функция deleteElement, once позволяет только один раз срабатывание функции


const link = document.querySelector('a');//берем ссылку из документа

link.addEventListener('click', (e) => {// при клике 
e.preventDefault();// отменяем стардантное поведение браузера(переходить по ссылке)
console.log(e.target);//выводим в консоль ссылку
});



}


//Навигация по DOM - элементам, data-атрибуты, преимущество for/of


{
    console.log(document.body);//все элементы в теге body
    console.log(document.documentElement);//все элементы Html
    console.log(document.body.childNodes);//все дети в теге body
    console.log(document.body.firstChild);//первый элемент в Body
    console.log(document.body.firstElementChild);//первый элемент без переноса в Body
    console.log(document.body.lastChild);//последний элемент в Body

    console.log(document.querySelector('a').parentNode);//родитель тега а с учетом переноса
    console.log(document.querySelector('a').parentElement.parentElement);//родитель, родителя тега а без учета переноса



}


