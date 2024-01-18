import React, { ChangeEvent, FC } from "react";
import "./Input.css";

export interface Input {
  placeholder: string;
  size?: "small" | "medium" | "large";
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input: FC<Input> = ({ placeholder, onChange, size, ...props }) => {
  const styles = ["input"];

  if (size === "small") {
    styles.push("input-small");
  } else if (size === "medium") {
    styles.push("input-medium");
  } else if (size === "large") {
    styles.push("input-large");
  }
  return (
    <input
      {...props}
      onChange={onChange}
      placeholder={placeholder}
      className={styles.join(" ")}
    />
  );
};
