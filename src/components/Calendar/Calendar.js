import React, { useState } from 'react';
import Calendar from 'react-calendar';

function Calender(){
    const [calDate, setCalDate] = useState(new Date())

  function onChange (calDate) {
    // change results based on calendar date click
    setCalDate(calDate)
}


return (
    <div className="result-calendar">
        <Calendar onChange={onChange} value={calDate} />
    </div>
)
}
export default Calender;