import { useEffect, useRef, useState } from "react";

interface Position {
  x: number;
  y: number;
}

const AnimatedBox: React.FC = () => {
  // 获取dom元素
  const boxRef = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const animationFrameId = useRef<number | null>(null);

  const moveBox = () => {
    setPosition((prevPosition) => {
      const newX = prevPosition.x + 1;
      const newY = prevPosition.y + 1;
      if (newX > 50 || newY > 50) {
        return { x: 0, y: 0 };
      }
      return { x: newX, y: newY };
    });
    animationFrameId.current = requestAnimationFrame(moveBox);
  };

  useEffect(() => {
    animationFrameId.current = requestAnimationFrame(moveBox);
    return () => {
      if (animationFrameId.current !== null) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  useEffect(() => {
    if (boxRef.current) {
      boxRef.current.style.transform = `translate(${position.x}px, ${position.y}px)`;
    }
  }, [position]);

  // useEffect相当于watchEffect用于副作用操作
  // return可以调用一个清理函数，当依赖数组中的任意一个值发生变化时，useEffect 会执行清理函数（如果存在），然后执行副作用函数。
  // 无依赖数组：useEffect 在每次组件渲染时都会执行。
  // 空依赖数组：useEffect 仅在组件首次挂载时执行一次。
  // 带依赖项的数组：仅当依赖项发生变化时才执行 useEffect。

  return (
    <div className="box" ref={boxRef}>
      I am a moving box!
    </div>
  );
};

export default AnimatedBox;
