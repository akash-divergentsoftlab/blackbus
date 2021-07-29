import React from 'react';
import './home.page.styles.scss';

import BookingForm from './../../components/booking-form/booking-form.component';
import BusRunning from './../../components/bus-running/bus-running.component';





function HomePage() {


  return (
    <div className="container">
        <BusRunning />
      <div className="container">
        <img src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnVzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="Snow" style={{ width: '100%' }} />
        <div className="centered"></div>
        <BookingForm />
      </div>






    </div>
  );
}

export default HomePage;