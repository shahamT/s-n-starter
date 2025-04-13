//react fncs
const { useState, useEffect } = React

// services
import { emailService } from "./services/email.service.js";

// childrens compomnents
import { EmailsList } from "./cmps/EmailsList.jsx";
import { EmailView } from "./cmps/EmailsView.jsx";
import { MainHeader } from "./cmps/MainHeader.jsx";

//component
export function RootCmp() {
    // states & refs
    const [route, setRoute] = useState('EmailsList')

    // effectes
    useEffect(() => {
    }, [route])




    // functions
    function onNewEmail() {
        setRoute('EmailView')
    }

    function handleNewEmail(email) {
        emailService.post(email)
            .then(() => {
                setRoute('EmailsList')
            })
    }


    return <section className="app">

        {<MainHeader onNewEmail={onNewEmail} />}

        <main>

            {route === 'EmailsList' && <EmailsList />}
            {route === 'EmailView' && <EmailView handleNewEmail={handleNewEmail} />}

        </main>

    </section>
}