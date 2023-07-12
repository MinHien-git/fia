import React, { useState } from "react";
export var SearchContext = React.createContext(null);
export function SearchProvider(_a) {
    var children = _a.children;
    var _b = useState(undefined), search = _b[0], setSearch = _b[1];
    var clearSearch = function () {
        if (search) {
            setSearch(undefined);
        }
    };
    var startSearch = function (search_param) {
        setSearch(search_param);
    };
    return (React.createElement(SearchContext.Provider, { value: { search: search, clearSearch: clearSearch, startSearch: startSearch } }, children));
}
//# sourceMappingURL=searchContext.js.map