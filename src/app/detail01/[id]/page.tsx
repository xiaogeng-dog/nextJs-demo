"use client";
import React, { memo } from "react";
import type { FC } from "react";

interface IProps {
  params?: any;
  searchParams?: any;
}
const Detail01: FC<IProps> = memo((props) => {
  console.log("router.query:", props); // 没有 params 属性，
  // query 既可以拿到查询字符串，也可以拿到动态路由的 params，如果重复，取动态路由的 params

  const { params } = props;
  console.log("id:", params.id);

  return <div>Detail01</div>;
});

Detail01.displayName = "Detail01";

export default Detail01;
