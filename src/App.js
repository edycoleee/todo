import React, { Component } from "react";
import { v4 as uuid } from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

class App extends Component {
  state = {
    items: [
      // { id: 1, title: "todo item1" },
      // { id: 2, title: "todo item2" },
      // { id: 3, title: "todo item3" },
      // { id: 4, title: "todo item4" },
    ],
    id: uuid(),
    item: "",
    editItem: false,
  };

  handleChange = (e) => {
    this.setState({
      item: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item,
    };
    const updatedItems = [...this.state.items, newItem];
    this.setState({
      items: updatedItems,
      item: "",
      id: uuid(),
      editItem: false,
    },()=>console.log(this.state)
    );
  };

  clearList = () => {
    console.log("ClearList");
    this.setState({
      items: []
    })
  };

  handleDelete = (id) => {
    console.log(`handle delete ${id}`);
    const filteredItem = this.state.items.filter(item => item.id !==id)
    this.setState({
      items: filteredItem
    })
  };

  handleEdit = (id) => {
    console.log(`handle edit ${id}`);
    const filteredItem = this.state.items.filter(item => item.id !==id)
    const selectedItem = this.state.items.find(item => item. id === id)
    console.log(selectedItem);
    this.setState({
      items: filteredItem,
      item:selectedItem.title,
      id:id,
      editItem:true
    })
    
  };

  render() {
    // console.log(this.state);
    return (
      <div>
        {/* <h1>Hello from App</h1> */}
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-5">
              <h3 className="text-capitalize text-center">input kerjaan</h3>
              <TodoInput
                item={this.state.item}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                editItem={this.state.editItem}
              />
              <TodoList
                items={this.state.items}
                clearList={this.clearList}
                handleDelete={this.handleDelete}
                handleEdit={this.handleEdit}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
