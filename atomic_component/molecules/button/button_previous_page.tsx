"use client";
import { useRouter } from "next/navigation";
import React from "react";

// CLIENT COMPONENT

interface ButtonPreviousPageProps {
  children: React.ReactNode;
}

const ButtonPreviousPage: React.FC<ButtonPreviousPageProps> = ({
  children,
}) => {
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };

  // TODO: ButtonのCSSを整える、、、atoms/配下のButtonを使用する
  return <button onClick={handleClick}>{children}</button>;
};

export default ButtonPreviousPage;
