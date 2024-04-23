import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: Request, response: NextApiResponse) {
  // console.log(request, response);
  // 数据来源可以是：1.mock，2.数据库，3.网络请求。
  const userInfo = {
    name: "zzt",
    age: 18,
  };
  return NextResponse.json(userInfo);
}
