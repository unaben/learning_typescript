import React from "react";
// import { User } from "../App";

// Generic

// interface DataGridProps {
//   items: User[]
// }

interface Item {
  id: number;
}

interface DataGridProps<T> {
  items: T[];
}

function DataGrid<T extends Item>({ items }: DataGridProps<T>) {
  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{JSON.stringify(item)}</li>
        ))}
      </ul>
    </div>
  );
}

export default DataGrid;
