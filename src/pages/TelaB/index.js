import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, TouchableOpacity, Text, StyleSheet  } from 'react-native';


const TelaB = () => {
  const navigation = useNavigation();

  //function for handler to screen c
  const handleNavigate = useCallback(() => {
    navigation.navigate('TelaC');
  }, []);

  //back the page
  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleNavigate}>
        <Text>Navegar para tela C</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleGoBack}>
        <Text>Voltar uma tela</Text>
      </TouchableOpacity>
    </View>
  );
}

export default TelaB;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
  },
});