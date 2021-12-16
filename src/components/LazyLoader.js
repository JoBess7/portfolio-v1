import React, { useRef, useEffect } from "react";

export default function LazyLoader(props) {
  const ref = useRef(null);
  const io = useRef(null);

  useEffect(() => {
    if (ref.current) {
      io.current = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.intersectionRatio > props.intersectRatio) {
              ref.current.src = props.src;
              
              io.current.unobserve(ref.current);
            }
          });
        },
        {
          threshold: [0, 0.5, 1]
        }
      );

      io.current.observe(ref.current);
    }

    return () => {
      io.current.unobserve(ref.current);
    };
  }, [ref]);

  return <img ref={ref} className={props.className} alt="" />;
}
