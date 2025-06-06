import { ReactNode } from "react";
import "../globals.css";

type LayoutProps = {
  children: ReactNode;
  team: ReactNode;
  comments: ReactNode;
};

export const metadata = {
  title: "Members",
  description: "members page",
};

const Layout = ({ children, team, comments }: LayoutProps) => {
  return (
    <>
      <section>{children}</section>
      <section className="border p-[10rem] w-[30rem]">{team}</section>
      <section className="border p-[10rem] w-[30rem]">{comments}</section>
    </>
  );
};

export default Layout;