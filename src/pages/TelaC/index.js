import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const TelaC = () => {
  const navigation = useNavigation();
  //back the page
  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleGoBack}>
        <Text>Voltar uma tela</Text>
      </TouchableOpacity>
    </View>
  );
}

export default TelaC;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
  },
});