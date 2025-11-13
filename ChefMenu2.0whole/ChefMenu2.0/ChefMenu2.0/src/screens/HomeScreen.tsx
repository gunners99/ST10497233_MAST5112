import React, { useContext, useMemo } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { MenuContext } from '../context/MenuContext';
import MenuItemCard from '../components/MenuItemCard';
import { MenuItem } from '../types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  Filter: undefined;
  AddItem: undefined;
};

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const ctx = useContext(MenuContext);
  if (!ctx) return null;
  
  // 1. Get 'courses' from the context
  const { menuItems, removeItem, courses } = ctx;

  // 2. Add the 'useMemo' hook to calculate stats
  const courseStats = useMemo(() => {
    // Loop over each course name (e.g., 'Starter', 'Main')
    return courses.map(course => {
      // Find all items that match that course
      const itemsInCourse = menuItems.filter(item => item.course === course);
      
      // Calculate the total price for this course
      const total = itemsInCourse.reduce((sum, item) => sum + item.price, 0);
      
      // Calculate the average, but check for 0 items to avoid dividing by zero!
      const average = itemsInCourse.length > 0 ? total / itemsInCourse.length : 0;
      
      return {
        name: course,
        count: itemsInCourse.length,
        average: average,
      };
    });
  }, [menuItems, courses]); // This recalculates ONLY when menuItems or courses change

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>Complete Menu</Text>
        <View style={styles.actionsRow}>
          <TouchableOpacity onPress={() => navigation.navigate('Filter')} style={styles.actionBtn}>
            <Text>Filter</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('AddItem')} style={styles.primaryBtn}>
            <Text style={{ color: '#fff' }}>Add Item</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.countText}>Total items: {menuItems.length}</Text>
      
      {/* 3. Add the JSX to display the stats */}
      <View style={styles.statsContainer}>
        {courseStats.map(stat => (
          <View key={stat.name} style={styles.statBox}>
            <Text style={styles.statTitle}>{stat.name}</Text>
            <Text style={styles.statValue}>Avg: R{stat.average.toFixed(2)}</Text>
            <Text style={styles.statValue}>Count: {stat.count}</Text>
          </View>
        ))}
      </View>

      {menuItems.length === 0 ? (
        <View style={styles.emptyBox}>
          <Text style={{ color: '#666' }}>No menu items yet — add one using "Add Item"</Text>
        </View>
      ) : (
        <FlatList
          data={menuItems}
          keyExtractor={(item: MenuItem) => item.id}
          renderItem={({ item }: { item: MenuItem }) => <MenuItemCard item={item} onDelete={removeItem} />}
          contentContainerStyle={{ paddingVertical: 8 }}
        />
      )}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f6f7fb' },
  headerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  title: { fontSize: 22, fontWeight: '700' },
  actionsRow: { flexDirection: 'row', alignItems: 'center' },
  actionBtn: { marginRight: 10, padding: 8, borderRadius: 8, backgroundColor: '#fff' },
  primaryBtn: { padding: 10, backgroundColor: '#111', borderRadius: 8 },
  countText: { marginTop: 12, color: '#444' },
  emptyBox: { marginTop: 24, padding: 20, borderRadius: 12, backgroundColor: '#fff', alignItems: 'center' },
  
  // 4. Add the new styles
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    marginBottom: 8,
  },
  statBox: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 4,
  },
  statTitle: {
    fontWeight: '700',
    fontSize: 15,
    marginBottom: 4,
  },
  statValue: {
    fontSize: 13,
    color: '#333',
  },
});