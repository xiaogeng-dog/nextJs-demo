"use client";
import React, { memo } from "react";
import type { FC, ReactNode } from "react";

interface IProps {
  params?: any;
  searchParams?: object;
}
const Detail03NotFound: FC<IProps> = memo((props) => {
  console.log("router.query:", props); // 没有 params 属性，
  // query 既可以拿到查询字符串，也可以拿到动态路由的 params，如果重复，取动态路由的 params

  const { params } = props;
  console.log("id:", params.id);

  return <div>404 Detail03 Not Found ~</div>;
});

Detail03NotFound.displayName = "Detail03NotFound";

export default Detail03NotFound;
