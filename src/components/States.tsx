import React, { useState } from "react";
import { User } from "./Interfaces";

// interface Address{
//     street: string;
//     number: number;
//     postCode: string
// }

// interface User {
//   name: string;
//   country: string;
//   age: number;
//   address: Address,
//   admin: boolean;
// } => moved  both  Interfaces.tsx

function States() {
  const [users, setUsers] = useState<User | null>(null);

  const fetchUser = () =>
    setUsers({
      name: "Nathan",
      country: "England",
      age: 30,
      address: {
        street: "Broad St.",
        number: 23,
        postCode: "B12 3Rt",
      },
      admin: false,
    });

  return (
    <div>
      <ul>
        <button onClick={fetchUser}>fetch user on click</button>
        {users && <li>{`Welcome ${users.name} from ${users.country}`}</li>}
      </ul>
    </div>
  );
}

export default States;
