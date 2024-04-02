import React from "react";
import NavigationText from "../atoms/text-hovered-color";
import Link from "next/link";

interface LinkNavigationMenu {
  children: React.ReactNode;
  link: string;
}

const LinkNavigationMenu: React.FC<LinkNavigationMenu> = ({
  children,
  link,
}) => {
  return (
    <div className='ml-4 hover:bg-slate-400 rounded-md'>
      <NavigationText>
        <Link href={`${link}`}>{children}</Link>
      </NavigationText>
    </div>
  );
};

export default LinkNavigationMenu;
