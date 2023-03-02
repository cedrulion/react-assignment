// import React, { useState } from 'react'

// function TodoList() {
//     const [newItem, setNewItem]=useState("");
//     const [items, setItems]= useState([]);
//     function addItem(){
//         if(!newItem){
//             alert("Enter an item");
//             return;
//         }
//         const item ={
//             id: Math.floor(Math.random()*1000),
//             value: newItem
//         };
//         setItems(oldList => [...oldList, item]);

//     }
//     function deleteItem(id){
//         const newArray = items.filter(item => item.id !== id);
//         setItems(newArray);
//     }
//   return (
//     <div>
        
//       <h1>TODO LIST APP</h1>
//       <input type="text"
//       placeholder='Add an item' 
//       value={newItem}
//       onChange={e=> setNewItem(e.target.value)}
//       />
//       <button onClick={() => addItem()}>Add</button>
//       <div className='appl'>
//     <ul>
//         {items.map(item => {
//             return(
                
//                 <li key={item.id} >{item.value} <button className='delete-Item' onClick={() => deleteItem(item.id)}>delete</button></li>
//             )
//         })}
//     </ul>
//     </div>
//     </div>
//   )
// }

// export default TodoList








//=============================================
// import React, { Component } from 'react';

// import './App.css';


// class App extends Component {
//   constructor(){
//     super();
//   this.state = {
//     loading: true,
//     result1:{}
//     // name: 'cedric' ,
//     // company: 'solvit'
//     // users:[],
//     // filterData:''
//   }
//   }
//   async componentDidMount(){
//     const result= await fetch("https://api.openweathermap.org/data/2.5/forecast?q=kigali&appid=1383c1ef39cccbbc106d269850cfc481")
//     const result1= await result.json()
//     this.setState({result1,loading: false})
//   }
//   handleInputChange = (event) => {
//     console.log(event.target.value);
//   }

//   render(){
//     if(this.state.loading)
 
//     return <h1>loading..</h1>
//     return (
//     <div className="App">
//   <input type="text" placeholder="......." onChange={this.handleInputChange}/>
//     {this.state.result1.list && this.state.result1.list.map(res =>{
//       return <p className='prag'> {res.weather[0].main}</p>
//     })}
//      <button className='btn' onClick={this.message}>click</button>
{/*     
      <h1>hello {this.state.name} ,i work for {this.state.company} </h1>
      <button onClick={()=> {
      this.setState({name: 'byiringiro',company: 'andela'})
      }} >change name</button> */}
      {/* <input type="text" onChange={(e) =>this.setState({filterData: e.target.value})} placeholder="......."/>
      {
        this.state.users.filter((value) =>{
          return value.name.toLowerCase().include(this.state.filterData)
        }).map((data) =>{
          return <h1 key={data.id}>{data.name}</h1>
        })
      } */}
    </div>
  );
  }
}

// export default App;
