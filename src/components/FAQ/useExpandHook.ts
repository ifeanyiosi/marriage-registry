import { useEffect, useRef, useState } from "react";

const useExpandHook = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [expand, setExpand] = useState<boolean>(false);
  const [contentHeight, setContentHeight] = useState<number>(0);

  useEffect(() => {
    setContentHeight(
      Number(
        contentRef.current?.children[0]
          ?.getBoundingClientRect()
          .height.toFixed(0)
      ) || 0
    );

    const handleResize = () => {
      setContentHeight(
        Number(
          contentRef.current?.children[0]
            ?.getBoundingClientRect()
            .height.toFixed(0)
        ) || 0
      );
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [contentRef]);

  const expansionHandler = () => setExpand(!expand);

  return { expand, contentRef, contentHeight, expansionHandler };
};

export default useExpandHook;
