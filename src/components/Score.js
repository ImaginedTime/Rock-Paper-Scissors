import React from 'react'
import './Score.css'

export default function Score({ userScore, compScore }) {
    return (
        <div className="score">
            <div id="user-label" className="badge">user</div>
            <div id="comp-label" className="badge">comp</div>
            <div className='scores-value'>
                <span id="user-score">{userScore}</span>:
                <span id="comp-score">{compScore}</span>
            </div>
        </div>
    )
}
