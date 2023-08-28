import React from 'react';
import classNames from 'classnames';

import Input from '../../atoms/Input';

import '../../principles/icons.css';
import styles from './index.module.css';

type SearchInputProps = JSX.IntrinsicElements['input'] & {
    suggestions?: string[]
}

const SearchInput: React.FC<SearchInputProps> = ({ suggestions, ...props } ) => (
    <div
        className={ styles.container }
    >
        <Input
            type='search'
            list={ styles.container }
            { ...props }
        />
        <span className={ classNames('material-symbols-rounded') }>
            search
        </span>

        { suggestions && suggestions.length > 0 && (
            <datalist id={ styles.container }>
                { suggestions.map( suggestion => (
                    <option value={ suggestion }/>
                ))}
            </datalist>
        ) }
    </div>
);

export default SearchInput;
