
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
export const emailService = {

    query,
    remove,
    getById,
    put,
    post,
}

const DB_EMAILS_KEY = 'emails'

_createEmails()


function query(queryParams) {
    return storageService.query(DB_EMAILS_KEY)
        .then(emails => {
            if (!queryParams) return emails

            if (queryParams.type) {
                emails = emails.filter(email => {
                    return queryParams.type.includes(email.type)
                })
            }
            if (queryParams.search) {
                const regex = new RegExp(queryParams.search, 'i')
                emails = emails.filter(email => {
                    return regex.test(email.title) || regex.test(email.content)
                })
            }

            return emails
        })
}

function remove(id) {
    if (!id) return
    return storageService.remove(DB_EMAILS_KEY, id)
}

function put(email) {
    if (email.id) {
        return storageService.put(DB_EMAILS_KEY, email)

    }
}

function post(email) {
    storageService.post(DB_EMAILS_KEY, email)
        .then(() => storageService.query(DB_EMAILS_KEY))


}

function getById(id) {
    return storageService.get(DB_EMAILS_KEY, id)
}

function _createDemoEmails() {
    return [
        {
            id: utilService.makeId(4),
            type: 'inbox',
            title: 'first cheack',
            content: '',
            createAt: Date.now(),
        },
        {
            id: utilService.makeId(4),
            type: 'sent',
            title: 'Welcom',
            content: '',
            createAt: Date.now(),
        },
        {
            id: utilService.makeId(4),
            type: 'inbox',
            title: 'password',
            content: '',
            createAt: Date.now(),
        },
    ]


}

function _createEmails() {
    if (!utilService.loadFromStorage(DB_EMAILS_KEY) || utilService.loadFromStorage(DB_EMAILS_KEY).lentgh === 0) {
        const emails = _createDemoEmails()
        utilService.saveToStorage(DB_EMAILS_KEY, emails)
    }


}
