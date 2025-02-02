
// import React from 'react'
// import { useState } from 'react';
// import { useTodo } from '../contexts/TodoContext';

// function TodoItem({ todo }) {
    
//     const [isTodoEditable, setIsTodoEditable] = useState(false);
//     const [todoMsg, setTodoMsg] = useState(todo.todo);
//     const { deleteTodo, toggleComplete, updateTodo } = useTodo();

//     const editTodo = () => {
//         if (!todoMsg) return;
//         updateTodo(todo.id, { ...todo, todo: todoMsg });
//         setIsTodoEditable(false);
//     };

//     const toggleCompleted = () => {
//         toggleComplete(todo.id);
//     };
//     return (
//         <div
//             className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
//                 todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
//             }`}
//         >
//             <input
//                 type="checkbox"
//                 className="cursor-pointer"
//                 checked={todo.completed}
//                 onChange={toggleCompleted}
//             />
//             <input
//                 type="text"
//                 className={`border outline-none w-full bg-transparent rounded-lg ${
//                     isTodoEditable ? "border-black/10 px-2" : "border-transparent"
//                 } ${todo.completed ? "line-through" : ""}`}
//                 value={todoMsg}
//                 onChange={(e) => setTodoMsg(e.target.value)}
//                 readOnly={!isTodoEditable}
//             />
//             {/* Edit, Save Button */}
//             <button
//                 className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
//                 onClick={() => {
//                     if (todo.completed) return;

//                     if (isTodoEditable) {
//                         editTodo();
//                     } else setIsTodoEditable((prev) => !prev);
//                 }}
//                 disabled={todo.completed}
//             >
//                 {isTodoEditable ? "📁" : "✏️"}
//             </button>
//             {/* Delete Todo Button */}
//             <button
//                 className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
//                 onClick={() => deleteTodo(todo.id)}
//             >
//                 ❌
//             </button>
//         </div>
//     );
// }

// export default TodoItem;



import React, { useState } from 'react';
import { useTodo } from '../contexts/TodoContext';

function TodoItem({ todo }) {
    const [isTodoEditable, setIsTodoEditable] = useState(false);
    const [todoMsg, setTodoMsg] = useState(todo.todo);
    const { deleteTodo, toggleComplete, updateTodo } = useTodo();

    const editTodo = () => {
        if (!todoMsg) return;
        updateTodo(todo.id, { ...todo, todo: todoMsg });
        setIsTodoEditable(false);
    };

    const toggleCompleted = () => {
        toggleComplete(todo.id);
    };

    return (
        <div
            className={`flex items-center border border-pink-300 rounded-lg px-4 py-2 gap-x-3 shadow-md duration-300 text-pink-900 ${
                todo.completed ? "bg-pink-300" : "bg-pink-200"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer accent-pink-500"
                checked={todo.completed}
                onChange={toggleCompleted}
            />
            <input
                type="text"
                className={`flex-1 border outline-none bg-transparent rounded-lg px-2 text-lg ${
                    isTodoEditable ? "border-pink-400" : "border-transparent"
                } ${todo.completed ? "line-through text-pink-500" : "text-pink-900"}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="w-8 h-8 rounded-lg border border-pink-300 bg-pink-400 text-white font-semibold hover:bg-pink-500 transition-all shrink-0"
                onClick={() => {
                    if (todo.completed) return;
                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? "💾" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="w-8 h-8 rounded-lg border border-pink-300 bg-red-400 text-white font-semibold hover:bg-red-500 transition-all shrink-0"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;

                                                                    // Dark Mode
// import React, { useState } from 'react';
// import { useTodo } from '../contexts/TodoContext';

// function TodoItem({ todo }) {
//     const [isTodoEditable, setIsTodoEditable] = useState(false);
//     const [todoMsg, setTodoMsg] = useState(todo.todo);
//     const { deleteTodo, toggleComplete, updateTodo } = useTodo();

//     const editTodo = () => {
//         if (!todoMsg) return;
//         updateTodo(todo.id, { ...todo, todo: todoMsg });
//         setIsTodoEditable(false);
//     };

//     const toggleCompleted = () => {
//         toggleComplete(todo.id);
//     };

//     return (
//         <div
//             className={`flex items-center border border-gray-600 rounded-lg px-4 py-2 gap-x-3 shadow-md duration-300 text-gray-100 ${
//                 todo.completed ? "bg-gray-700" : "bg-gray-800"
//             }`}
//         >
//             <input
//                 type="checkbox"
//                 className="cursor-pointer accent-blue-500"
//                 checked={todo.completed}
//                 onChange={toggleCompleted}
//             />
//             <input
//                 type="text"
//                 className={`flex-1 border outline-none bg-transparent rounded-lg px-2 text-lg ${
//                     isTodoEditable ? "border-gray-400" : "border-transparent"
//                 } ${todo.completed ? "line-through text-gray-400" : "text-gray-100"}`}
//                 value={todoMsg}
//                 onChange={(e) => setTodoMsg(e.target.value)}
//                 readOnly={!isTodoEditable}
//             />
//             {/* Edit, Save Button */}
//             <button
//                 className="w-8 h-8 rounded-lg border border-gray-600 bg-blue-400 text-white font-semibold hover:bg-blue-600 transition-all shrink-0"
//                 onClick={() => {
//                     if (todo.completed) return;
//                     if (isTodoEditable) {
//                         editTodo();
//                     } else setIsTodoEditable((prev) => !prev);
//                 }}
//                 disabled={todo.completed}
//             >
//                 {isTodoEditable ? "💾" : "✏️"}
//             </button>
//             {/* Delete Todo Button */}
//             <button
//                 className="w-8 h-8 rounded-lg border border-gray-600 bg-blue-400 text-white font-semibold hover:bg-blue-600 transition-all shrink-0"
//                 onClick={() => deleteTodo(todo.id)}
//             >
//                 ❌
//             </button>
//         </div>
//     );
// }

// export default TodoItem;