import { useEffect, createRef } from "react";

const useOnOutsideClick = (callback: () => void, typeRef: any) => {
  const ref = createRef<typeof typeRef>();

  useEffect(() => {
    const handleClick = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [ref]);

  return ref;
};

export default useOnOutsideClick;
