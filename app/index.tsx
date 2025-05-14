import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { useActionSheet } from '@expo/react-native-action-sheet';

export default function HomeScreen() {
  const router = useRouter();
  const { showActionSheetWithOptions } = useActionSheet();

  const handleShowActionSheet = () => {
    const options = ['Ver Histórico', 'Cancel'];
    const destructiveButtonIndex = 1;
    const cancelButtonIndex = 1;

    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        destructiveButtonIndex,
      },
      (buttonIndex) => {
        if (buttonIndex === 0) {
          router.push('/history');
        }
      }
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Text style={styles.navbarText}> Meu Diário📖</Text>
      </View>

      <View style={styles.header}>
        <Image source={require('../assets/image1.png')} style={styles.headerImage} />
        <Text style={styles.title}>Seu diário de humor 😊</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleShowActionSheet}>
        <Text style={styles.buttonText}>Mostrar Opções </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF3F0',
    alignItems: 'center',
    padding: 20,
    paddingTop: 0,
  },
  navbar: {
    width: '100%',
    height: 60,
    backgroundColor: '#FF80AB',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  navbarText: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 20,
  },
  headerImage: {
    width: 400,
    height: 250,
    resizeMode: 'contain',
    marginBottom: -20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FF4081',
    textAlign: 'center',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#FF4081',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginVertical: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
