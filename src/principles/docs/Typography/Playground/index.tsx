import React from 'react';

import { getCSSPropertyValue } from '../../../../utils';

import styles from './index.module.css';

type PlaygroundProps = {
    fontWeight: string;
    fontSize: string;
    sampleText: string;
};

const Playground: React.FC<PlaygroundProps> = ({ fontWeight, fontSize, sampleText }) => {
    const fontWeightVar = `--font-weight-${ fontWeight }`;
    const fontSizeVar = `--font-size-${ fontSize }`;

    return (
        <div
            className={ styles.container }
            style={
                {
                    fontWeight: `var(${ fontWeightVar })`,
                    fontSize: `var(${ fontSizeVar })`,
                }
            }
        >
            { sampleText }
        </div>
    )
}

export default Playground;
