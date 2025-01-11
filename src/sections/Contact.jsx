import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'


const Contact = () => {

    const formRef = useRef();

    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    })

    const handleChange = ({target: {name, value}}) => {
        setForm({...form, [name]: value})
    }
    //service_vrwctvo
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Adaugă email-ul la finalul mesajului
        const updatedMessage = `${form.message}\n\nEmail: ${form.email}`;

        try {
            await emailjs.send(
                'service_vrwctvo',
                'template_92mltst',
                {
                    from_name: form.name,
                    to_name: 'Stanislav',
                    from_email: form.email,
                    to_email: 'stanislavacicanci@gmail.com',
                    message: updatedMessage // Folosește mesajul actualizat
                },
                '1JTlKFbv-5WQvnVa3'
            );

            alert("Your message has been sent!");

            setForm({
                name: '',
                email: '',
                message: '',
            });

            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.log(error);
            alert("Something went wrong!");
        }
    };

    return (
        <section className="c-space my-20" id="contact">
            <div className="relative min-h-screen flex items-center justify-center flex-col">
                <img src="/assets/terminal.png" alt="terminal-bg"
                     className="absolute inset-0 w-[110%] h-[110%] top-0 left-0 transform object-fill"/>

                <div className="contact-container">
                    <h3 className="head-text mt-10">Let's talk</h3>
                    <p className="text-lg text-white-600 mt-3">
                        Whether you’re looking to build a new website, improve your existing platform, or bring a unique
                        project to life, I’m here to help.
                    </p>

                    <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
                        <label className="space-y-3">
                            <span className="field-label">Full Name</span>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="ex., John Doe"
                            />
                        </label>

                        <label className="space-y-3">
                            <span className="field-label">Email address</span>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="ex., johndoe@gmail.com"
                            />
                        </label>

                        <label className="space-y-3">
                            <span className="field-label">Your message</span>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="field-input"
                                placeholder="Share your thoughts or inquiries..."
                            />
                        </label>

                        <button className="field-btn pb-12" type="submit" disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'}

                            <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow"/>
                        </button>
                    </form>
                </div>
            </div>
        </section>

    )
}
export default Contact
