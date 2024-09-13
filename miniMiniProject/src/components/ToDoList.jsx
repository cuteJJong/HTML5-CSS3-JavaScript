// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import ToDo from './ToDo';

function ToDoList({ toDoList, onDelete, onEdit }) {
    return (
        <>
            {toDoList.map((todo) => (
                <ToDo
                    key={todo.num}
                    todo={todo}
                    onDelete={onDelete}
                    onEdit={onEdit}
                />
            ))}
        </>
    );
}

ToDoList.propTypes = {
    toDoList: PropTypes.arrayOf(PropTypes.shape({
        num: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
    })).isRequired,
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
};

export default ToDoList;
