import { StrictMode } from 'react'              // trae la herramienta modo estricto, avisa si se usa codigo antoguo o errores de logica
import { createRoot } from 'react-dom/client'   // busca el arvhivo index.html el id que tenga root y dentro dibuja la app
import './index.css'                            
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
