import React from 'react';
import logo from './logo.svg';
import './App.css';


function hello() {
    alert("hello IT-ramasutra")
}

hello()

const App = () => {
    return (
        <div>
            <AppTitle />
            <Raiting/>
            <Accordion/>
            <Raiting/>
        </div>

    );
}

function AppTitle() {
    return <>"Hello world"</>
}

const Raiting = () => {
    return (
        <div>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
        </div>

    )
}

const Accordion = () => {
    return (
        <div>
            <AccordionTite />
          <AccordionBody />
        </div>

    )
}
const AccordionTite = () => {
    return (
            <h3>меню</h3>
    )
}

const AccordionBody = () => {
    return (
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
    )
}
const Star = () => {
    return (
        <div>
            Star
        </div>

    )
}

export default App;
