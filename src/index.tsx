import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



let a =
    {
    name: "Aleks",
    age: 34,
    address: {
        city: "Mogilev",
        country: "Belarus",
    }
}

let users = [
    {
        name: "Aleks",
        age: 34,
        address: {
            city: "Mogilev",
            country: "Belarus",
        }
    },
    {
        name: "Vasa",
        age: 30,
        address: {
            city: "Mogilev",
            country: "Belarus",
        }
    }
]

let b: Array<number>
b = [1, 2, 3]

let c: Array<number | string>
c = [1, 3, "jghvk", "jhjlh"]

console.log(users[0].address.country)
