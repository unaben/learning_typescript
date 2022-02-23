import React from "react";
import "./App.css";
import DataGrid from "./components/DataGrid";
import Enum from "./components/Enum";
import Forms from "./components/Forms";
import HeaderText from "./components/HeaderText";
import Narrowing from "./components/Narrowing";
import States from "./components/States";

// export interface User {
//   id: number;
//   name: string;
//   age: number;
// }

function App() {
  // const users: User[] = [
  const users = [
    { id: 1, name: "John", age: 55 },
    { id: 2, name: "Mitchel", age: 23 },
    { id: 2, name: "Mike", age: 50 },
  ];

  const orders = [
    { id: 1, quantity: 5, amount: 75 },
    { id: 2, quantity: 2, amount: 23 },
    { id: 3, quantity: 1, amount: 40 },
  ];

  const headerContent = "This is a header";
  const extraContent = "Some extra text";
  return (
    <div>
      <HeaderText headerText={headerContent} extraText={extraContent} />
      <br />
      <Narrowing />
      <br />
      <States />
      <br />
      <Forms />
      <br />
      <Enum />
      <br />
      <DataGrid items={users} />
      <br />
      <DataGrid items={orders} />
    </div>
  );
}

export default App;
