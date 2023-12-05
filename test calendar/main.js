// Получаем элементы формы и списка событий
const eventForm = document.getElementById('event-form');
const eventsList = document.getElementById('events-list');

// Создаем массив для хранения событий
let events = [];

// Функция для добавления нового события
function addEvent(event) {
  // Добавляем событие в массив
  events.push(event);
  // Очищаем форму
  eventForm.reset();
  // Обновляем список событий на странице
  updateEventsList();
};

// Функция для обновления списка событий на странице
function updateEventsList() {
  // Очищаем список событий
  eventsList.innerHTML = '';
  // Добавляем каждое событие в список
  events.forEach(event => {
    const li = document.createElement('li');
    const date = new Date(event.date);
    const time = event.time.split(':');
    date.setHours(time[0], time[1]);
    const dateString = date.toLocaleString('ru-RU', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    const timeString = date.toLocaleTimeString('ru-RU', { hour: 'numeric', minute: 'numeric' });
    li.innerHTML = '${dateString}, ${timeString}: ${event.description}';
    eventsList.appendChild(li);
  });
};

// Обработчик отправки формы
eventForm.addEventListener('submit', e => {
  e.preventDefault();
  const eventDate = e.target.elements['event-date'].value;
  const eventTime = e.target.elements['event-time'].value;
  const eventDescription = e.target.elements['event-description'].value;
  const event = { date: eventDate, time: eventTime, description: eventDescription };
  addEvent(event);
});