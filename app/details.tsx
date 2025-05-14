import { View, Text, StyleSheet, Image } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function DetailScreen() {
  const { date, mood } = useLocalSearchParams();

  return (
    <View style={styles.container}>
     
      <Image
        source={require('../assets/image.png')} 
        style={styles.topImage}
      />
      <Image
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/6/65/Emoji_happy_face.png' }} 
        style={styles.image}
      />
      <Text style={styles.title}>Detalhes do Humor 🎉</Text>
      <Text style={styles.text}>Data: {date}</Text>
      <Text style={[styles.text, styles.moodText]}>Humor: {mood}</Text>
      <Text style={styles.emoji}>😊✨💖🌈</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF3E3',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FF4081',
    marginBottom: 20,
    textAlign: 'center',
  },
  text: {
    fontSize: 20,
    color: '#333',
    marginBottom: 15,
  },
  moodText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FF6347',
  },
  emoji: {
    fontSize: 40,
    marginTop: 20,
    textAlign: 'center',
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 30,
  },
  topImage: {
    width: 200,
    height: 200, 
    resizeMode: 'cover',
    marginBottom: 20,
  },
});
