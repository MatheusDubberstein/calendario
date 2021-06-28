import React from 'react';
import { getDaysInMonth } from 'date-fns';

export default function Mounth() {
  return <div>{Array.from({ length: getDaysInMonth(new Date()) })}</div>;
}
