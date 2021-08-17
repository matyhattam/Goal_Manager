import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View} from "react-native";

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText)
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput
                placeholder="placeholder"
                style={styles.textInput}
                onChangeText={goalInputHandler}
                value={enteredGoal}>
            </TextInput>
            <Button
                title="ADD"
                onPress={props.onAddGoal.bind(this, enteredGoal)}>
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    textInput: {
        width: '70%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
});

export default GoalInput