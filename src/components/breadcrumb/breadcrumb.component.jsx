import React from 'react';
import './breadcrumb.styles.scss';

function BreadCrumb() {
    return (
        <div className='breadcrumb'>
            <ul className="breadcrumb">
                <li><a href="/#">Home </a></li>
                <li><a href="/#">Pictures </a></li>
                <li><a href="/#">Summer 15 </a></li>
                <li>Italy</li>
            </ul>
            <hr />
        </div>
    )
};

export default BreadCrumb;