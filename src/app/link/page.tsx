"use client";
import React, { memo, useEffect } from "react";
import type { FC, ReactNode } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "antd";
interface IProps {
  children?: ReactNode;
}
const More: FC<IProps> = memo((props) => {
  const router = useRouter();

  const onFindClick = () => {
    // router.push('/find')
    // router.push({
    //   pathname: "/find",
    //   query: {
    //     id: 1000,
    //   },
    // });
    // router.push("https://www.jd.com");
    // 区别名
    router.push("/find?id=1000");
  };

  return (
    <div>
      <div className="router-link">
        <Link href="/">
          <Button type="primary">home</Button>
        </Link>

        <Link href="/category">
          <Button type="primary">category</Button>
        </Link>

        <Link
          href={{
            pathname: "/cart",
            query: {
              count: 100,
            },
          }}
        >
          <Button type="primary">cart</Button>
        </Link>

        {/* 外部地址 */}
        <Link href="https://www.jd.com" target="_blank">
          <Button type="primary">京东</Button>
        </Link>

        {/* as: 是给路径 起一个 别名 */}
        <Link href="/profile">
          <Button type="primary">profile</Button>
        </Link>

        {/* replace */}
        <Link href="/more" replace>
          <Button type="primary">more replace</Button>
        </Link>

        <h2>编程导航</h2>
        <Button type="primary" onClick={() => onFindClick()}>
          find
        </Button>
        <Button type="primary" onClick={() => router.back()}>
          返回
        </Button>

        <h2>动态路由</h2>
        {/* 一级动态路由 */}
        <Link href="/detail01/666" replace>
          <Button type="primary">detail01/666</Button>
        </Link>

        {/* 二级动态路由 */}
        <Link href="/detail02/admin/233" replace>
          <Button type="primary">detail02/admin/233</Button>
        </Link>
        {/* 全匹配路由 */}
        <Link href="/detail03/admin/233" replace>
          <Button type="primary">detail03/admin/233</Button>
        </Link>

        <h2>生命周期</h2>
        <Link href={"/lifecycle-class"}>
          <Button type="primary">lifecycle-class</Button>
        </Link>
        <Link href={"/lifecycle-func"}>
          <Button type="primary">lifecycle-func</Button>
        </Link>

        <h2>网络请求</h2>
        <Link href="/fetch">
          <Button type="primary">fetch</Button>
        </Link>

        <h2>静态生成</h2>
        <Link href="/books-ssg">
          <Button type="primary">books-ssg</Button>
        </Link>
        <Link href="/books-detail-ssg">
          <Button type="primary">books-detail-ssg</Button>
        </Link>

        <h2>服务端渲染</h2>
        <Link href="/books-ssr">
          <Button type="primary">books-ssr</Button>
        </Link>
        <h2>静态增量再生</h2>
        <Link href="/books-isr">
          <Button type="primary">books-isr</Button>
        </Link>
        <h2>客户端渲染</h2>
        <Link href="/books-csr">
          <Button type="primary">books-csr</Button>
        </Link>
      </div>

      {/* {cn === 'Cart' ? (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  ) : cn === 'Profile' ? (
    <ProfileLayout>
      <Component {...pageProps} />
    </ProfileLayout>
  ) : (
    <Component {...pageProps} />
  )} */}

      {/* {getLayout(<Component {...pageProps} />)} */}
    </div>
  );
});

More.displayName = "More";

export default More;
