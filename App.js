import React from "react";
import Home from "./src/pages/Home/Home";
import Calculator from "./src/pages/Calculator/Calculator";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Settings from "./src/pages/Settings";

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Calculator") {
              iconName = focused ? "calculator" : "calculator-outline";
            } else if (route.name === "Feedback") {
              iconName = focused ? "ios-chatbubble" : "ios-chatbubble-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Calculator" component={Calculator} />
        <Tab.Screen name="Feedback" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
