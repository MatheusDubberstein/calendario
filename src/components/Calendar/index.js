import React, { useState } from 'react';

import {
  getDaysInMonth,
  format,
  startOfMonth,
  subDays,
  addDays,
  endOfMonth,
} from 'date-fns';
export default function Calendario() {
  const [week] = useState([
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ]);
  const [mouthNow] = useState(new Date());

  return (
    <div>
      <div>
        Maio 2021
        <button>{'<'}</button>
        <button>{'>'}</button>
        <small className="grid grid-cols-7">
          {week.map((weekDay) => (
            <p>{weekDay}</p>
          ))}
        </small>
      </div>
      <div className="grid grid-cols-7 ">
        {Array.from(
          { length: format(startOfMonth(mouthNow), 'e') - 1 },
          (_, i) => format(startOfMonth(mouthNow), 'e') - (i + 1)
        ).map((subtractDay) => (
          <div className="bg-blueGray-100 border text-blueGray-300 cursor-not-allowed border-blueGray-100 h-32">
            {format(subDays(startOfMonth(mouthNow), subtractDay), 'd')}
          </div>
        ))}
        {Array.from({ length: getDaysInMonth(mouthNow) }, (_, i) => i + 1).map(
          (day) => (
            <div className="bg-blueGray-50 border border-blueGray-200 h-32">
              {day}
            </div>
          )
        )}
        {Array.from(
          { length: 7 - format(endOfMonth(mouthNow), 'e') },
          (_, i) => i + 1
        ).map((addDay) => (
          <div className="bg-blueGray-100 border text-blueGray-300 cursor-not-allowed border-blueGray-100 h-32">
            {format(addDays(endOfMonth(mouthNow), addDay), 'd')}
          </div>
        ))}
      </div>
    </div>
  );
}
