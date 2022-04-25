import React, { useEffect, useState } from 'react';
import "./Todo.scss";
import TodoItem from './TodoItem';

const Todo = () => {
    const [todo, setTodo] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch("https://myjson.dit.upm.es/api/bins/cmtx")
                const jsonRes = await response.json();
                setTodo(jsonRes)
                console.log(jsonRes);
            } catch (err) {
                console.log(err);
            }
        })()
    }, []);
    return (
        <div>
            <table>
                <thead>
                    <tr className='karimov'>
                        <th className='sardor'>id</th>
                        <th className='sardor'>Ismi</th>
                        <th className='sardor'>Lovozimi</th>
                    </tr>
                </thead>
            </table>
            {
                todo.map((todos, index) => {
                    return <TodoItem key={index} yubordim={todos} />
                })
            }
        </div>
    )
}

export default Todo;