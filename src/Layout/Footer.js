import React from 'react';
import './Footer.css';

class Footer extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <h4>Branch & R.Office</h4>
          </div>
        </div>
        <hr />
        <div className='row' style={{ marginBottom: 20 }}>
          <div className='col-12'>
            <h5>HEAD OFFICE</h5>
            <p>
              190 Pasteur, Vo Thi Sau Ward, District 3, Ho Chi Minh City,
              Vietnam
              <br />
              Tel: <b>(84-28) 38 668 999 (20 lines)</b>
              <br />
              Fax: <b>(84-28) 38 29 9142</b>
              <br />
              Email: <a href='info@vietravel.com'>info@vietravel.com</a>
            </p>
          </div>
        </div>
        <div className='row' style={{ marginBottom: 30 }}>
          <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12'>
            <h6>THANH HOA BRANCH</h6>
            <p>
              190 Pasteur, Vo Thi Sau Ward, District 3, Ho Chi Minh City,
              Vietnam
              <br />
              Tel: <b>(84-28) 38 668 999 (20 lines)</b>
              <br />
              Fax: <b>(84-28) 38 29 9142</b>
              <br />
              Email: <a href='info@vietravel.com'>info@vietravel.com</a>
            </p>
          </div>
          <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12'>
            <h6>QUANG NINH BRANCH</h6>
            <p>
              190 Pasteur, Vo Thi Sau Ward, District 3, Ho Chi Minh City,
              Vietnam
              <br />
              Tel: <b>(84-28) 38 668 999 (20 lines)</b>
              <br />
              Fax: <b>(84-28) 38 29 9142</b>
              <br />
              Email: <a href='info@vietravel.com'>info@vietravel.com</a>
            </p>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12'>
            <h6>HA NOI BRANCH</h6>
            <p>
              190 Pasteur, Vo Thi Sau Ward, District 3, Ho Chi Minh City,
              Vietnam
              <br />
              Tel: <b>(84-28) 38 668 999 (20 lines)</b>
              <br />
              Fax: <b>(84-28) 38 29 9142</b>
              <br />
              Email: <a href='info@vietravel.com'>info@vietravel.com</a>
            </p>
          </div>
          <div className='col-lg-6 col-md-64 col-sm-6 col-xs-12'>
            <h6>HAI PHONG BRANCH</h6>
            <p>
              190 Pasteur, Vo Thi Sau Ward, District 3, Ho Chi Minh City,
              Vietnam
              <br />
              Tel: <b>(84-28) 38 668 999 (20 lines)</b>
              <br />
              Fax: <b>(84-28) 38 29 9142</b>
              <br />
              Email: <a href='info@vietravel.com'>info@vietravel.com</a>
            </p>
          </div>
          <div>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14899.340995624694!2d105.80116052617404!3d20.99924023278915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab707425a6bf%3A0x30e3fbe8807d2633!2sFortuna%20Hotel%20Hanoi!5e0!3m2!1svi!2s!4v1658303728996!5m2!1svi!2s'
              style={{ border: 0 }}
              allowfullscreen=''
              loading='lazy'
              className='map-position'
              referrerpolicy='no-referrer-when-downgrade'
            />
          </div>
        </div>

        <hr />

        <div className='row'>
          <p style={{ fontSize: 10 }}>
            Copyright © 2022 Trường Đại học PHENIKAA
          </p>
        </div>
      </div>
    );
  }
}

export default Footer;
