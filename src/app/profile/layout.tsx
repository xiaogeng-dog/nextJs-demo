import Link from "next/link";
import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import { Button } from "antd";

interface IProps {
  children?: ReactNode;
}
const ProfileLayout: FC<IProps> = memo((props) => {
  const { children } = props;

  return (
    <div>
      <div>ProfileLayout</div>
      <Link href={"/profile"}>
        <Button>profile</Button>
      </Link>
      <Link href={"/profile/login"}>
        <Button>login</Button>
      </Link>
      <Link href={"/profile/register"}>
        <Button>register</Button>
      </Link>
      {children}
    </div>
  );
});

ProfileLayout.displayName = "ProfileLayout";

export default ProfileLayout;
