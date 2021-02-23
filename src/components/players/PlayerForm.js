import React,{Component} from 'react'


export class PlayerForm extends Component{
     constructor(props){
    super(props);
    this.state={  
        newPlayer:""}
    }
handleChange(e){
    //this.setState({newPlayer:e.target.value});
    console.log(this.state.newPlayer)
}
handleSubmit(e){
    e.prevenDefault();
    const fullName=this.state.newPlayer;
    this.props.onAddPlayer({fullName})
   // this.setState({newPlayer:""})
}

render(){
    const {newPlayer} = this.state
    return(
<div className="form-group">
<form onSubmit={this.handleSubmit}>
<input className="form-control" onChange={this.handleChange} value={newPlayer} type="text" placeholder="Add new player"></input>
<button className="btn btn-primary btn-block" type="submit">ADD</button>

</form>

</div>
)

}

}

export default PlayerForm