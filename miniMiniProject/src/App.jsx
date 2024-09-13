import React from 'react';
import { useEffect, useState } from 'react';
import ToDoList from './components/ToDoList.jsx';
import useApi from './hooks/useApi';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isRegistering, setIsRegistering] = useState(false);
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");
    const { toDoList, fetchData, addToDo, deleteToDo, editToDo } = useApi();

    useEffect(() => {
        if (isAuthenticated) {
            fetchData();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAuthenticated]);

    const handleContentChange = (e) => {
        setContent(e.target.value);
    };

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleAddToDoBtnClick = async () => {
        if (title.trim() !== "" && content.trim() !== "") {
            await addToDo({ title, content });
            setTitle("");
            setContent("");
        } else {
            document.getElementById("to-do-title-input").focus();
        }
    };

    const handleDeleteBtnClick = async (num) => {
        if (window.confirm("정말 삭제하시겠습니까?")) {
            await deleteToDo(num);
        }
    };

    const handleEditToDo = async (num, newTitle, newContent) => {
        await editToDo(num, { title: newTitle, content: newContent });
    };

    const handleLoginSuccess = () => {
        setIsAuthenticated(true);
    };

    const toggleRegistering = () => {
        setIsRegistering(!isRegistering);
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
    };

    return (
        <>
            {isAuthenticated ? (
                <>
                    <div className="header-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ flex: 1, textAlign: 'center' }}>
                            <h1 style={{ margin: 0 }}>To Do List</h1>
                        </div>
                        <button className="logout-button" onClick={handleLogout}>로그아웃</button>
                    </div>

                    <div className="to-do-container" style={{ marginBottom: '20px' }}>
                        <ToDoList
                            toDoList={toDoList}
                            onDelete={handleDeleteBtnClick}
                            onEdit={handleEditToDo}
                        />
                    </div>

                    <div className="to-do-container">
                        <div className="add-input">
                            <label htmlFor="to-do-title-input">To do : </label>
                            <input
                                type="text"

                                id="to-do-title-input"
                                className="add-input"
                                value={title}
                                onChange={handleTitleChange}
                            />&nbsp;&nbsp;&nbsp;
                            <label htmlFor="to-do-content-input">Details : </label>
                            <input
                                type="text"
                                id="to-do-content-input"

                                value={content}
                                onChange={handleContentChange}
                            />&nbsp;&nbsp;
                            <button onClick={handleAddToDoBtnClick}>작성</button>
                        </div>
                    </div>
                </>
            ) : isRegistering ? (
                <Register onRegisterSuccess={toggleRegistering} />
            ) : (
                <Login onLoginSuccess={handleLoginSuccess} onRegisterClick={toggleRegistering} />
            )}
        </>
    );
}

export default App;
