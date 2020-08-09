import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import styles from './styles';
import { useFocusEffect } from '@react-navigation/native';

const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      loadFavorites();
    }, [])
  )

  async function loadFavorites() {
    try {
      await AsyncStorage.getItem('favorites').then(response => {
        if (response) {
          const favoritedTeachers = JSON.parse(response);
          setFavorites(favoritedTeachers);
        }
      });
      console.log(favorites);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={styles.container}>
      <PageHeader title="Meus proffs favoritos" />

      <ScrollView
        contentContainerStyle={{
          paddingBottom: 16,
          paddingHorizontal: 16,
        }}
        style={styles.teacherList}
      >
        {favorites.map((teacher: Teacher, index) => (
          <TeacherItem
            favorited
            key={index}
            teacher={teacher}
          />
        ))}
      </ScrollView>
    </View>
  )
}

export default Favorites;