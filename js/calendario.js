/* JS - CALENDARIO */

document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendario');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      plugins: ['dayGrid'],
      locale: 'es',
      events: [
            {
                title: 'HTML & CSS',
                start: '2023-06-28',
                end:'2023-07-29'
            },
            {
                title: 'Javascript',
                start: '2023-07-15',
                end:'2023-08-30'
            },
            {
                title: 'Java',
                start: '2023-09-07',
                end:'2023-11-29'
            },
            {
                title: 'Python',
                start: '2024-01-03',
                end:'2024-08-25'
            },
            {
                title: 'Selenium',
                start: '2023-11-01',
                end:'2024-01-03'
            },
            {
                title: 'Diseño UX/UI',
                start: '2023-12-15',
                end:'2024-04-30'
            }
        ]
    }); 

    calendar.render();
  });
