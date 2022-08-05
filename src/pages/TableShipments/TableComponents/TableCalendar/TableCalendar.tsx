import classNames from 'classnames';
import { useState } from 'react';

import "./TableCalendar.css";

function TableCalendar() {
  const [activeCells, setActiveCells]: any = useState({
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: [],
  });

  const weekdays: any = {
    monday: 'Пн',
    tuesday: 'Вт',
    wednesday: 'Ср',
    thursday: 'Чт',
    friday: 'Пт',
    saturday: 'Сб',
    sunday: 'Вс',
  };

  const hours = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23,
  ];


  console.log('activeCells', activeCells);

  function toggleCell(cell : any) {
    // Достаем час и день недели из ячейки
    const { hour, weekday } = cell.dataset;

    // Будем хранить hour в состоянии как число, "23" => 23
    const parsedHour = Number(hour);

    setActiveCells((prevState : any) => ({
      ...prevState,
      // Если час уже был выделен, удаляем его, иначе добавляем в состояние
      [weekday]: prevState[weekday].includes(parsedHour)
        ? prevState[weekday].filter((item : any) => item !== parsedHour)
        : prevState[weekday].concat(parsedHour),
    }));
  }

  function onMouseDown(event : any) {
    event.preventDefault();

    toggleCell(event.currentTarget);
  }

  function onMouseOver(event : any) {
    // Если зажата левая кнопка мыши
    if (event.buttons === 1) {
      event.preventDefault();

      toggleCell(event.currentTarget);
    }
  }


  return (
    <table className="schedule-table">
      <thead>
        <tr>
          <th />
          {hours.map((hour) => (
            <th
              key={hour}
              className="schedule-table__th schedule-table__th_time"
            >
              {hour}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {Object.keys(weekdays).map((weekday) => (
          <tr key={weekday}>
            <th className="schedule-table__th schedule-table__th_weekday">
              {weekdays[weekday]}
            </th>

            {hours.map((hour) => (
              <td key={hour} className="schedule-table__td">
                <button
                  type="button"
                  className={classNames('schedule-table__btn', {
                    'schedule-table__btn_active':
                      activeCells[weekday].includes(hour),
                  })}
                  data-hour={hour}
                  data-weekday={weekday}
                  onMouseDown={onMouseDown}
                  onMouseOver={onMouseOver}
                />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableCalendar;