// import ReactDOM from 'react-dom';//для старой версии
import React from 'react';
import {Provider} from "react-redux";
import {BrowserRouter} from 'react-router-dom'
import {store} from "./store/store";
import {createRoot} from 'react-dom/client'
import App from './App';

const root = createRoot(document.getElementById('root')as HTMLElement)
root.render(
    <React.StrictMode>
        <Provider store={store} >
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
)

