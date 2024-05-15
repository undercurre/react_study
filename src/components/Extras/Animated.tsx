import React, { useState, CSSProperties } from "react";
// 如何使用第三方动画库
import { useSpring, animated } from "@react-spring/web";

const PhotoPreview: React.FC = () => {
  const [animValue, setAnimValue] = useState(0);

  const handleClick = () => {
    setAnimValue((prevValue) => prevValue + 1);
  };

  const rotateDegree = (animValue % 4) * 90; // 每次增加 90 度

  const springProps = useSpring({
    to: { transform: `rotate(${rotateDegree}deg)` },
    config: { tension: 200, friction: 20 },
  });

  const divStyle: CSSProperties = {
    width: "40px",
    height: "40px",
  };

  return (
    <div>
      <button onClick={handleClick}>向右翻转</button>
      <animated.div style={springProps} className="preview-wrapper">
        {/* 如何调用内联样式 */}
        <img
          style={divStyle}
          alt="img"
          src="http://gips2.baidu.com/it/u=195724436,3554684702&fm=3028&app=3028&f=JPEG&fmt=auto?w=1280&h=960"
        />
      </animated.div>
    </div>
  );
};

export default PhotoPreview;
