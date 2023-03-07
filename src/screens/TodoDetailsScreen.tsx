import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { TodoItemModel } from "../models/todo-item.model";
import dayjs from 'dayjs';
import { removeTodo } from "../store/todo.actions";
import { useDispatch } from "react-redux";
import { RoutesEnum } from "../enums/routes.enum";
import { useNavigation } from "@react-navigation/native";

export const TodoDetailsScreen = ({route}: any) => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const {id, text, date}: TodoItemModel = route.params;
    const todoDate = dayjs(date).format('DD/MM/YYYY');
    const todoTime = dayjs(date).format('HH:mm');

    const handleDeleteTodo = () => {
        dispatch(removeTodo(id));
        navigation.navigate(RoutesEnum.HOME)
    }

    return <SafeAreaView style={styles.body}>
        <View style={styles.dates}>
            <Text>{ todoDate }</Text>
            <Text>{ todoTime }</Text>
        </View>

        <View>
            <Text style={{fontSize: 20}}>Text:</Text>
            <Text>{ text }</Text>
        </View>

        <View style={styles.buttonBlock}>
            <Button color='red' title="Delete" onPress={handleDeleteTodo}/>
        </View>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    body: {
        padding: 20,
        flex: 1
    },
    dates: {
        marginBottom: 30,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    buttonBlock: {
        alignItems: 'center',
        marginTop: 30}
});
