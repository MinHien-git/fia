import { useEffect } from "react";
export default function useScrollToTop(x: number, y: number) {
  useEffect(() => {
    window.scrollTo(x, y);
  });
}
