import React from 'react';
import './ticket.styles.scss';

function Ticket() {
    return (
        <div className='ticket'>

            <table class="rwd-table">
                <tr>
                    <th>Bus Name</th>
                    <th>Genre</th>
                    <th>Year</th>
                    <th>Gross</th>
                </tr>
                <tr>
                    <td data-th="Movie Title">Chartered Bus</td>
                    <td data-th="Genre">Adventure, Sci-fi</td>
                    <td data-th="Year">1977</td>
                    <td data-th="Gross">$460,935,665</td>
                </tr>
                <tr>
                    <td data-th="Movie Title">Bus Type</td>
                    <td data-th="Genre">"Bus Type"</td>
                    <td data-th="Year">1986</td>
                    <td data-th="Gross">$16,295,774</td>
                </tr>
                <tr>
                    <td data-th="Movie Title">American Graffiti</td>
                    <td data-th="Genre">Comedy, Drama</td>
                    <td data-th="Year">1973</td>
                    <td data-th="Gross">$115,000,000</td>
                </tr>
            </table>
        </div>
    )
};

export default Ticket;