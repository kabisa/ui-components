import React from 'react';

import { getCSSPropertyValue } from '../../../../utils';

import styles from './index.module.css';

type FontSizeProps = {
    fontSizes: string[],
    sampleText: string
};

const FontSize: React.FC<FontSizeProps> = ({ fontSizes, sampleText }) => {
    const fontSizeVar = (size: string) => `--font-size-${ size }`;

    return (
        <div className={ styles.container }>
            {
                fontSizes.map((fontSize) => (
                    <>
                        <span
                            className={ styles.value }
                        >
                            { fontSizeVar(fontSize) } ({ getCSSPropertyValue(fontSizeVar(fontSize)) })
                        </span>
                        <span
                            className={ styles.example }
                            style={ { fontSize: `var(${ fontSizeVar(fontSize) })` } }
                        >
                            { sampleText }
                        </span>
                    </>
                ))
            }
        </div>
    )
}

export default FontSize;
