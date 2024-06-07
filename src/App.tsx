import React from 'react';

//Navigation
import { NavigationContainer } from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"

//screen
import Home from './Screen/Home';
import Details from './Screen/Details';

export type RootStackParamList = {
  Home: undefined;
  Details:{productId:string}
};

const Stack = createNativeStackNavigator<RootStackParamList>()

function App(): React.JSX.Element {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen 
        name="Home"
        component={Home} 
        options={{
          title:"Trending Products"
        }}/>
        <Stack.Screen 
        name="Details"
        component={Details} 
        options={{
          title:"Products Details"
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
