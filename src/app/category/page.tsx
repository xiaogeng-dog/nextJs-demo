"use client";
import React, { memo } from "react";
import type { FC, ReactNode } from "react";

interface IProps {
  children?: ReactNode;
}
const category: FC<IProps> = memo((props) => {
  console.log(props);
  return <div>category</div>;
});

category.displayName = "category";

export default category;
