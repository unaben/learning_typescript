import React from "react";

// export interface Item {
//   id: number;
//   title?: string;
//   imageUrl?: string;
//   quote?: string;
// }

// Equality Narrowing (Type included in the interface when there's no unique property) |
// In Operator Narrowing (without type include in the interface)

interface ImageItem {
  id: number;
  type: "imageItem"
  title: string;
  imageUrl: string;
}

interface QuoteItem {
  id: number;
  type: "quoteItem"
  quote: string;
}

export type Item = ImageItem | QuoteItem;

interface ComponentProps {
  items: Item[];
}

export default function Component({ items }: ComponentProps) {
  return (
    <div>
      <ul>
        {items.map((item) => {
          if (item.type === "imageItem")
            return (
              <li key={item.id}>
                {item.title && <h2>{item.title}</h2>}
                {item.imageUrl && (
                  <img
                    style={{ maxWidth: "30rem" }}
                    src={item.imageUrl}
                    alt={item.title}
                  />
                )}
              </li>
            );
          return (
            <li key={item.id}>
              {item.quote && (
                <h2 style={{ fontStyle: "italic" }}>{item.quote}</h2>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
