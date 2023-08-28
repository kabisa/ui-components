import React from 'react';

import { getCSSPropertyValue } from '../../../../utils';

import styles from './index.module.css';

type BoxShadow = {
    level: number
};

const BoxShadow: React.FC<BoxShadow> = ({ level }) => {
    const elevationVar = `--shadow-level-${ level }`;

    return (
        <div className={ styles.container } style={ { boxShadow: `var(${ elevationVar })` } }>
            { elevationVar } ({ getCSSPropertyValue(elevationVar) })
        </div>
    )
}

export default BoxShadow;
