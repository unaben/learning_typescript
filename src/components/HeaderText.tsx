import React from "react";

interface HeaderTextProps {
  headerText: string;
  extraText?: string; // => ? means optional
}

function HeaderText({
  headerText,
  extraText = "default text",
}: HeaderTextProps) {
  return (
    <div>
      <h1>{headerText}</h1>
      {extraText && <p>{extraText}</p>}
    </div>
  );
}

export default HeaderText;
