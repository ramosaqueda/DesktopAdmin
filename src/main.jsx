import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';

import App from './App'



const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
    <StrictMode>
        
            
                <App />
             
         
    </StrictMode>
);