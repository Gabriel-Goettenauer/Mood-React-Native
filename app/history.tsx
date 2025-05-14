import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useState, useEffect } from 'react';

export default function HistoryScreen() {
  const router = useRouter();

  const [highlightedId, setHighlightedId] = useState<string | null>(null);

  const data = [
    { id: '1', mood: 'Feliz', date: '2025-01-14' },
    { id: '2', mood: 'Triste', date: '2024-05-13' },
    { id: '3', mood: 'Neutro', date: '2025-05-12' }
  ];

  const getMoodEmoji = (mood: string) => {
    switch (mood) {
      case 'Feliz':
        return '😊';
      case 'Triste':
        return '😢';
      case 'Neutro':
        return '😐';
      default:
        return '🙂';
    }
  };

  useEffect(() => {
    if (highlightedId) {
      const timer = setTimeout(() => {
        setHighlightedId(null); // tira o destaque após 2 segundos
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [highlightedId]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📚 Histórico de Humores</Text>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => {
          const isHighlighted = highlightedId === item.id;

          return (
            <View style={[styles.card, isHighlighted && styles.highlightedCard]}>
              <Text style={styles.moodEmoji}>{getMoodEmoji(item.mood)}</Text>
              <Text style={styles.date}>{item.date}</Text>
              <Text style={styles.mood}>{item.mood}</Text>

              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  setHighlightedId(item.id); // destaca o item
                  router.push(`/details?date=${item.date}&mood=${item.mood}`);
                }}
              >
                <Text style={styles.buttonText}>Ver Detalhes 📖</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF0F6',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#C2185B',
    textAlign: 'center',
    marginBottom: 30,
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 25,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  highlightedCard: {
    backgroundColor: '#FFF176', // amarelo claro para destaque
  },
  moodEmoji: {
    fontSize: 48,
    marginBottom: 10,
  },
  date: {
    fontSize: 16,
    color: '#777',
    marginBottom: 6,
  },
  mood: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#F06292',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 30,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
