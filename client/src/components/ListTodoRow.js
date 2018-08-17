import React, { Component } from "react";

export default class ListTodoRow extends Component {

  render() {
    return <tr>
        <td>
          <form className="form-inline">
            <div className="checkbox">
              <label>
                <input type="checkbox" /> {this.props.obj.desc}
              </label>
            </div>
            <button id={this.props.obj._id} onClick={this.props.onDelete} type="button" value="Delete" className="btn btn-xs pull-right">
              x
            </button>
            <a className="btn btn-xs pull-right" id={this.props.obj._id} onClick={this.props.onUpdate} href={this.props.obj._id}>
              <i className="fas fa-edit fa-fw" />
            </a>
          </form>
        </td>
      </tr>;
  }
}
