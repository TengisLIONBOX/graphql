// "use client";

// import { Car } from "@/services/carent-service";
// import { gql, useLazyQuery, useMutation, useQuery } from "@apollo/client";
// import { useState } from "react";

// const GET_TODO_LIST = gql`
//   query GetTodoList {
//     getTodoList {
//       id
//       title
//       completed
//     }
//   }
// `;

// const GET_TODO = gql`
//   query GetTodo($id: ID!) {
//     getTodo(id: $id) {
//       id
//       title
//       completed
//     }
//   }
// `;

// const CREATE_TODO = gql`
//   mutation CreateTodoMutation($input: TodoCreateInput!) {
//     createTodo(input: $input) {
//       id
//       title
//       completed
//     }
//   }
// `;

// const DELETE_TODO = gql`
//   mutation DeleteTodoMutation($id: ID!) {
//     deleteTodo(id: $id) {
//       id
//       title
//       completed
//     }
//   }
// `;

// const UPDATE_TODO = gql`
//   mutation UpdateTodoMutation($input: TodoUpdateInput!) {
//     updateTodo(input: $input) {
//       id
//       title
//       completed
//     }
//   }
// `;

// export default function Home() {
//   const [title, setTitle] = useState("");
//   const [selectedTodoId, setSelectedTodoId] = useState<string | null>(null);

//   const { data, loading, error } = useQuery(GET_TODO_LIST);
//   const [createTodo] = useMutation(CREATE_TODO, {
//     refetchQueries: [{ query: GET_TODO_LIST }],
//   });
//   const [getTodo] = useLazyQuery(GET_TODO);
//   const [deleteTodo] = useMutation(DELETE_TODO, {
//     refetchQueries: [{ query: GET_TODO_LIST }],
//   });
//   const [updateTodo] = useMutation(UPDATE_TODO, {
//     refetchQueries: [{ query: GET_TODO_LIST }],
//   });

//   if (loading) return <>Loading...</>;
//   if (error) return <>{error.message}...</>;

//   const { getTodoList } = data;

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     createTodo({
//       variables: {
//         input: {
//           title,
//           completed: false,
//         },
//       },
//     });
//     setTitle("");
//   };

//   const handleItemClick = (id: string) => {
//     getTodo({
//       variables: {
//         id,
//       },
//     });
//     setSelectedTodoId(id);
//   };

//   const handleDeleteClick = (id: string) => {
//     deleteTodo({
//       variables: {
//         id,
//       },
//     });
//   };

//   const handleUpdateClick = (id: string) => {
//     let newTitle = window.prompt("New Title here");

//     if (newTitle) {
//       updateTodo({
//         variables: {
//           input: {
//             id: id,
//             title: newTitle,
//             completed: true,
//           },
//         },
//       });
//     }
//     console.log("id:", id);
//     console.log("title:", newTitle);
//   };

//   return (
//     <div>
//       <h1>
//         {getTodoList.find((todo: Todo) => todo.id === selectedTodoId)?.title}
//       </h1>

//       <div className="list-disc pl-5 mb-5">
//         {getTodoList.map((todo: Todo) => (
//           <div key={todo.id}>
//             <div
//               className="cursor-pointer hover:underline"
//               onClick={() => handleItemClick(todo.id)}
//             >
//               {todo.title}
//             </div>
//             <button
//               className="btn"
//               onClick={(e) => {
//                 e.stopPropagation();
//                 handleDeleteClick(todo.id);
//               }}
//             >
//               Delete
//             </button>
//             <button
//               className="btn"
//               onClick={() => {
//                 handleUpdateClick(todo.id);
//               }}
//             >
//               Edit
//             </button>
//           </div>
//         ))}
//       </div>
//       <form onSubmit={handleSubmit} className="flex">
//         <input
//           type="text"
//           placeholder="Type here"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           className="input input-bordered w-full max-w-xs"
//         />
//         <button className="btn">Button</button>
//       </form>
//     </div>
//   );
// }
