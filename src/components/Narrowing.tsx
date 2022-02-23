import React from "react";
import Component, {Item} from "./Component";

export default function Narrowing() {
  const items: Item[] = [
    {
      id: 1,
      title: "A Nice Sunset Image",
      type:"imageItem",
      imageUrl:
        "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 2,
      type:"quoteItem",
      quote:
        " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  ];
return <Component items={items} />
}
