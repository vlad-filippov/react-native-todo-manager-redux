import React, { useState } from "react";
import { TodoItemModel } from "../models/todo-item.model";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { AddTodoInput } from "../components/TodoInput";
import { TodoListItem } from "../components/TodoListItem";

export const TodoListScreen = () => {
    const [todoList, setTodoList] = useState<TodoItemModel[]>([]);

    const handleSetTodoList = (inputValue: string) => {
        setTodoList(() => [...todoList, { id: new Date().getTime(), text: inputValue, date: new Date() }])
    }

    return (
        <SafeAreaView style={styles.body}>
            <AddTodoInput setTodoList={handleSetTodoList}/>

            <View style={styles.todoList}>
                <Text style={styles.todoListTitle}>TODOs</Text>

                {todoList.length
                    ? (<FlatList data={todoList} renderItem={(item) => (
                        <TodoListItem id={item.item.id} date={item.item.date} text={item.item.text} />)
                    }/>)
                    : (<Text style={styles.noItemsText}>No items</Text>)
                }
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    body: {
        padding: 20,
        flex: 1
    },
    todoList: {
        paddingTop: 20,
        marginBottom: 50
    },
    todoListTitle: {
        fontSize: 22,
        marginBottom: 10
    },
    noItemsText: {
        textAlign: 'center'
    }
});
