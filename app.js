import { RootCmp } from './RootCmp.jsx'
import { emailService } from './services/email.service.js'

const elContainer = document.getElementById('root')
const root = ReactDOM.createRoot(elContainer)
root.render(<RootCmp />)
