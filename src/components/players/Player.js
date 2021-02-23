import React,{Component} from 'react'


export class Player extends Component{


render(){
const{fullName,club,firstNationality,position}=this.props.player;
    return(
        <div className="container">
<h3>{fullName}  : {position} | ({firstNationality}) </h3>
 <h5>{club.name}</h5>
        </div>
    )

}

}

export default Player