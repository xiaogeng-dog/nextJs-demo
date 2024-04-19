"use client";
import Image from "next/image";
import userImage from "@/assets/images/user.png";
import styles from "@/styles/index.module.scss";

export default function StylePage() {
  return (
    <>
      <h2>全局样式</h2>
      <div className="global-style">全局样式测试</div>
      <div className="global-style2">全局样式测试</div>

      <h2>局部样式</h2>
      <div className={styles["local-style"]}>局部样式测试</div>

      <h2>scss 导出的样式</h2>
      <div style={{ color: styles.primaryColor }}>scss 导出的的样式测试</div>

      <h2>public 静态资源</h2>
      <Image
        src="/feel.png"
        alt="feel"
        width={140}
        height={140}
        priority
      ></Image>
      <div className={styles["box-bg1"]}></div>

      <h2>assets 静态资源</h2>
      <Image src={userImage} alt="userImg" width={140} height={140}></Image>
      <div className={styles["box-bg2"]}></div>

      <h2>字体图标</h2>
      <i className="iconfont icon-bianji"></i>

      <h2>中间件</h2>
      <button onClick={() => onGetJuanpiDataClick()}>get juanpi data</button>
    </>
  );
}

StylePage.displayName = "StylePage";
