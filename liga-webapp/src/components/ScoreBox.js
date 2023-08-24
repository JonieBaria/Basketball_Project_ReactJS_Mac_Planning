import React from 'react'

function ScoreBox(props) {
  return (
    <div className='box-score-table-container'>

        <table className='box-score-table'>
        <tr>
            <th>{props.Q} Qtr</th>
            <th>{props.time}</th>
        </tr>
        <tr><td className='box-score-team-name'>{props.T1name}</td><td>{props.score1}</td></tr>
        
        <tr><td className='box-score-team-name'>{props.T2name}</td><td>{props.score2}</td></tr>
                
        </table>



        {/* <div className='box-score-grid'>
            <div className='boxscore-grid-item'>
                <p className='box-score-label team-name'>{props.T1name}</p>
            </div>

            <div className='boxscore-grid-item'>
                <p className='box-score-label'>{props.score1}</p>
            </div>

            <div className='boxscore-grid-item'>
                <p className='box-score-label team-name'>{props.T2name}</p>
            </div>

            <div className='boxscore-grid-item'>
                <p className='box-score-label'>{props.score2}</p>
            </div>
        
        </div> */}
    </div>

    
  )
}

export default ScoreBox