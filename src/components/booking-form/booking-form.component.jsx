import React from 'react';
import './booking-form.styles.scss';
import Autocomplete from './../autocomplete/autocomplete.component';
import Cities from './../../pages/homepage/cities_data';



function BookingForm() {
    const ProgLang = Cities;
    return (
        <div className='booking-form'>
            <div id="form-main">
                <div id="form-div">
                    <form className="form" id="form1">

                        <div className="name">

                            <Autocomplete lang={ProgLang} name="name" type="text" className="validate[required,custom[onlyLetter],length[0,100]] feedback-input" placeholder="From: " id="name" />


                        </div>
                        <div className="email">
                            <Autocomplete lang={ProgLang} name="email" type="text" className="validate[required,custom[email]] feedback-input" id="email" placeholder="To: " />
                        </div>
                        <div className="text">
                            <input name="text" type='date' className="validate[required,length[6,300]] feedback-input" id="comment" placeholder="Date" />
                        </div>
                        <div className="submit">
                            <input type="submit" value="Search Tickets" id="button-blue" />
                            <div className="ease"></div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};


export default BookingForm;