import React,{Component} from 'react'


export class SearchPlayers extends Component{

state={
    search:''
}
HandleForm =(e) => {

    this.setState({search: e.target.value})
}
getSearchPlayers = (e) =>{
    e.preventDefault();
    this.props.searchPlayers(this.state.search)
}
render(){
const {search}= this.state

    return(
        <div>

<form onSubmit={this.getSearchPlayers}>
    <div className="form-group">
<input onChange={this.HandleForm} value={search} type="text" placeholder="Search users..." className="form-control"></input></div>

<button className="btn btn-success btn-block">Search</button>
</form>


        </div>
    )

}
}

export default SearchPlayers