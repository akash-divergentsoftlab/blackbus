import React from 'react';
import BreadCrumb from '../../components/breadcrumb/breadcrumb.component';
import './busticket.styles.scss';
import TicketContainer from './../../components/ticket-container/ticket-container.component';


function BusTicketPage() {
    return (
        <div>
            <BreadCrumb />
            <h1>Available Buses are:</h1>
            <TicketContainer />
        </div>
    )
};

export default BusTicketPage;