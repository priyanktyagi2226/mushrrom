
import React from "react";
import { useForm } from "react-hook-form";
import { send } from 'emailjs-com';
const ContactForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [toSend, setToSend] = React.useState({
        name: '',
        toName: 'Priyank Tyagi',
        email: '',
        mobile:"",
        subject: '',
    });

    const [showThankyou, setShowThankyou] = React.useState(false);
    const onSubmit = (data, e) => {
        e.target.reset();
        console.log("Message submited: " + JSON.stringify(data));
        send(
            'service_goxexgn',
            'template_y1kx84f',
            toSend,
            'user_5Cy3sU3R5q0OhgX9aDUuK'
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setShowThankyou(true);
                setTimeout(function () {
                    window.location.replace('/');
                }, 5000);
            })
            .catch((err) => {
                console.log('FAILED...', err);
            });
    };
    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };
    return (
        <>
            {showThankyou &&
                <div className="thankyou-message">
                    <div>
                        <p>Thankyou for your message , <b>Priyank Tyagi</b> will contact you soon...</p>
                    </div>

                </div>
            }
            <section className="contact-section">
                <div className="container">
                    <div className="text-center contact-title">
                        <h2>Get in touch</h2>
                    </div>
                    <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
                        <div className="row">
                            <div className="col-lg-6">
                                <input
                                    {...register("name", { required: true })}
                                    type="text"
                                    placeholder="Name"
                                    value={toSend.name}
                                    onChange={handleChange}
                                />
                                {errors.name && errors.name.type === "required" && (
                                    <span className="error">Name is required</span>
                                )}
                            </div>
                            <div className="col-lg-6">
                                <input
                                    {...register(
                                        "email",
                                        {
                                            required: "Email is Required",
                                            pattern: {
                                                value: /\S+@\S+\.\S+/,
                                                message: "Entered value does not match email format",
                                            },
                                        },
                                        { required: true }
                                    )}
                                    type="email"
                                    placeholder="Email"
                                    value={toSend.email}
                                    onChange={handleChange}
                                />
                                {errors.email && <span role="alert" className="error">{errors.email.message}</span>}
                            </div>
                            <div className="col-lg-12">
                                <input
                                    {...register("mobile", { required: true })}
                                    type="text"
                                    placeholder="Mobile Number"
                                    value={toSend.mobile}
                                    onChange={handleChange}
                                />
                                {errors.mobile && errors.mobile.type === "required" && (
                                    <span className="error">Mobile Number is required</span>
                                )}
                            </div>
                            <div className="col-lg-12">
                                <textarea
                                    {...register("subject", { required: true })}
                                    placeholder="Message"
                                    value={toSend.subject}
                                    onChange={handleChange}
                                ></textarea>
                                {errors.subject && <span className="error">Subject is required.</span>}
                            </div>
                            <div className="col-lg-12">

                                <div className="text-center">
                                    <button button type="submit" className="site-btn">Send</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>


            <div className="contact-info-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="contact-info-box">
                                <img src="/img/logo.jpg" alt="image" style={{ height: "90px" }} />
                                <ul>
                                    <li><span>Address:</span>Main Str, no 23, New York</li>
                                    <li><span>Phone:</span>+546 990221 123</li>
                                    <li><span>Mail:</span><a href="" className="__cf_email__" ></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mapouter">
                    <div className="gmap_canvas">
                        <iframe width="100%" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=746%20sector%206&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactForm;