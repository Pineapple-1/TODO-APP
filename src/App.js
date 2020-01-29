import React from 'react';
import Header from './components/header'
import Main from './components//main'
import WorkData from './components/workdata'
class MyApp extends React.Component 
{
  constructor()
  {
    super()
  this.state = {
  todo:WorkData,
  another:""
}
this.handelClick=this.handelClick.bind(this)
this.addNew=this.addNew.bind(this)
this.handlechange=this.handlechange.bind(this)
this.clear=this.clear.bind(this)
}
handelClick(id)
{
this.setState((PrevState)=>
{const updatedtodo = PrevState.todo.map((todo)=>{
  if(todo.id===id)
{
  todo.completed= !todo.completed
}
return todo
})   
return{
  todo:updatedtodo
}
})
}
handlechange(event)
{
  const string = event.target.value
  this.setState({
another:string
  })
 
}
addNew()
{
  const add ={
    id:WorkData.length+1,
    work:this.state.another.toUpperCase(),
    completed:false
  } 
  WorkData.push(add)
  this.setState({
    todo:WorkData
  }
  )
}
clear()
{ 
  for(let i=WorkData.length;i>0;--i)
  {
    WorkData.pop()
  }
 this.setState({
   todo:WorkData
  })  
}
render()
{
  const workcomponets = this.state.todo.map((helo)=>
<Main key={helo.id} item={helo} handelClick={this.handelClick}/>)
return(
    <div>     
    <Header/>
    <div className="todo-list">
     {workcomponets}
      </div>
     <div className="add"> 
 
     <input type="text" className="tb" placeholder="add new item" onChange={this.handlechange}/>
      <button onClick={this.addNew} type="submit">ADD NEW ITEM</button>
     
       </div>
      <div className="add"><button onClick={this.clear}>CLEAR ALL</button></div>
    </div>
)}
}
export default MyApp;
