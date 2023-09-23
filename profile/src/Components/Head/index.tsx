import React from "react";

type HeadProps = {
  title: string;
  description: string;
};
export function Head({ title, description }: HeadProps) {
  React.useEffect(() => {
    document.title = title + " | Corps Parle";
    document
      ?.querySelector("meta[name='description']")
      ?.setAttribute("content", description || "");
  }, [title, description]);
  return <></>;
}
