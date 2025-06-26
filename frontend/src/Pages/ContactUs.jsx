import React from "react";
import Headandfoot from "./../Layout/Headandfoot";
import "../Styles/Contact.css";

const ContactUs = () => {
  return (
    <Headandfoot>
      <div className="contact-page">

        {/* <div className="banner position-relative">
          <img
            src="/contact-banner.jpg"
            alt="Contact Us Banner"
            className="img-fluid w-100"
          />
          <div className="banner-text position-absolute top-50 start-50 translate-middle text-white">
            <h1 className="text-white">Contact Us</h1>
          </div>
        </div> */}

        <div className="text-center m-4">
          <h1>Get in Touch</h1>
        </div>

        <div className="container">
          <div className="row align-items-center">
            
            <div className="col-md-6">
              <p>
                Have questions or need assistance? We are here to help! Whether
                you’re looking for information, support, or simply want to say
                hello, our team is eager to connect with you.
              </p>
              <p>
                Use the form to send us a message, and we’ll get
                back to you as soon as possible. Your queries and feedback are
                valuable to us, and we strive to provide the best support
                experience.
              </p>
              <p>
                Prefer other ways to reach us? call us at
                <strong> 041-2422722</strong>. We look forward to hearing from
                you!
              </p>
            </div>

            <div className="col-md-6 mb-4">
              <div className="form-container p-4">
                <form>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      id="message"
                      rows="5"
                      placeholder="Enter your message"
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary w-100">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Headandfoot>
  );
};

export default ContactUs;
