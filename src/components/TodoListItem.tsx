import { Button, StyleSheet, Text, TouchableOpacity, View, Dimensions } from "react-native";
import React from "react";
import { TodoItemModel } from "../models/todo-item.model";
import { useNavigation } from "@react-navigation/native";
import { RoutesEnum } from "../enums/routes.enum";
import dayjs from 'dayjs';

export const TodoListItem = ({ id, text, date }: TodoItemModel) => {
    const navigation = useNavigation();
    const todoDate = dayjs(date).format('DD/MM/YYYY');

    return <View style={styles.todoListItem}>
        <View>
            <Text style={styles.text}>{todoDate}</Text>
            <Text style={styles.text}>{text}</Text>
        </View>

        <TouchableOpacity>
            <Button title={'Details'} onPress={() => navigation.navigate(RoutesEnum.DETAILS, {id, text, date})}/>
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
