import './contact.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_khcz4zm', 'template_9lzvp6j', form.current, {publicKey: 'DpAPCIwfvrJsC0PCv',})
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="bg-info contact4 overflow-hiddedn position-relative">
      <div className="row no-gutters">
        <div className="container">
          <div className="col-lg-6 contact-box mb-4 mb-md-0">
            <div className="">
                <h1 className="title font-weight-light text-white mt-2">Contact Us</h1>
                <form className="mt-3"  ref={form} onSubmit={sendEmail}>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="form-group mt-2">
                        <input className="form-control text-white" type="text" name="from_name" placeholder="name" autoComplete='off' />
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="form-group mt-2">
                          <input className="form-control text-white" type="email" name="user_email" autoComplete='off' placeholder="email address" />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group mt-2">
                          <textarea className="form-control text-white" name="message" rows="3" autoComplete='off' placeholder="message" />
                        </div>
                      </div>
                      <div className="col-lg-12 d-flex align-items-center mt-2">
                        <input type="submit" value="Send" className="btn bg-white text-inverse px-3 py-2" />
                      </div>
                    </div>
                </form>
            </div>
          </div>
        </div>
        <div className="col-lg-6 right-image p-r-0">
          <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3193.8679871726617!2d10.1816547!3d36.821683199999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzbCsDQ5JzE4LjEiTiAxMMKwMTAnNTQuMCJF!5e0!3m2!1sfr!2stn!4v1716054276608!5m2!1sfr!2stn"
            width="100%" height="520" frameborder="0" style={{ border: 0 }} allowfullscreen data-aos="fade-left" data-aos-duration="3000" />
        </div>
      </div>
    </div>
  );
};
