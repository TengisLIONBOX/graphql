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

import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}
