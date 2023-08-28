import React from 'react';
import classNames from 'classnames';

import styles from './index.module.css';

type PlaygroundProps = {
    name: string;
    color: string;
    fill: boolean;
    fontSize: string;
    fontWeight: string;
};

const Playground: React.FC<PlaygroundProps> = ({ name, color, fill, fontSize, fontWeight}) => (
    <div
        className={ styles.playground }
    >
        <div
            className='material-symbols-rounded'
            style={ {
                color: `var(${ color })`,
                fontSize: `var(${ fontSize })`,
                fontVariationSettings: `
                    'FILL' ${ fill ? '1' : '0' }, 
                    'wght' var(${ fontWeight }),
                    'GRAD' 0,
                    'opsz' 48
                `,
            } }
        >
            { name }
        </div>
    </div>
);

export default Playground;
