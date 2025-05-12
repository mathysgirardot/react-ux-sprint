import React from 'react';
import './styles/BookingButton.css';

function BookingButton() {
  const handleBookingClick = () => {
    window.location.href =
      'https://calendar.google.com/calendar/u/0/r/eventedit?text=Cours%20avec%20Antony&details=Rendez-vous%20avec%20Antony%2C%20expert%20en%20développement%20web.%20Profitez%20d%27un%20cours%20offert%20pour%20commencer%20!&location=Paris%2019e';
  };

  return (
    <div className="prof-booking">
      <h3>Prendre rendez-vous avec le professeur</h3>
      <button className="booking-btn" onClick={handleBookingClick}>
        Réservez votre créneau sur Google Calendar
      </button>
    </div>
  );
}

export default BookingButton;
