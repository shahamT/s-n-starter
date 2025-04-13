export const utilService = {
    saveToStorage,
    loadFromStorage,
    makeId,
    getRandomIntInclusive,
    randomPastTime,
    getTimeStamp,
    elapsedTime,
    updateQueryParams,
}

function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}

function loadFromStorage(key) {
    const data = localStorage.getItem(key)
    return (data) ? JSON.parse(data) : undefined
}

function makeId(length = 5) {
    var txt = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return txt
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function getTimeStamp() {
    return Date.now()
}

function randomPastTime() {
    const HOUR = 1000 * 60 * 60
    const DAY = 1000 * 60 * 60 * 24
    const WEEK = 1000 * 60 * 60 * 24 * 7

    const pastTime = getRandomIntInclusive(HOUR, WEEK)
    return Date.now() - pastTime
}

function getRandomInRange(from = -180, to = 180, fixed = 3) {
    return +(Math.random() * (to - from) + from).toFixed(fixed)
}

function elapsedTime(pastMs) {
    const now = new Date()
    const secondsPast = Math.round((now - pastMs) / 1000)

    if (secondsPast < 60 * 5) return `just now` 
    
    const minutesPast = Math.floor(secondsPast / 60)
    if (minutesPast < 60) return `last hour` 

    const hoursPast = Math.floor(minutesPast / 60)
    if (hoursPast < 24)  return `today` 

    return `${Math.floor(hoursPast / 24)} days ago`

}

function updateQueryParams(queryParamsObj) {
    var queryParams = `?`
    for (let paramName in queryParamsObj){
        if (queryParamsObj[paramName] !== undefined) {
            queryParams += `${paramName}=${queryParamsObj[paramName]}&`
        }
    }
    queryParams = queryParams.substring(0, queryParams.length-1)
    const newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname + queryParams
    window.history.pushState({ path: newUrl }, '', newUrl)
}