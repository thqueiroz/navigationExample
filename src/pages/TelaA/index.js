import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';

const TelaA = () => {
  const navigation = useNavigation();

  //function for handler to screen b
  const handleNavigate = useCallback(() => {
    navigation.navigate('TelaB');
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleNavigate}>
        <Text>Navegar para tela B</Text>
      </TouchableOpacity>
    </View>
  );
}

export default TelaA;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
  },
});