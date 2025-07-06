import BackgroundCanvas from "@/components/background-canvas";
import React from "react";

const BlogDetailLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <BackgroundCanvas />
      <main className="bg-gray-950 min-h-screen">{children}</main>
    </>
  );
};

export default BlogDetailLayout;
