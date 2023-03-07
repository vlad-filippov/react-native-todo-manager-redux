import React from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { AddTodoInput } from "../components/TodoInput";
import { TodoListItem } from "../components/TodoListItem";
import { useSelector } from 'react-redux';

export const TodoListScreen = () => {
    const todoListState = useSelector((store) => store.todoList.todoList);

    return (
        <SafeAreaView style={styles.body}>
            <AddTodoInput />

            <View style={styles.todoList}>
                <Text style={styles.todoListTitle}>TODOs</Text>

                {todoListState.length
                    ? (<FlatList style={styles.flatList} data={todoListState} renderItem={(item) => (
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
    },
    flatList: {
        marginBottom: 150,
    },
    todoListTitle: {
        fontSize: 22,
        marginBottom: 10
    },
    noItemsText: {
        textAlign: 'center'
    }
});
