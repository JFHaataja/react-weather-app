import React, { useState, useEffect } from 'react';

const CurrentDateDisplay = () => {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const today = new Date();

    const daysOfWeek = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];

    const dayOfWeek = daysOfWeek[today.getDay()];

    const dayOfMonth = today.getDate();
    const daySuffix = getDaySuffix(dayOfMonth);

    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    const month = months[today.getMonth()];
    const year = today.getFullYear();

    const formattedDate = `${dayOfWeek}, ${dayOfMonth}${daySuffix} of ${month}, ${year}`;

    setCurrentDate(formattedDate);
  }, []);

  // Function to get the day suffix (st, nd, rd, or th)
  const getDaySuffix = (day) => {
    if (day >= 11 && day <= 13) {
      return 'th';
    }

    switch (day % 10) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  };

  return (
    <div>
      <p className="date-text">{currentDate}</p>
    </div>
  );
};

export default CurrentDateDisplay;
