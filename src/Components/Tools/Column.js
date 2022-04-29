import React from 'react';
import {View} from 'react-native';
import styles from '../style'
import PropTypes from 'prop-types';

function Column ({children}) {
    return(
        <view style={styles.column}>
         {children}
        </view>
    );
}

Column.PropTypes = {
    children: PropTypes.node.isRequired,
}

export default column;
