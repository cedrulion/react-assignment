import React, { Component } from 'react';

import './App.css';


class App extends Component {
  constructor(){
    super();
  this.state = {
    loading: true,
    searchString:"",
     users:[]
   
  }
  }
 componentDidMount(){
    fetch('https://course-api.com/react-store-products')
    .then((response)=>response.json())
    .then(data =>{
      console.log(data)
      this.setState({users: data, loading:false});
    });
  }
  // searchHandler =(e) =>{
  //   const searchString = e.target.value.toLocaleLowerCase();
  //   this.setState({searchString: searchString})
  // }

  render(){

if(this.state.loading){
  return <center><h1><em>loading..</em> </h1></center>
}
const newData = this.state.users.filter(users =>{
 
    return users.name.toLocaleLowerCase().includes(this.state.searchString)
  });
 

    return (
    <div className="App">
    <input type="text" placeholder='search here...'  /> 
   {
    newData.map((data) =>{
      return <h1>{data.name}</h1>
    })
  }
    </div>
  );
  }
}

export default App;
