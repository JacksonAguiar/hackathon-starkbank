import { createRoot } from 'react-dom/client'
import '../presentation/styles/index.css'
import Router from './routes/router'

createRoot(document.getElementById('root')!).render(
    <Router />
)
