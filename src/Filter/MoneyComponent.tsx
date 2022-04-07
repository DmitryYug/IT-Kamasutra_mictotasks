import React from 'react';
import {FilterType} from "../App";

type MoneyComponentPropsType = {
    callback: (name: FilterType) => void
    filteredMoneyArr: Array<FilteredMoneyArrType>
}

type FilteredMoneyArrType = {
    banknots: string,
    value: number,
    number: string
}

export const MoneyComponent = (props: MoneyComponentPropsType) => {
    return (
        <>
            <ul>
                {props.filteredMoneyArr.map((objFromMoneyArr, index) => {
                    return (
                        <li key={index}>
                            <span> {objFromMoneyArr.banknots}</span>
                            <span> {objFromMoneyArr.value}</span>
                            <span> {objFromMoneyArr.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: '35px'}}>
                <button onClick={() => props.callback('all')}>all</button>
                <button onClick={() => props.callback('ruble')}>rubles</button>
                <button onClick={() => props.callback("dollar")}>dollars</button>
            </div>
        </>
    );
};