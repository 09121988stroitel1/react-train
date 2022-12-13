import React from "react";


type AccordionPropsType = {
    titleValue: string,
    collapsedMenu: boolean
}
const Accordion1 = (props: AccordionPropsType) => {
    // debugger
    if(props.collapsedMenu === true) {
        return (
            <div>
                <AccordionTite title={props.titleValue}/>

            </div>
        )
    } else {
        return (
            <div>
                <AccordionTite title={props.titleValue}/>
                <AccordionBody />
            </div>
        )
    }
}


export const Accordion2 = (props: AccordionPropsType) => {
        return (
            <div>
                <AccordionTite title={props.titleValue}/>
                {!props.collapsedMenu && <AccordionBody />}

            </div>
        )
}



type AccordionTitePropsType = {
    title: string
}
const AccordionTite = (props: AccordionTitePropsType) => {
    return ( <>

            <h3>{props.title}</h3>
        </>

    )
}

// type AccordionBodyPropsType = {
//     titleValue: string
// }
const AccordionBody = () => {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}
export default Accordion1;
