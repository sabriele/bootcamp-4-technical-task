import React, { Component } from "react";
import TodoService from "./TodoService";
import ListTodoRow from "./ListTodoRow";

export default class IndexItem extends Component {
  constructor(props) {
    super(props);
    this.state = { items: "" };
    this.todoService = new TodoService();

    //bind
    this.onDelete = this.onDelete.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }
  componentWillMount() {
    this.fillData();
  }

  fillData() {
    var thisRef = this;
    this.todoService.all(data => {
      thisRef.setState({ items: data });
    });
  }

  tabRow() {
    if (this.state.items instanceof Array) {
      var thisRef = this;
      return this.state.items.map(function(object, i) {
        return (
          <ListTodoRow
            onDelete={thisRef.onDelete}
            onUpdate={thisRef.onUpdate}
            obj={object}
            key={i}
          />
        );
      });
    }
  }

  onDelete(event) {
    let id = event.target.id;
    var thisRef = this;
    this.todoService.delete(id, () => {
      thisRef.fillData();
    });
  }

  onUpdate(event) {
    let id = event.target.id;
    this.props.history.push("/todo/update/" + id);
  }

  handleAdd() {
    this.props.history.push("/todo/add");
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-center">
          <strong>A To Do List</strong>
        </h1>
        <h5 className="lead text-center">Warning: do not do tomorrow.</h5>
        <div className="row">
          <div className="col-xs-2 col-md-3" />
          <div className="col-xs-8 col-md-6">
            <div className="panel panel-default">
              <div className="panel-heading">List of Tasks</div>
              <div className="panel-body">
                <small><em>Click on the task description to edit</em></small>
                <table id="todo-list" className="table table-hover">
                  <tbody>{this.tabRow()}</tbody>
                </table>
              </div>
              <div className="panel-footer">
                <button onClick={this.handleAdd} className="btn btn-info">
                  New task
                </button>
              </div>
            </div>
          </div>
          <div className="col-xs-2 col-md-3" />
        </div>
      </div>
    );
  }
}
