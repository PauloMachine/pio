import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './input.styles';
import InputProps from './input.types';


const Input = ({
    label,
    placeholder,
    value,
    onBlur,
    onChange,
    error,
    keyboardType,
}: InputProps) => {
    return (
        <View style={styles.viewForm}>
            <Text style={styles.textLabel}>{label}</Text>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                onBlur={onBlur}
                onChangeText={onChange}
                value={String(value)}
                keyboardType={keyboardType}
            />
            {error && (
                <Text style={styles.textError}>* {error}</Text>
            )}
        </View>
    );
};

export default Input;
