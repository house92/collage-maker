import React from 'react';
import './App.css';

var Image = React.createClass({
    getInitialState() {
        return {editing: false};
    },

    edit() {
        this.setState({editing: true});
    },

    save() {
        var val = this.refs.newText.value
        alert('Later we will save this value: ' + val);
        this.setState({editing: false});
    },

    remove() {
        alert("Removing image");
    },

    renderForm() {
        return (
            <div className="image">
              <textarea ref="newText"></textarea>
              <button onClick={this.save}>SAVE</button>
            </div>
        );
    },

    renderDisplay() {
        return (
            <div className="image">
                <img src={this.props.children} />
                <span>
                  <button onClick={this.edit}>EDIT</button>
                  <button onClick={this.remove}>X</button>
                </span>
            </div>
        );
    },

    render() {
      return (this.state.editing) ? this.renderForm()
                                  : this.renderDisplay();

    }
});

export default Image;
