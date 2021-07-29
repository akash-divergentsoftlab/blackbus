import React from 'react';
import './ticket-container.styles.scss';
import Ticket from './../ticket/ticket.component';

function TicketContainer() {
    return (
        <div className='ticket-container'>
            <Ticket />
            <Ticket />
            <Ticket />
            <Ticket />
            <Ticket />
            <Ticket />
        </div>
    )
};

export default TicketContainer;