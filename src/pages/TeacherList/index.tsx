import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import { View, ScrollView, Text, TextInput } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';

import api from '../../services/api';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import styles from './styles';

const TeacherList: React.FC = () => {
  const [teachers, setTeachers] = useState([]);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);

  const [subject, setSubject] = useState('Matemática');
  const [week_day, setWeekDay] = useState('1');
  const [time, setTime] = useState('08:00');

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
          const favoritedTeachersIds = favoritedTeachers.map((teacher: Teacher) => {
            return teacher.id;
          })
          setFavorites(favoritedTeachersIds);
          console.log(favoritedTeachersIds);
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  function handleToggleFiltersVisible() {
    setIsFiltersVisible(!isFiltersVisible);
  }

  async function handleFiltersSubmit() {
    loadFavorites();

    try {
      const response = await api.get('classes', {
        params: {
          subject,
          week_day,
          time,
        }
      });

      setTeachers(response.data);

      if (response.data.length > 0) {
        setIsFiltersVisible(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={styles.container}>
      <PageHeader
        title="Proffs disponíveis"
        headerRight={(
          <BorderlessButton onPress={handleToggleFiltersVisible}>
            <Feather name="filter" size={20} color="#FFF" />
          </BorderlessButton>
        )}>
        {isFiltersVisible && (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Matéria</Text>
            <TextInput
              value={subject}
              style={styles.input}
              placeholder="Qual a matéria?"
              placeholderTextColor="#C1BCCC"
              onChangeText={(text) => setSubject(text)}
            />

            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da semana</Text>
                <TextInput
                  value={week_day}
                  style={styles.input}
                  placeholder="Qual o dia?"
                  placeholderTextColor="#C1BCCC"
                  onChangeText={(text) => setWeekDay(text)}
                />
              </View>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>
                <TextInput
                  value={time}
                  style={styles.input}
                  placeholder="Qual horário?"
                  placeholderTextColor="#C1BCCC"
                  onChangeText={(text) => setTime(text)}
                />
              </View>
            </View>

            <RectButton style={styles.submitButton} onPress={handleFiltersSubmit}>
              <Text style={styles.submitButtonText}>Filtrar</Text>
            </RectButton>
          </View>
        )}
      </PageHeader>

      <ScrollView
        contentContainerStyle={{
          paddingBottom: 16,
          paddingHorizontal: 16,
        }}
        style={styles.teacherList}
      >
        {teachers.map((teacher: Teacher, index) => (
          <TeacherItem
            key={index}
            teacher={teacher}
            favorited={favorites.includes(teacher.id)}
          />
        ))}
      </ScrollView>
    </View>
  )
}

export default TeacherList;