import React, { FC } from "react";
import "./Button.css";

export interface ButtonProps {
  color?: string;
  type?: "primary" | "success" | "error";
  size?: "small" | "medium" | "big";
  children: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const Button: FC<ButtonProps> = ({
  color,
  type,
  size,
  children,
  onClick,
  ...props
}) => {
  const styles = ["btn"];

  if (size === "big") {
    styles.push("btn-big");
  } else if (size === "small") {
    styles.push("btn-small");
  } else if (size === "medium") {
    styles.push("btn-medium");
  }

  if(type === "primary") {
    styles.push("primary");
  } else if (type === "success") {
    styles.push("success");
  } else if (type === "error") {
    styles.push("error");
  }

  return (
    <button
      {...props}
      onClick={onClick}
      className={styles.join(" ")}
      style={{ color: `${color}` }}
    >
      {children}
    </button>
  );
};
