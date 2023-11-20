import { FC, ReactNode } from "react";

interface ILayout {
  children: ReactNode;
}

const Layout: FC<ILayout> = (props) => {
  const { children } = props;

  return <main className="min-h-screen w-full flex-center">{children}</main>;
};

export default Layout;
