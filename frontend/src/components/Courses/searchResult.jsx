import React from 'react';
import {useLocation,Link, useParams} from "react-router-dom";

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
}
const SearchResult = () => {
const query = useQuery();
const searchQuery = query.get('q')? query.get('q').toLowerCase(): null;
console.log("Search Query", searchQuery)

    return (
        <div>
Hello World

        </div>
    );
};

export default SearchResult;