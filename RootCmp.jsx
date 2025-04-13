

//react fncs
// const { useState } = React

import { EmailsList } from "./cmps/EmailsList.jsx";

// childrens compomnents

//component
export function RootCmp() {
    // const [ route, setRoute ] = useState('page1')


    return <section className="app">

        <header>

            <h1>Email</h1>

        </header>

        <main>

            { <EmailsList /> }

        </main>

    </section>
}