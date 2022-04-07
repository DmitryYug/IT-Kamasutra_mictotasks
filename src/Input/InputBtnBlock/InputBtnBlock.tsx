import React, {ChangeEvent, useState} from "react";

type InputBtnBlockPropsType = {
    addMessageBtnHandler: (messageText: string) => void
}


function InputBtnBlock (props: InputBtnBlockPropsType) {

    let [title, setTitle] = useState('')

    function onChangeInputHandler (e: ChangeEvent<HTMLInputElement>) {
        setTitle(e.currentTarget.value)
        // console.log(title)
    }




    return (
        <div>
            <input onChange={onChangeInputHandler}/>
            <button onClick={() => props.addMessageBtnHandler(title)}>+</button>
        </div>
    )
}

export default InputBtnBlock