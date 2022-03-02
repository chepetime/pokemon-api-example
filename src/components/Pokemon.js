import React from "react";

export default function Pokemon({ name, ...props }) {
  return <div>{name}</div>;
}
