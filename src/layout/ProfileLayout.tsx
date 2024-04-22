import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import styles from "./index.module.css";

interface IProps {
  children?: ReactNode;
}
const ProfileLayout: FC<IProps> = memo((props) => {
  return (
    <div>
      <div className={styles["header"]}>header</div>
      {props.children}
      <div className={styles["footer"]}>footer</div>
    </div>
  );
});

ProfileLayout.displayName = "ProfileLayout";
export default ProfileLayout;
