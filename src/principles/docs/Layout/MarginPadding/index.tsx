import React from 'react';

import { getCSSPropertyValue } from '../../../../utils';

import styles from './index.module.css';

type LayoutProps = {
    margin: number,
    padding: number
};

const Layout: React.FC<LayoutProps> = ({ margin, padding}) => {
    const marginVar = `--margin-level-${ margin }`;
    const paddingVar = `--padding-level-${ padding }`;

    return (
        <div className={ styles.container }>
            <div className={ styles.marginContainer }>
                <div className={ styles.paddingContainer } style={ { margin: `var(${ marginVar })`, padding: `var(${ paddingVar })` } }>
                    <div className={ styles.valueContainer }>
                        { marginVar } ({ getCSSPropertyValue(marginVar) })
                        <br/>
                        { paddingVar } ({ getCSSPropertyValue(paddingVar) })
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layout;
