import React from 'react'
import { createRoot } from 'react-dom'
import App from './App'
const rootEl = document.getElementById('root')
if (!rootEl) throw new Error("cant find root element")
const root = createRoot(rootEl)
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)