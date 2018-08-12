import React, { Component } from 'react';
import './App.css';
var timer;
class Search extends Component {
  constructor(props){
    super(props);
    this.state={
      searchfield:'',
      users: [] 
    };
  }
    
handlefilter(e){
    this.setState({searchfield:e.target.value});
    //console.log('1',timer);
    timer && clearTimeout(timer);
    if(e.target.value.trim() === ''){
        this.setState({users: []});
    }else{
    var data = e.target.value;
    var self = this;
    timer=setTimeout(function handlefilterlist(){
      var url ='http://localhost:3006/users?searchkey='+data;
      fetch(url)
        .then(res => res.json())
        .then(users => self.setState({ users:users }))
        .catch((error)=>console.log(error));
    },2000);

    //console.log('3',timer);
   }
}
  render() {
    return (
      <div className="App">
      <br/>
      <br/>
      <div>
      <form>
          <input type="text" value={this.state.searchfield}  placeholder="search" onChange={(e) => this.handlefilter(e)}/>
      </form>
      </div>
      <div>
      <Searchlist searchfilterlist={this.state.users}/>
        </div>
      </div>
    );
  }
}

class Searchlist extends Component {
    render() {
        return (
    <div>
        <table align="center">
            <tr>
            <td>
    {this.props.searchfilterlist.map(user =>
        <div key={user.id}>{user.name}</div>
      )}
      </td>
      </tr>
      </table>
    </div>
);
}
}

export default Search;
