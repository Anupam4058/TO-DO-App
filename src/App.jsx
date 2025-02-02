// import { useEffect, useState } from "react";
// import "./App.css";
// import { TodoProvider } from "./contexts";
// import { TodoForm,TodoItem } from "./components";

// function App() {
//   const [todos, setTodos] = useState([])

//   const addTodo = (todo) => {
//     setTodos((prev) => [{id: Date.now(), ...todo}, ...prev])
//   }

//   const updateTodo = (id, todo) => {
//     setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
//   }

//   const deleteTodo = (id) => {
//     setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id))   //code change
//   }

//   const toggleComplete = (id) => {
//     setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo))
//   }

//   useEffect(() => {
//     const todos = JSON.parse(localStorage.getItem("todos"))
//     if (todos && todos.length > 0) {
//       setTodos(todos)
//     }
//   }, [])

//   useEffect(() => {
//     localStorage.setItem("todos", JSON.stringify(todos))
//   }, [todos])

//   return (
//     <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
//       <div className="bg-[#172842] min-h-screen py-8">
//         <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
//           <h1 className="text-2xl font-bold text-center mb-8 mt-2">
//             Manage Your Todos
//           </h1>
//           <div className="mb-4">
//             {/* Todo form goes here */}
//             <TodoForm />
//             </div>
//           <div className="flex flex-wrap gap-y-3">
//             {/*Loop and Add TodoItem here */}
//             {todos.map((todo) => (
//               <div key={todo.id} className="w-full">
//                 <TodoItem todo={todo}/>
//               </div>
//             ))}
            
//           </div>
//         </div>
//       </div>
//     </TodoProvider>
//   );
// }

// export default App;



// import { useEffect, useState } from "react";
// import "./App.css";
// import { TodoProvider } from "./contexts";
// import { TodoForm, TodoItem } from "./components";

// function App() {
//   const [todos, setTodos] = useState([]);

//   const addTodo = (todo) => {
//     setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
//   };

//   const updateTodo = (id, todo) => {
//     setTodos((prev) =>
//       prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
//     );
//   };

//   const deleteTodo = (id) => {
//     setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id));
//   };

//   const toggleComplete = (id) => {
//     setTodos((prev) =>
//       prev.map((prevTodo) =>
//         prevTodo.id === id
//           ? { ...prevTodo, completed: !prevTodo.completed }
//           : prevTodo
//       )
//     );
//   };

//   useEffect(() => {
//     const todos = JSON.parse(localStorage.getItem("todos"));
//     if (todos && todos.length > 0) {
//       setTodos(todos);
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("todos", JSON.stringify(todos));
//   }, [todos]);

//   return (
//     <TodoProvider
//       value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
//     >
//       <div className="min-h-screen py-8 flex justify-center items-center bg-gradient-to-r from-pink-300 via-purple-300 to-pink-300 animate-gradient-x">
//         <div className="w-full max-w-2xl mx-auto shadow-lg rounded-lg px-6 py-4 text-pink-900 bg-white bg-opacity-80 backdrop-blur-md">
//           <h1 className="text-3xl font-bold text-center mb-8 mt-2 text-pink-700">
//             Barbie's Todo List 💕
//           </h1>
//           <div className="mb-4">
//             <TodoForm />
//           </div>
//           <div className="flex flex-wrap gap-y-3">
//             {todos.map((todo) => (
//               <div key={todo.id} className="w-full">
//                 <TodoItem todo={todo} />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </TodoProvider>
//   );
// }

// export default App;





import { useEffect, useState } from "react";
import "./App.css";
import { TodoProvider } from "./contexts";
import { TodoForm, TodoItem } from "./components";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos && storedTodos.length > 0) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="min-h-screen py-8 flex justify-center items-center bg-gradient-to-r from-pink-300 via-purple-300 to-pink-300 animate-gradient-x">
        <div className="w-full max-w-2xl mx-auto shadow-lg rounded-lg px-6 py-4 text-pink-900 bg-white bg-opacity-80 backdrop-blur-md">
          <h1 className="text-3xl font-bold text-center mb-8 mt-2 text-pink-700">
            Barbie's Todo List 💕
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

 export default App;

                                                                        // Dark Mode
// import { useEffect, useState } from "react";
// import "./App.css";
// import { TodoProvider } from "./contexts";
// import { TodoForm, TodoItem } from "./components";

// function App() {
//   const [todos, setTodos] = useState([]);

//   const addTodo = (todo) => {
//     setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
//   };

//   const updateTodo = (id, todo) => {
//     setTodos((prev) =>
//       prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
//     );
//   };

//   const deleteTodo = (id) => {
//     setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id));
//   };

//   const toggleComplete = (id) => {
//     setTodos((prev) =>
//       prev.map((prevTodo) =>
//         prevTodo.id === id
//           ? { ...prevTodo, completed: !prevTodo.completed }
//           : prevTodo
//       )
//     );
//   };

//   useEffect(() => {
//     const storedTodos = JSON.parse(localStorage.getItem("todos"));
//     if (storedTodos && storedTodos.length > 0) {
//       setTodos(storedTodos);
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("todos", JSON.stringify(todos));
//   }, [todos]);

//   return (
//     <TodoProvider
//       value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
//     >
//       <div className="min-h-screen py-8 flex justify-center items-center bg-gradient-to-r from-gray-800 via-black to-gray-800 animate-gradient-x">
//         <div className="w-full max-w-2xl mx-auto shadow-lg rounded-lg px-6 py-4 text-gray-100 bg-gray-900 bg-opacity-80 backdrop-blur-md">
//           <h1 className="text-3xl font-bold text-center mb-8 mt-2 text-white">
//             Todo List
//           </h1>
//           <div className="mb-4">
//             <TodoForm />
//           </div>
//           <div className="flex flex-wrap gap-y-3">
//             {todos.map((todo) => (
//               <div key={todo.id} className="w-full">
//                 <TodoItem todo={todo} />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </TodoProvider>
//   );
// }

// export default App;


