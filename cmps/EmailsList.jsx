// react
const { useState, useEffect } = React

// services
import { emailService } from "../services/email.service.js";

// childrens
import { EmailRow } from "./EmailRow.jsx";


export function EmailsList() {
    const [emails, setEmails] = useState(null)

    useEffect(() => {
        emailService.query()
        .then(emails => {
            setEmails(emails)
    })
        

    }, [])

    return <section className="emails-list">
        {emails && emails.map(email => {
            return <EmailRow key={email.id} title={email.title} type={email.type} createdAt={email.createdAt}/>})
            }
           

    </section>
}

