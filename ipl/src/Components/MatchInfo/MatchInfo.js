import React from 'react'

function MatchInfo(props){
    return (<div>
        {props.matchInfo._id}<br/>
        {props.matchInfo.city}
    </div>)
}
export default MatchInfo;