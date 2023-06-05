import { useEffect } from "react";
export default function useSetTitle(title) {
    useEffect(function () {
        document.title = title;
    }, []);
}
//# sourceMappingURL=useSetTitle.js.map