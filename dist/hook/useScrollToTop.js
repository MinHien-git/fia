import { useEffect } from "react";
export default function useScrollToTop(x, y) {
    useEffect(function () {
        window.scrollTo(x, y);
    });
}
//# sourceMappingURL=useScrollToTop.js.map