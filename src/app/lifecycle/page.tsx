"use client";
import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import type { ReactElement } from "react";
import Layout from "@/layout";
import ProfileLayout from "@/layout/ProfileLayout";
import Link from "next/link";
import { Button } from "antd";

export interface IStaticProps {
  getLayout?: (page: ReactElement) => ReactElement;
}

interface IProps {
  children?: ReactNode;
}
const Lifecycle: FC<IProps> & IStaticProps = memo((props) => {
  return (
    <div>
      <h2>Lifecycle</h2>
      <Link href={"/lifecycle/lifeClass"}>
        <Button>Lifecycle Class</Button>
      </Link>
      <Link href={"/lifecycle/lifeFunction"}>
        <Button>Lifecycle Function</Button>
      </Link>
    </div>
  );
});

Lifecycle.displayName = "Lifecycle";

Lifecycle.getLayout = (page: ReactElement) => (
  <Layout>
    <ProfileLayout>{page}</ProfileLayout>
  </Layout>
);
export default Lifecycle;
