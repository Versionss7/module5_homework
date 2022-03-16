meaning = prompt('Введите число')
if (isNaN(meaning)) { alert ('Упс, кажется, вы ошиблись')}
else if (meaning%2 === 0) { alert ('Четное число')}
else { alert ('Нечетное число')};