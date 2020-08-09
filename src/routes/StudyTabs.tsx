import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TeacherList from '../pages/TeacherList';
import Favorites from '../pages/Favorites';

const { Navigator, Screen } = createBottomTabNavigator();

function StudyTabs() {
    return (
        <Navigator tabBarOptions={{
            style: {
                height: 64,
                elevation: 0,
                shadowOpacity: 0,
            },
            tabStyle: {
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
            },
            iconStyle: {
                flex: 0,
                width: 20,
                height: 20,
            },
            labelStyle: {
                fontSize: 13,
                marginLeft: 16,
                fontFamily: 'Archivo_700Bold',
            },
            inactiveBackgroundColor: '#FAFAFC',
            activeBackgroundColor: '#EBEBF5',
            inactiveTintColor: '#C1BCCC',
            activeTintColor: '#32264D',
        }}>
            <Screen
                name="TeacherList"
                component={TeacherList}
                options={{
                    tabBarLabel: 'Proffs',
                    tabBarIcon: ({ color, size, focused }) => {
                        return <Ionicons name="ios-easel" size={size} color={focused ? '#8257E5' : color} />
                    }
                }}
            />
            <Screen
                name="Favorites"
                component={Favorites}
                options={{
                    tabBarLabel: 'Favoritos',
                    tabBarIcon: ({ color, size, focused }) => {
                        return <Ionicons name="ios-heart" size={size} color={focused ? '#8257E5' : color} />
                    }
                }}
            />
        </Navigator>
    );
}

export default StudyTabs;