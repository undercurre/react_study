import React, { useState, useLayoutEffect, useRef } from "react";

const LayoutEffectExample: React.FC = () => {
  const [width, setWidth] = useState(0);
  const divRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (divRef.current) {
      setWidth(divRef.current.offsetWidth);
    }
  });

  return (
    <div>
      <div ref={divRef} style={{ width: "50%" }}>
        This div's width is {width}px
      </div>
    </div>
  );
};

export default LayoutEffectExample;
