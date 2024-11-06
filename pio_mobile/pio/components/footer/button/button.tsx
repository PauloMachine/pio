import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './button.styles';
import FooterButtonProps from './button.types';


const FooterButton = ({ title, onPress, disabled = false }: FooterButtonProps) => {
    return (
        <TouchableOpacity
            style={styles.touchableOpacityButton}
            onPress={onPress}
            disabled={disabled}
        >
            <Text style={styles.textButton}>{title}</Text>
        </TouchableOpacity>
    );
};

export default FooterButton;
