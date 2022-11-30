// import ReactDOM from 'react-dom';//для старой версии
import React from 'react';
import {createRoot} from 'react-dom/client'
//import {ThemeProvider, createTheme} from '@material-ui/core';
import {Provider} from "react-redux";
import {store} from "./store/store";
import App from './App';

// const theme = createTheme({
//     palette: {
//         primary: {
//             main: '#77bd1b'
//         },
//         secondary: {
//             main: '#ffffff'
//         }
//     }
// })

const root = createRoot(document.getElementById('root')as HTMLElement)
root.render(
    <React.StrictMode>
        <Provider store={store}>
            {/*<ThemeProvider theme={theme}>*/}
            {/*    */}
            {/*</ThemeProvider>*/}
            <App />
        </Provider>
    </React.StrictMode>
)

// Вмонтирование в root старой версии
// ReactDOM.render(
//     <React.StrictMode>
//         <ThemeProvider theme={theme}>
//             <App />
//         </ThemeProvider>
//     </React.StrictMode>,
//     document.getElementById('root')
// );
