import { useState } from 'react';
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8081/api/todo';

function useApi() {
    const [toDoList, setToDoList] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/all`);
            if (response.status === 200) {
                setToDoList(response.data);
            }
        } catch (error) {
            console.error('할 일 조회 에러 발생: ', error);
        }
    };

    const addToDo = async (content) => {
        try {
            const response = await axios.post(`${API_BASE_URL}/save`, content);
            if (response.status === 200) {
                await fetchData();
            }
        } catch (error) {
            console.error('할 일 추가 에러 발생: ', error);
        }
    };

    const deleteToDo = async (num) => {
        try {
            const response = await axios.delete(`${API_BASE_URL}/delete/${num}`);
            if (response.status === 200) {
                await fetchData();
            }
        } catch (error) {
            console.error('할 일 삭제 에러 발생: ', error);
        }
    };

    const editToDo = async (num, updatedToDo) => {
        try {
            const response = await axios.put(`${API_BASE_URL}/update/${num}`, updatedToDo);
            if (response.status === 200) {
                await fetchData();
            }
        } catch (error) {
            console.error('할 일 수정 에러 발생: ', error);
        }
    };


    return { toDoList, fetchData, addToDo, deleteToDo, editToDo };
}

export default useApi;
