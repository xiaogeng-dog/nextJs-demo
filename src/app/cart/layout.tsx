"use client";
export default function CartLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    tag: string;
    item: string;
  };
}) {
  console.log(children, params);
  return (
    <section>
      <div>11111</div>
      {children}
    </section>
  );
}
