import "./globals.css";
import React, { useState } from "react";
import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import Layout from "../component/layout";
import { Todo } from "../lib/model";
import { Footer, Navbar } from "@/components";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Car Rent",
  description: "Discover best cars in the world",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
  // const [todo, setTodo] = useState<string>("");
  // const [todos, setTodos] = useState<Todo[]>([]);

  // const handleAdd = (e: React.FormEvent) => {
  //   e.preventDefault();

  //   if (todo) {
  //     setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
  //     setTodo("");
  //   }
  // };

  // console.log(todo);
  return (
    <div className="App">
      <span className="heading">Hellow</span>
      {/* <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      {/* TodoList */}
      {/* {todos.map((t) => ( */}
      {/* <li key={t.id}>{t.todo}</li> */}
      {/* ))} */}
      {/* ; */}
    </div>
  );
}

// const App: React.FC = () => {
//   const [todo, setTodo] = useState<string>("");
//   const [todos, setTodos] = useState<Todo[]>([]);

//   const handleAdd = (e: React.FormEvent) => {
//     e.preventDefault();

//     if (todo) {
//       setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
//       setTodo("");
//     }
//   };

//   console.log(todo);

//   return (
//     <div className="App">
//       <span className="heading">Hellow</span>
//       <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
//       {/* TodoList */}
//       {todos.map((t) => (
//         <li key={t.id}>{t.todo}</li>
//       ))}
//       ;
//     </div>
//   );
// };

// export default RootLayout;
