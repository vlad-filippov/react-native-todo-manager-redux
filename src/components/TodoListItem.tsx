import { Button, StyleSheet, Text, TouchableOpacity, View, Dimensions } from "react-native";
import React from "react";
import { TodoItemModel } from "../models/todo-item.model";

export const TodoListItem = (item: TodoItemModel) => {

    return <View style={styles.todoListItem}>
        <Text style={styles.text}>{item.text}</Text>

        <TouchableOpacity>
            <Button title={'Details'}/>
        </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
    todoListItem: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    text: {
        width: Dimensions.get('screen').width - 150,
    }
});
