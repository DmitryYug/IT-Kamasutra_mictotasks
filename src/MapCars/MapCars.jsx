import React from "react";

export function MapCars () {
    const topCars = [
        {manufacturer:'BMW', model:'m5cs'},
        {manufacturer:'Mercedes', model:'e63s'},
        {manufacturer:'Audi', model:'rs6'},
    ]
    const tableElements = topCars.map(item => {
        return (
            <tr>
                <th>{item.manufacturer}</th>
                <th>{item.model}</th>
            </tr>
        )
    })
    return (
        <table>
            {tableElements}
        </table>

    )
}



