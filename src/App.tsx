import React from 'react';
import './App.css';
import Accordion1  from "./components/Accordion/Accordion";
import {Accordion2}  from "./components/Accordion/Accordion";
import {Raiting} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";



function hello() {
    alert("hello IT-ramasutra")
}

// hello()

const App = () => {
    return (
        <div>
            {/*<PageTitle title ={"This is App component"}/>*/}
            Article 1
            {/*<Raiting value={3} />*/}
            {/*<Accordion1 titleValue={"Menu"} collapsedMenu={true}/>*/}
            {/*<Accordion1 titleValue={"Users"} collapsedMenu={false}/>*/}
            {/*<Accordion2 titleValue={"Menu"} collapsedMenu={true}/>*/}
            {/*<Accordion2 titleValue={"Users"} collapsedMenu={false}/>*/}
            Article 2
            {/*<Raiting value={0} />*/}
            {/*<Raiting value={1} />*/}
            {/*<Raiting value={2} />*/}
            {/*<Raiting value={3} />*/}
            {/*<Raiting value={4} />*/}
            {/*<Raiting value={5} />*/}
            <OnOff />
        </div>

    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType ) {
    return <h1>{props.title}</h1>
}



export default App;
