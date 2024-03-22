import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import SideMenu from './components/SideMenu.jsx'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='app'>
      <SideMenu />
      <App />
    </div>
  </React.StrictMode>
)

