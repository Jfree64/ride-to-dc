import React from 'react';

import './index.scss';

export const Donate = () => {
  return(
    <div className='donate page' >
        <h1 className=''>help support THE CAUSE </h1>
        <iframe title='donation form' src="https://givebutter.com/embed/c/ridetodc" width="100%" height="615px" style={{maxWidth: "601px"}} name="givebutter" frameBorder="0" scrolling="no" seamless allowpaymentrequest="true"></iframe><script src="https://givebutter.com/js/widget.js"></script>
    </div>
    )
}