import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      newItem: "",
      list: []
    }
  };

  addItem(todoValue){
    if (todoValue !== ""){
      const newItem = {
        id: Date.now(),
        value: todoValue,
        isDone: false
      };
      const list = [...this.state.list];
      list.push(newItem)

      this.setState({ list:list ,newItem: "" });
    }
  }

  deleteItem(id){
    const list = [...this.state.list];
    const updatedlist = list.filter(item=>item.id !== id);

    this.setState({ list:updatedlist });
  }

  updateInput(input){
    this.setState({ newItem:input })
  }


  render(){
    return (
      <div className="container">
        <div id="task-container">
          <div id="form-wrapper">
            <form id="form">
              <div className="flex-wrapper">
                <div style={{ flex: 6 }}>
                  <input 
                    className="form-control" 
                    id="title" type="text" 
                    name="title" 
                    placeholder="Add Todo" 
                    required  
                    value={this.state.newItem} 
                    onChange={e => this.updateInput(e.target.value)}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <button 
                    id="submit" 
                    className="btn btn-success" 
                    type="submit" 
                    name="Add" 
                    onClick={() => this.addItem(this.state.newItem)}
                    disabled={!this.state.newItem.length}
                  >Add</button>
                </div>
              </div>
            </form>
          </div>
          <div id="list-wrapper">
            <ul>
              {this.state.list.map( item => {
                return(
                  <li key={item.id}>
                    <input 
                    type="checkbox"
                    name="idDone"
                    checked={item.isDone}
                    onChange={()=>{}}
                    />
                    {item.value}
                    <button 
                      className="btn btn-sm btn-warning"
                      onClick={()=>this.deleteItem(item.id)}
                    >Delete</button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      )
  }
}

export default App;
