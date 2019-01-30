import React from "react";

class TodoItems extends React.Component {
    constructor(props) {
        super(props);
        this.createTasks = this.createTasks.bind(this);
    }

    delete(key) {
        this.props.delete(key);
    }

    edit(key) {
        this.props.edit(key);
    }

    createTasks(item) {
        return (
        <div>
            <li>{item.text}</li>
            <button className="edit-button" onClick={() => this.edit(item.key)}>edit</button>
            <button className="delete-button" onClick={() => this.delete(item.key)} key={item.key}>delete</button>
        </div> 
        );
    }

    render() {
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createTasks);
        return (
            <ul className="theList">
                {listItems}
            </ul>
        );
    }
};

export default TodoItems;