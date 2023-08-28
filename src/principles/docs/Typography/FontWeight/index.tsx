import React from 'react';

import { getCSSPropertyValue } from '../../../../utils';

import styles from './index.module.css';

type FontSizeProps = {
    fontWeights: string[],
    sampleText: string
};

const FontWeight: React.FC<FontSizeProps> = ({ fontWeights, sampleText }) => {
    const fontWeightVar = (weight: string) => `--font-weight-${ weight }`;

    return (
        <div className={ styles.container }>
            {
                fontWeights.map((fontWeight) => (
                    <>
                        <span
                            className={ styles.value }
                        >
                            { fontWeightVar(fontWeight) } ({ getCSSPropertyValue(fontWeightVar(fontWeight)) })
                        </span>
                        <span
                            className={ styles.example }
                            style={ { fontWeight: `var(${ fontWeightVar(fontWeight) })` } }
                        >
                            { sampleText }
                        </span>
                    </>
                ))
            }
        </div>
    )
}

export default FontWeight;
