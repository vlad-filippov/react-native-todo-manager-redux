import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { TodoDetailsScreen } from "../screens/TodoDetailsScreen";
import { TodoListScreen } from "../screens/TodoListScreen";
import { RoutesEnum } from "../enums/routes.enum";

const Stack = createNativeStackNavigator();

export const TodoNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={RoutesEnum.HOME}>
                <Stack.Screen name={RoutesEnum.HOME} component={TodoListScreen} options={{title: 'Todo App'}}/>
                <Stack.Screen name={RoutesEnum.DETAILS} component={TodoDetailsScreen} options={{title: 'Details'}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};
