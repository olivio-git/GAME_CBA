import React from "react";
import Header from "./header.png";

interface WrapperArtProps {
  children: React.ReactNode;
}
export const WrapperArt = ({ children }: WrapperArtProps) => {
  return (
    <React.Fragment>
      <section
        className="w-full flex items-center justify-center"
        style={{
          backgroundImage: `url(${Header})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "rgba(45, 45, 45, 0.5)",
          backgroundBlendMode: "overlay",
        }}
      >
        {children}
      </section>
    </React.Fragment>
  );
};
