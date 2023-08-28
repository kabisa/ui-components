import React from 'react';

import styles from './index.module.css';

const Example: React.FC = () => {
    const examples = [
        'delete',
        'close',
        'search',
        'settings',
        'add',
    ];

    return (
        <div
            className={ styles.container }
        >
            { examples.map( (example, index) => (
                <div key={ index } className={ styles.example }>
                    <span className='material-symbols-rounded'>{ example }</span>
                    <span className={ styles.text }>{ example }</span>
                </div>
            )) }
        </div>
    );
}

export default Example;
