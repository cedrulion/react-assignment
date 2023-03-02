// import React, { Component } from 'react';

// import './App.css';


// class App extends Component {
//   constructor(){
//     super();
//   this.state = {
//     loading: true,
//     users:[]
   
//   }
//   }
//  componentDidMount(){
//     fetch('https://course-api.com/react-store-products')
//     .then((response)=>response.json())
//     .then(data =>{
//       console.log(data)
//       this.setState({users: data, loading:false});
//     });
//   }

//   render(){

// if(this.state.loading){
//   return <h1>loading..</h1>
// }
 

//     return (
//     <div className="App">
//   {this.state.users.map((data) =>{
//     return <h1 key={data.id}>{data.name}</h1>
//   })}
//     </div>
//   );
//   }
// }

// export default App;



//----------------------ch---------------------------
// import React, { Component } from 'react';

// import './App.css';


// class App extends Component {
//   constructor(){
//     super();
//   this.state = {
//     loading: true,
//     searchString:"",
//     users:[]
   
//   }
//   }
//  componentDidMount(){
//     fetch('https://course-api.com/react-store-products')
//     .then((response)=>response.json())
//     .then(data =>{
//       console.log(data)
//       this.setState({users: data, loading:false});
//     });
//   }

//   render(){

// if(this.state.loading){
//   return <h1>loading..</h1>
// }
 

//     return (
//     <div className="App">
//     <input type="text" onChange={(e)=>{
//       // console.log(e.target.value);
//       const searchString = e.target.value.toLocaleLowerCase();
//       const newData = this.state.users.filter(users =>{
//       //   // users.name.includes(e.target.value)
//         return users.name.toLocaleLowerCase().includes(searchString)
//       })
//         //  this.setState({users: newData})
//         this.setState({searchString: searchString})
//     }} />
//   {this.state.users.map((data) =>{
//     return <h1 key={data.id}>{data.name}</h1>
//   })}
//     </div>
//   );
//   }
// }

// export default App;

// ------------------------------------------second ass-------------------------------

// import React, { Component } from 'react';

// import './App.css';


// class App extends Component {
//   constructor(){
//     super();
//   this.state = {
//     loading: true,
//     searchString:"",
//     users:[]
   
//   }
//   }
//  componentDidMount(){
//     fetch('https://course-api.com/react-store-products')
//     .then((response)=>response.json())
//     .then(data =>{
//       console.log(data)
//       this.setState({users: data, loading:false});
//     });
//   }
//   searchHandler =(e) =>{
//     const searchString = e.target.value.toLocaleLowerCase();
//     this.setState({searchString: searchString})
//   }

//   render(){

// if(this.state.loading){
//   return <h1>loading..</h1>
// }
// const newData = this.state.users.filter(users =>{
//   //   // users.name.includes(e.target.value)
//     return users.name.toLocaleLowerCase().includes(this.state.searchString)
//   });
 

//     return (
//     <div className="App">
//     <input type="text" onChange={this.searchHandler} />
//   {newData.map((data) =>{
//     return <h1 key={data.id}>{data.name}</h1>
//   })}
//     </div>
//   );
//   }
// }

// export default App;
