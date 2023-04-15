import React from 'react'
import './Choices.css'

export default function Choices({game}) {
    return (
        <div className="choices">
            <div id="r" className="choice" onClick={() => game('r')}>
                <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSS5fc4ZhIQ8POiGPK-797sXbQarItXktM5CW9KiY2TZQ0c6JbJ&amp;usqp=CAU"} />
            </div>
            <div id="p" className="choice" onClick={() => game('p')}>
                <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTcrTQlaPjcjX0SibuAXbJtE_xHV4GWcu_nOAOqiLCDWfmLKad4&amp;usqp=CAU"} />
            </div>
            <div id="s" className="choice" onClick={() => game('s')}>
                <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQUE6b15TVtiqwwtlxmodXHb6iMiPz0hq7mHZO3qF7HteJVAHnJ&amp;usqp=CAU"} />
            </div>
        </div>
    )
}
