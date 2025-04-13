import { utilService } from "../services/util.service.js"


export function EmailRow({ title, type, createdAt }) {

function setElapsedTime(timeStamp){
    console.log("timeStamp: ", timeStamp)
    return utilService.elapsedTime(timeStamp)
}


    return <article className="email-row">
        <p className="email-type">{type}</p>
        <p className="email-title">{title}</p>
        <p className="email-created-at">{setElapsedTime(createdAt)}</p>
    </article>
}