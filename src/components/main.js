import React from'react'
class Main extends React.Component
{
render()
    {
    const completedStyle= {
            textDecoration: "line-through",
            color:"#cdcdcd",
            fontStyle:"italic"    
            }
let final=  this.props.item.completed?completedStyle:null
return(
<div className="todo-item">
<input type="checkbox"   checked={this.props.item.completed} 
onChange={()=> this.props.handelClick(this.props.item.id)}/>
<p style={final}>{this.props.item.work}</p>
</div>
)}
}
export default Main