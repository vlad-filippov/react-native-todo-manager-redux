import { Button, SafeAreaView, Text, View } from "react-native";
import { TodoItemModel } from "../models/todo-item.model";
import dayjs from 'dayjs';

export const TodoDetailsScreen = ({route}: any) => {
    const {id, text, date}: TodoItemModel = route.params;
    const todoDate = dayjs(date).format('DD/MM/YYYY');
    const todoTime = dayjs(date).format('HH:mm');
    const handleDeleteTodo = () => {
        console.log('id', id)
    }

    return <SafeAreaView style={{padding: 20}}>
        <View style={{marginBottom: 30, justifyContent: 'space-between', flexDirection: 'row'}}>
            <Text>{ todoDate }</Text>
            <Text>{ todoTime }</Text>
        </View>

        <View>
            <Text style={{fontSize: 20}}>Text:</Text>
            <Text>{ text }</Text>
        </View>

        <View style={{alignItems: 'center', marginTop: 30}}>
            <Button color='red' title="Delete" onPress={handleDeleteTodo}/>
        </View>
    </SafeAreaView>
}
