

export function EmailView(){

    return <section className="email-container">
        <button className="close-email-btn">X</button>
        <p className="email-type">Draft</p>
        <input type="text" className="email-title" placeholder="Subject" />
        <textarea className="email-content" placeholder="Your Email"></textarea>
        <button className="email-send-btn">Send</button>


    </section>
}