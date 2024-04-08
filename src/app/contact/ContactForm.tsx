"use client";
import { useState, useEffect } from "react";
import "./contactForm.css";
// import emailjs from '@emailjs/browser';
// import { FcCheckmark } from "react-icons/fc"
import { Rubik_Mono_One } from "next/font/google";
import { useRouter } from "next/navigation";

const rubikMono = Rubik_Mono_One({ subsets: ["latin"], weight: "400" });

export default function ContactForm(props: any) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hideModal, setHideModal] = useState(false);

  const router = useRouter();
  const closeModal = () => {
    // props.handleClick();
    router.push("/");
    setIsSubmitted(false);
  };

  useEffect(() => {
    if (isSubmitted) {
      setTimeout(closeModal, 1500);
    }
  }, [isSubmitted]);

  function handleChange(event: any) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  function handleSubmit(event: any) {
    event.preventDefault();

    setIsSubmitted((isSubmitted) => !isSubmitted);

    // emailjs.send('service_8fazobs', 'template_w9qxetc', formData, 'miwx_qM7Txj9DyXRr')
    // .then((result) => {
    //     console.log(result.text);
    // }, (error) => {
    //     console.log(error.text);
    // });
  }

  return (
    <div className="contactForm" id="contact">
      <div className="modal-background" onClick={closeModal}></div>

      <div className="contact-wrapper">
        <div className="contactForm-text-wrapper">
          <p className="heading">Contact Us</p>
          <p className="content">
            Interested in working with us? <br />
            Get in touch with this form and we'll get back to you as soon as
            possible.
          </p>
        </div>

        {isSubmitted ? (
          <div className="thank-you">
            {/* <FcCheckmark className="check" /> */}
            <div className="circle-loader">
              <div className="checkmark draw"></div>
            </div>
            <p className="heading ta-center">Message Received!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="form-wrapper">
            <div className="input-wrapper">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={40}
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <button className="btn">Submit</button>
          </form>
        )}
      </div>
    </div>
  );
}
