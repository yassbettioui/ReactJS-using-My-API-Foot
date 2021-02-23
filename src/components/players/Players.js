import React,{Component} from 'react'
import Navbar from '../partials/Navbar'
import axios from 'axios'
import Player from './Player'
import SearchPlayers from './SearchPlayers'
import PlayerForm from './PlayerForm'
export class Players extends Component{
    state={
        players:[],
        resultPlayers:[],
        newPlayer:[]
    }



    getPlayers = () => {
        axios.get("http://localhost:8081/players")
        .then(resp =>{
            this.setState({
            players:resp.data._embedded.players,
            resultPlayers:resp.data._embedded.players,
             })
                    })
    }
   /*  HandleForm =(e) =>{
       console.log(e);
        //this.setState({search:e.target.value})
         } */
/*     searchplayers= () =>{
//this.setState({resultPlayers:this.state.players.filter((p)=>p.name.toLowerCase().includes(this.state.search.toLowerCase()))});
} */

PlayersByResearch(search){
    console.log(search)
this.setState({resultPlayers:this.state.players.filter((p)=>p.name.toLowerCase().includes(search.toLowerCase()))});
}

AddPlayer =(player) =>{
    axios.get("http://localhost:8081/players",player)
    .then(res=>{
       // this.players=[res.data, ...this.players];
       console.log(player)
    }) 
}
  componentDidMount(){
this.getPlayers();
}
HandleForm =(e) => {
this.setState({search: e.target.value})
}
handleSubmit(e){
    e.prevenDefault();
    const fullName=this.state.newPlayer;
    this.props.onAddPlayer({fullName})
  this.setState({newPlayer:""})
}
render(){
            return(
 <div>
<Navbar/>
{/* <PlayerForm onAddPlayer={this.AddPlayer}/>
 */}
<div className="form-group">
<form onSubmit={this.handleSubmit}>
<input className="form-control" onChange={this.handleForm} value={this.state.newPlayer} type="text" placeholder="Add new player"></input>
<button className="btn btn-primary btn-block" type="submit">ADD</button>

</form>

    <SearchPlayers searchPlayers={this.PlayersByResearch}/>
         {this.state.resultPlayers.map(p =>(

         <div className="col-md-10 mt-3" key={p.id}>
         <Player player={p}/>
         </div>
     ))}
     
</div>
       </div>
        )
    }
}
export default Players