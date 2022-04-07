import React, {ChangeEvent, useState} from "react";

function InputBtnBlock () {

    let [title, setTitle] = useState('')

    function onChangeInputHandler (e: ChangeEvent<HTMLInputElement>) {
        setTitle(e.currentTarget.value)
        // console.log(title)
    }

    return (
        <div>
            <input onChange={onChangeInputHandler}/>
            <button>+</button>
        </div>
    )
}

export default InputBtnBlock