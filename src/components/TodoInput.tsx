import { StyleSheet, Text, TextInput, View, Dimensions, TouchableOpacity } from "react-native";
import React, { useState } from "react";

export const AddTodoInput = ({ setTodoList }: any) => {
    const [inputValue, setInputValue] = useState<string>('');

    const handleSetTodoList = () => {
        setTodoList(inputValue);
        setInputValue('')
    }

    return <View>
        <Text style={styles.todoInputTitle}>Add todo</Text>

        <View style={styles.todoInputBlock}>
            <TextInput style={styles.todoInput}
                       value={inputValue}
                       placeholder="Write task..."
                       onChangeText={setInputValue}
            />

            <TouchableOpacity style={{ ...styles.todoAddButton, backgroundColor: inputValue.length ? '#1f93de' : '#dadada' }}
                              onPress={handleSetTodoList}
                              disabled={!inputValue.length}>
                <Text style={styles.todoAddButtonText}>+</Text>
            </TouchableOpacity>
        </View>
    </View>
}


const styles = StyleSheet.create({
    todoInputTitle: {
        fontSize: 22,
        marginBottom: 10
    },
    todoInputBlock:  {
        gap: 10,
        flexDirection: 'row'
    },
    todoInput: {
        backgroundColor: '#dadada',
        width: Dimensions.get('screen').width - 100,
        borderRadius: 5,
        padding: 10
    },
    todoAddButton: {
        justifyContent: 'center',
        width: 50,
        borderRadius: 5,
        alignItems: 'center'
    },
    todoAddButtonText: {
        fontSize: 22,
        color: 'white'
    }
});
