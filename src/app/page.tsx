import { Button, Space, Divider } from "antd";
import Image from "next/image";

const Page = function Page() {
  return (
    <>
      <section
        style={{
          textAlign: "center",
          marginTop: 48,
          marginBottom: 40,
          padding: 100,
        }}
      >
        <Space align="start">
          <Image
            width={40}
            height={40}
            src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
            alt="Ant Design"
          ></Image>
          <h2 style={{ marginBottom: 0 }}>
            Ant Design (Without Sub Components)
          </h2>
        </Space>
        <Divider style={{ marginBottom: 60 }}>Divider</Divider>
        <Space>
          <Button type="primary" block href="/antd">
            这是一个跳转antd示例跳转按钮
          </Button>
          <Button type="primary" block href="/imagePage">
            这是一个Image组件示例跳转按钮
          </Button>
          <Button type="primary" block href="/stylePage">
            这是一个CSS样式示例跳转按钮
          </Button>
          <Button type="primary" block href="/link">
            这是一个Link示例跳转按钮
          </Button>
          <Button type="primary" block href="/lifecycle">
            这是一个生命周期示例跳转按钮
          </Button>
        </Space>
      </section>
    </>
  );
};

export default Page;
