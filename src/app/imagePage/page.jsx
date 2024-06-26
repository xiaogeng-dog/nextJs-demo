"use client";

import React, { memo } from "react";
import Image from "next/image";
import userImage from "@/assets/images/user.png";

const ImagePage = memo(() => {
  return (
    <div>
      <h2>ImagePage</h2>
      {/* 显示本地图片 */}
      <Image src={userImage} alt="user" priority></Image>

      {/* 显示网络图片，需要手动指定宽、高，并手动配置白名单 */}
      <Image
        src="https://p2.music.126.net/o9A-kJtQuHsLSNrKVOqEhQ==/18890709277132382.jpg?param=140y140"
        alt="网易云音乐图片"
        width={140}
        height={140}
        priority={true}
      ></Image>

      {/* 原生 img 元素的使用 */}
      <picture>
        <img
          src="https://p2.music.126.net/o9A-kJtQuHsLSNrKVOqEhQ==/18890709277132382.jpg?param=140y140"
          alt="网易云音乐图片"
        />
      </picture>

      {/* 填充父容器 */}
      {/* <div className="box">
        <Image
          src="https://p2.music.126.net/o9A-kJtQuHsLSNrKVOqEhQ==/18890709277132382.jpg?param=140y140"
          alt="网易云音乐图片"
          fill
        ></Image>
      </div> */}
    </div>
  );
});

ImagePage.displayName = "ImagePage";

export default ImagePage;
