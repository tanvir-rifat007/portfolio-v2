import React, { PropsWithChildren } from "react";

const HeroOrbit = ({
  children,
  size,
  rotation,
}: PropsWithChildren<{
  size: number;
  rotation: number;
}>) => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
      <div
        className="flex items-start justify-start"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          transform: `rotate(${rotation}deg)`,
        }}
      >
        <div
          className="inline-flex"
          style={{
            transform: `rotate(${-rotation}deg)`,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default HeroOrbit;
