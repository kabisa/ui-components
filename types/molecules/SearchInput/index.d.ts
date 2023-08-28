import React from 'react';
import '../../principles/icons.css';
type SearchInputProps = JSX.IntrinsicElements['input'] & {
    suggestions?: string[];
};
declare const SearchInput: React.FC<SearchInputProps>;
export default SearchInput;
