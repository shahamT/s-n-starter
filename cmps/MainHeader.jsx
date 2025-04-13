

export function MainHeader({onNewEmail}) {

    return <header>
        
        <h1>Email</h1>
        <button onClick={onNewEmail} className="new-email-btn">New Email</button>

    </header>
}