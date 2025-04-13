
// react
const { useRef } = React


// compomemt
export function EmailView({ handleNewEmail }) {
    const titleRef = useRef()
    const contentRef = useRef()



    function onSendEmail() {
        const email = {
            type: 'inbox',
            title: titleRef.current.value,
            content: contentRef.current.value,
            createdAt: Date.now(),
        }

        handleNewEmail(email)
    }

    return <section className="email-container">
        <button className="close-email-btn">X</button>
        <p className="email-type">Draft</p>
        <input ref={titleRef} type="text" className="email-title" placeholder="Subject" />
        <textarea ref={contentRef} className="email-content" placeholder="Your Email"></textarea>
        <button onClick={onSendEmail} className="email-send-btn">Send</button>


    </section>
}