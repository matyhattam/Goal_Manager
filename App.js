import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {Button, FlatList, Image, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
    const [courseGoals, setCourseGoals] = useState([]);

    const addGoalHandler = enteredGoal => {
        setCourseGoals(currentGoals => [...currentGoals, {key: Math.random().toString(), value: enteredGoal}])
    };

    return (
        <View style={styles.container}>
            <GoalInput
                onAddGoal={addGoalHandler}>
            </GoalInput>
            <FlatList
                data={courseGoals}
                renderItem={itemData => (
                    <GoalItem goalItem={itemData.item.value}></GoalItem>
                )}>
            </FlatList>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 50,
    }
});
