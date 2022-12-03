import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Raiting} from "./components/Rating/Rating";


function hello() {
    alert("hello IT-ramasutra")
}

// hello()

const App = () => {
    return (
        <div>
            <PageTitle title ={"This is App component"}/>
            Article 1
            <Raiting value={3} />
            <Accordion title={"Accordion"}/>
            <Accordion title={"AccordionTite"}/>
            Article 2
            <Raiting value={0} />
            <Raiting value={1} />
            <Raiting value={2} />
            <Raiting value={3} />
            <Raiting value={4} />
            <Raiting value={5} />
        </div>

    );
}

function PageTitle(props: any) {
    return <h1>{props.title}</h1>
}



export default App;
