import React from "react";

type PropsType = {
    name: string,
    callback: () => void
}

export function Button (props: PropsType) {
    return (
        <button onClick={props.callback}>{props.name}</button>
    )
}



