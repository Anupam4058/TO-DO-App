// import React from 'react'
// import { useState } from 'react'
// import { useTodo } from '../contexts/TodoContext' ;

// function TodoForm() {
    
//     const [todo, setTodo] = useState("");
//     const { addTodo } = useTodo();

//     const add = (e) => {
//         e.preventDefault();

//         if (!todo) return

//         addTodo({ todo, completed: false });
//         setTodo("");
//     }
//     return (
//         <form onSubmit={add}  className="flex">
//             <input
//                 type="text"
//                 placeholder="Write Todo..."
//                 className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
//                 value={todo}
//                 onChange={(e) => setTodo(e.target.value)}
//             />
//             <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
//                 Add
//             </button>
//         </form>
//     );
// }

// export default TodoForm;


// import React, { useState } from "react";
// import { useTodo } from "../contexts/TodoContext";

// function TodoForm() {
//   const [todo, setTodo] = useState("");
//   const { addTodo } = useTodo();

//   const add = (e) => {
//     e.preventDefault();
//     if (!todo) return;
//     addTodo({ todo, completed: false });
//     setTodo("");
//   };

//   return (
//     <form
//       onSubmit={add}
//       className="flex w-full bg-pink-200 p-3 rounded-lg shadow-lg"
//     >
//       <input
//         type="text"
//         placeholder="Write your fabulous task..."
//         className="w-full border border-pink-400 rounded-l-lg px-4 py-2 outline-none bg-pink-100 text-pink-900 placeholder-pink-500 focus:ring-2 focus:ring-pink-400"
//         value={todo}
//         onChange={(e) => setTodo(e.target.value)}
//       />
//       <button
//         type="submit"
//         className="rounded-r-lg px-4 py-2 bg-pink-500 text-white font-semibold hover:bg-pink-600 transition-all shadow-md"
//       >
//         Add 💖
//       </button>
//     </form>
//   );
// }

// export default TodoForm;



import React, { useState } from "react";
import { useTodo } from "../contexts/TodoContext";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();
    if (!todo) return;
    addTodo({ todo, completed: false });
    setTodo("");
  };

  return (
    <form
      onSubmit={add}
      className="flex w-full bg-pink-200 p-3 rounded-lg shadow-lg"
    >
      <input
        type="text"
        placeholder="Write your fabulous task..."
        className="w-full border border-pink-400 rounded-l-lg px-4 py-2 outline-none bg-pink-100 text-pink-900 placeholder-pink-500 focus:ring-2 focus:ring-pink-400"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-4 py-2 bg-pink-500 text-white font-semibold hover:bg-pink-600 transition-all shadow-md"
      >
        Add 💖
      </button>
    </form>
  );
}

export default TodoForm;

                                                                                        // Dark Mode

// import React, { useState } from "react";
// import { useTodo } from "../contexts/TodoContext";

// function TodoForm() {
//   const [todo, setTodo] = useState("");
//   const { addTodo } = useTodo();

//   const add = (e) => {
//     e.preventDefault();
//     if (!todo) return;
//     addTodo({ todo, completed: false });
//     setTodo("");
//   };

//   return (
//     <form
//       onSubmit={add}
//       className="flex w-full bg-gray-800 p-3 rounded-lg shadow-lg"
//     >
//       <input
//         type="text"
//         placeholder="Write your task..."
//         className="w-full border border-gray-600 rounded-l-lg px-4 py-2 outline-none bg-gray-700 text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-gray-400"
//         value={todo}
//         onChange={(e) => setTodo(e.target.value)}
//       />
//       <button
//         type="submit"
//         className="rounded-r-lg px-4 py-2 bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all shadow-md"
//       >
//         Add
//       </button>
//     </form>
//   );
// }

// export default TodoForm;



