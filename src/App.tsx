import React, {useState} from 'react';
import './App.css';
import {MoneyComponent} from "./Filter/MoneyComponent";
import InputBtnBlock from "./Input/InputBtnBlock/InputBtnBlock";

export type FilterType = 'all' | 'dollar' | 'ruble'


//Метод filter
// function App() {
//
//     const [money, setMoney] = useState( [
//         { banknots: 'Dollars', value: 100, number: ' a1234567890' },
//         { banknots: 'Dollars', value: 50, number: ' z1234567890' },
//         { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
//         { banknots: 'Dollars', value: 100, number: ' e1234567890' },
//         { banknots: 'Dollars', value: 50, number: ' c1234567890' },
//         { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
//         { banknots: 'Dollars', value: 50, number: ' x1234567890' },
//         { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
//     ])
//     const [filter, setFilter] = useState<FilterType>('all')
//     let currentMoney = money
//
//     if (filter === 'dollar') {
//         currentMoney = money.filter(moneyArr => moneyArr.banknots === 'Dollars')
//     }
//     if (filter === 'ruble') {
//         currentMoney = money.filter(moneyArr => moneyArr.banknots === 'RUBLS')
//     }
//
//     const onClickFilterHandler = (name: FilterType) => {
//         setFilter(name)
//     }
//
//
//   return (
//     <MoneyComponent
//         callback={onClickFilterHandler}
//         filteredMoneyArr = {currentMoney}
//     />
//   );
// }

// Input
function App () {

    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'}
    ])


    let newMessageArr = message
    console.log(newMessageArr)



    const addMessageBtnHandler = (messageText: string) => {
        newMessageArr.push({message: messageText})
        setMessage(newMessageArr)

        // console.log(newMessageArr)
    }


    const messagesToRender = newMessageArr.map((m,index) => {
        return (
            <div key={index}>
                {m.message}
            </div>
        )
    })

    return (
        <div className={'App'}>
            <InputBtnBlock
                addMessageBtnHandler = {addMessageBtnHandler}
            />
            <div>
                {messagesToRender}
            </div>
        </div>
    )
}



export default App