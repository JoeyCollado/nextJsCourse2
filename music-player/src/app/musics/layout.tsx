import React, { ReactNode } from "react";

const MusicLayout = ({
  children,
  sidebar,
  songs,
  player,
}: {
  children: ReactNode;
  sidebar: ReactNode;
  songs: ReactNode;
  player: ReactNode;
}) => {
  return (
    <div className="flex">
      {sidebar}
      <div className="flex-1 p-6w">{player} {songs}</div>
      {children}
    </div>
  );
};

export default MusicLayout;
