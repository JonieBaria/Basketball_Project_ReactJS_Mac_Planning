import React from 'react'
import ScoreBox from './ScoreBox'

function LiveCurrentScore() {
  return (
    <div className='live-latest-score'>
        <div className='live-score-container'>
          
            <ScoreBox T1name="Saints" T2name="San Jose" score1={101} score2={89} Q="4th" time="3:14"/>
            <ScoreBox T1name="GSW" T2name="LAL" score1={50} score2={44} Q="2nd" time="8:20"/>
            <ScoreBox T1name="SMACK" T2name="Still One" score1={11} score2={19} Q="1st" time="1:04"/>
            <ScoreBox T1name="Outsider" T2name="Bad Burn" score1={30} score2={16} Q="3rd" time="6:54"/>

            
        </div>

    </div>
  )
}

export default LiveCurrentScore