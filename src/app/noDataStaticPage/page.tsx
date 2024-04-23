"use client";
import React, { memo } from "react";
import type { FC, ReactNode } from "react";

interface IProps {
  children?: ReactNode;
}
const NoDataStaticPage: FC<IProps> = memo((props) => {
  return (
    <div>
      <div>NoDataStaticPage</div>
      <div>不带有数据的，静态生成的页面</div>
    </div>
  );
});

NoDataStaticPage.displayName = "NoDataStaticPage";

export default NoDataStaticPage;
