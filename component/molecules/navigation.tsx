import { Session } from "inspector";
import { useRouter } from "next/router";
import { ReactNode } from "react";

interface NavigationProps {
  session: Session | null;
  children: ReactNode;
}

//
export const TopNavigation: React.FC<NavigationProps> = ({
  children,
  session,
}) => {
  const router = useRouter();

  // 画面の遷移
  if (session === null) {
    router.push("/");
  }

  return (
    <head>
      <div>
        <nav>{children}</nav>
      </div>
    </head>
  );
};
