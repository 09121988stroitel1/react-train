import React from "react";

const Accordion = (props: any) => {
    return (
        <div>
            <AccordionTite title={props.title}/>
            <AccordionBody />
        </div>

    )
}
const AccordionTite = (props: any) => {
    return ( <>
            {props.title}
            <h3>меню</h3>
        </>

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
export default Accordion;