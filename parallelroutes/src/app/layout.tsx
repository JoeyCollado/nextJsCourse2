import { ReactNode } from "react";
import "./globals.css";

export const metadata = {
  title: "Members",
  description: "members page",
};

type LayoutProps = {
  children: ReactNode; // default slot
  members: ReactNode; // parallel route @team
  comments: ReactNode; // parallel route @comments
};

const Layout = ({ children, members, comments }: LayoutProps) => {
  return (
    <>
      <html>
        <body>
          <h1>{children}</h1>
          <div className="flex justify-center">
            {comments}
            {members}
          </div>
        </body>
      </html>
    </>
  );
};

export default Layout;
