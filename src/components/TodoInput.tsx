import { StyleSheet, Text, TextInput, View, Dimensions, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { addTodo } from "../store/todo.actions";
import { useDispatch } from "react-redux";
import { TodoItem } from "../models/todo-item.model";

export const AddTodoInput = () => {
    const dispatch = useDispatch();

    const [inputValue, setInputValue] = useState<string>('');

    const handleSetTodoList = () => {
        dispatch(addTodo(new TodoItem(new Date().getTime(), inputValue, new Date())));
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
