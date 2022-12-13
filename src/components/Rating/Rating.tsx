import React from "react";

type RaitingProps = {
    value: number
}
export const Raiting = (props: RaitingProps) => {

        return (
            <div>
                <Star selected={props.value > 0} />
                <Star selected={props.value > 1}/>
                <Star selected={props.value > 2}/>
                <Star selected={props.value > 3}/>
                <Star selected={props.value > 4}/>
            </div>
        )

}

type StarPropsType = {
    selected: boolean
}

const Star = (props: any) => {
    if(props.selected === true) {
        return (<span><b>Star</b> </span>)
    } else {
        return (<span>Star </span>)
    }

}