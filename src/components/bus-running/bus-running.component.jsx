import React from 'react';
import './bus-running.styles.scss'


function BusRunning() {
    return (
        <div>
            <div class="main-wrapper">
                <div class="text-title">
                    <h1>Pick n' Move</h1>
                    <p>Awesome way of booking Bus Tickets</p>
                </div>
                <div class="bus-wrapper">
                    <div class="window-section">
                        <div class="window-glass">
                            <div class="glass-inner">
                                <div class="seats"></div>
                            </div>
                        </div>
                        <div class="window-glass">
                            <div class="glass-inner">
                                <div class="seats first"></div>
                                <div class="seats second"></div>
                            </div>
                        </div>
                        <div class="window-glass">
                            <div class="glass-inner">
                                <div class="seats first"></div>
                                <div class="seats second"></div>
                            </div>
                        </div>
                        <div class="window-glass">
                            <div class="glass-inner">
                                <div class="seats first"></div>
                                <div class="seats second"></div>
                            </div>
                        </div>
                        <div class="window-glass">
                            <div class="glass-inner">
                                <div class="seats first"></div>
                                <div class="seats second"></div>
                            </div>
                        </div>
                        <div class="window-glass">
                            <div class="glass-inner">
                                <div class="seats first"></div>
                                <div class="seats second"></div>
                            </div>
                        </div>
                    </div>
                    <div class="driver-section">
                        <div class="window-glass">
                            <div class="glass-inner">
                                <div class="handle"></div>
                            </div>
                        </div>
                    </div>
                    <div class="headlight-wrap">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div class="door-lower">
                        <div class="dot1"></div>
                        <div class="dot2"></div>
                    </div>
                    <div class="lower-shape"></div>
                    <div class="sticker-wrap">
                        <img alt='' src={'https://res.cloudinary.com/dyquku6bs/image/upload/v1463656641/sajhabus_gdifyx.png'} />
                    </div>
                    <div class="border-wrap">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div class="tyres-wrapper">
                        <div class="tyres-content">
                            <div class="tyres">
                                <div class="rim-section">
                                    <div class="stripe"></div>
                                </div>
                            </div>
                        </div>
                        <div class="tyres-content">
                            <div class="tyres">
                                <div class="rim-section">
                                    <div class="stripe"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="lights-wrap">
                        <div class="lights-1"></div>
                        <div class="lights lights-2"></div>
                        <div class="lights lights-3"></div>
                        <div class="lights lights-4"></div>
                        <div class="lights lights-5"></div>
                    </div>
                    <div class="square-1"></div>
                    <div class="square-2">
                        <div></div>
                    </div>
                    <div class="square-3">
                        <div></div>
                    </div>
                </div>
                <div class="shadow"></div>
                <div class="road">
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                </div>
            </div>
        </div>
    )
};

export default BusRunning;