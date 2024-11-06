import * as React from 'react';
import { View, Text, Image, Alert } from 'react-native';

import { styles } from './header.styles';
import { HeaderProps } from './header.types';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { useLogout } from '../../screens/login/login.hooks';

const Header = ({ title, navigation }: HeaderProps) => {
  const logout = useLogout();

  const onSubmit = async () => {
    try {
      await logout.mutateAsync();
      navigation.navigate('Login');
    } catch (error) {
      Alert.alert('Erro ao deslogar');
    }
  };

  return (
    <View style={styles.viewHeader}>
      <Icon name="arrow-back-ios-new" size={25} color="#fff" onPress={() => navigation.goBack()} />
      <View style={styles.viewTitle}>
        <Image source={require('../../assets/logo.jpeg')} style={styles.imageLogo} />
        <Text style={[styles.textTitle, { marginTop: -15 }]}>{title}</Text>
      </View>
      <Icon name="exit-to-app" size={25} color="#fff" onPress={onSubmit} />
    </View>
  );
}

export default Header;