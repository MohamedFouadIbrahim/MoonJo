import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { colors, spacing } from '../../constants/theme'
import Icon from '../Icon';

interface HeaderProps {
  title: string,
  rightIcon?: React.ReactElement | undefined,
  leftIcon?: React.ReactElement | undefined
}

const Header = (props: HeaderProps) => {

  const {
    title,
    leftIcon,
    rightIcon
  } = props

  return (
    <View style={styles.container}>

      <TouchableOpacity testID='leftIcon' onPress={() => { }} >
        <Icon name='magnifying-glass' />
      </TouchableOpacity>

      <Text testID='headerTitle' >{title}</Text>

      <TouchableOpacity testID='rightIcon' onPress={() => { }} >
        <Icon name='menu' />
      </TouchableOpacity>


    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: spacing.medumPadding,
    alignItems: 'center',
    justifyContent: 'space-between',
    ...colors.shadow
  }
});
