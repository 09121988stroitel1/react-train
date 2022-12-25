import React, {useState} from 'react';
import './App.css';
import Accordion1 from "./components/Accordion/Accordion";
// import {Accordion2}  from "./components/Accordion/Accordion";
import {Raiting, RaitingValueType} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import UnControledOnOff from "./components/UseState/UnControledOnOff";
import UnControlAccordion from "./components/UnControlAccordion/UnControlAccordion";
import {UnControlledRaiting} from "./components/UnControlRating/UnControledRating";
import ControledOnOff from './components/UseState/ControledOnOff';

const App = () => {
    let [rautingValue, setRaitegValue] = useState<RaitingValueType>(1)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [OnOffControlled, setOnOffControlled] = useState<boolean>(false)
// console.log(accordionCollapsed)

    return (

        <div className={"app"}>
            {/*<UnControlAccordion titleValue={"Users"}/>*/}
            {/*<UnControlAccordion titleValue={"Menu"} />*/}
            {/*<UnControlledRaiting/>*/}
            {/*<PageTitle title ={"This is App component"}/>*/}
            {/*Article 1*/}
            {/*<Raiting value={3} />*/}
            <Accordion1
                titleValue={"Menu"}
                collapsedMenu={() => {
                    setAccordionCollapsed(!accordionCollapsed)
                }}
                accordionCollapsed={accordionCollapsed}

            />

            {/*<Accordion1 titleValue={"Users"} collapsedMenu={false}/>*/}
            {/*<Accordion2 titleValue={"Menu"} collapsedMenu={true}/>*/}
            {/*<Accordion2 titleValue={"Users"} collapsedMenu={false}/>*/}
            {/*Article 2*/}
            {/*<Raiting value={0} />*/}
            {/*<Raiting value={1} />*/}
            {/*<Raiting value={2} />*/}
            <Raiting value={rautingValue}
                     onClick={setRaitegValue}/>
            {/*<Raiting value={4} />*/}
            {/*<Raiting value={5} />*/}
            {/*<OnOff />*/}
            <ControledOnOff on={OnOffControlled}
                              onClick={setOnOffControlled}/>
            <UnControledOnOff onChange={setOnOffControlled}/> {OnOffControlled.toString()}
            {/*<UnControledOnOff />*/}
            {/*<UnControledOnOff />*/}
            {/*<UnControledOnOff on={false}/>*/}
            {/*<UnControledOnOff on={true}/>*/}
        </div>

    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}


export default App;
