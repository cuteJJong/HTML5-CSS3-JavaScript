// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ToDo({ todo, onDelete, onEdit }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(todo.title);
    const [editedContent, setEditedContent] = useState(todo.content);
    const [isCompleted, setIsCompleted] = useState(false);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        onEdit(todo.num, editedTitle, editedContent);
        setIsEditing(false);
    };

    const handleCancelClick = () => {
        setIsEditing(false);
        setEditedTitle(todo.title);
        setEditedContent(todo.content);
    };

    const handleCheckboxChange = () => {
        setIsCompleted(!isCompleted);
    };

    return (
        <div className="todo-item">
            {isEditing ? (
                <div className="edit-content">
                    <input
                        type="text"
                        className="edit-input"
                        value={editedTitle}
                        onChange={(e) => setEditedTitle(e.target.value)}
                    />
                    <input
                        type="text"
                        className="edit-input"
                        value={editedContent}
                        onChange={(e) => setEditedContent(e.target.value)}
                    />
                    <button className="edit-content" onClick={handleSaveClick}>수정</button>&nbsp;
                    <button className="edit-content" onClick={handleCancelClick}>취소</button>
                </div>
            ) : (
                <div className="todo-content">
                    <input
                        type="checkbox"
                        checked={isCompleted}
                        onChange={handleCheckboxChange}
                        className="todo-checkbox"
                    />
                    <span className={isCompleted ? "done-text" : ""}>
                        To do : <u>{todo.title}</u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Details : {todo.content}
                    </span>&nbsp;
                    <div className="buttons">
                        <button onClick={() => onDelete(todo.num)}>삭제</button>&nbsp;
                        <button onClick={handleEditClick}>수정</button>
                    </div>
                </div>
            )}
        </div>
    );
}

ToDo.propTypes = {
    todo: PropTypes.shape({
        num: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
    }).isRequired,
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
};

export default ToDo;
