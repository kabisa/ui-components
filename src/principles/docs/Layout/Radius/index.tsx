import React from 'react';

import { getCSSPropertyValue } from '../../../../utils';

import styles from './index.module.css';

type RadiusProps = {
    level: number
};

const Radius: React.FC<RadiusProps> = ({ level }) => {
    const radiusVar = `--radii-level-${ level }`;

    return (
        <div className={ styles.container }>
            <div className={ styles.radiusContainer } >
                <div className={ styles.valueContainer } style={ { borderRadius: `var(${ radiusVar })` } }>
                    { radiusVar } ({ getCSSPropertyValue(radiusVar) })
                </div>
            </div>
        </div>
    )
}

export default Radius;
