const lang = prompt('');


switch (lang) {
  case 'en':
    console.log('Monday');
    console.log('Tuesday');
    console.log('Wednesday');
    console.log('Thursday');
    console.log('Friday');
    console.log('Saturday');
    console.log('Sunday');
    break;
  case 'ru':
    console.log('Понедельник');
    console.log('Вторник');
    console.log('Среда');
    console.log('Четверг');
    console.log('Пятница');
    console.log('Суббота');
    console.log('Восскресенье');
    break;
  default:
    console.log('Введите язык какого хотите - en или ru.');
    break;
}



const namePerson = prompt('Введите имя');

let role = (namePerson === 'Артем') ? 'Директор' :
            (namePerson === 'Александр') ? 'Преподаватель' :
            'Студент';
console.log(role);