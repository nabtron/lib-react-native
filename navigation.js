// https://www.reactnativeschool.com/master-react-navigation-v5/installing-dependencies
  const screens_with_tabbar = [undefined, 'Chats','Activity','Settings']

  return (
    <Tab.Navigator
      screenOptions={({ route, index }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          // console.log(route)
          let iconName;

          if (route.name === "Chats") {
            iconName = "chatbubbles";
            // color = focused ? '' : 'red';
          } else if (route.name === "Activity") {
            iconName = "analytics";
          } else if (route.name === "Settings") {
            iconName = "cog";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarVisible: (screens_with_tabbar.includes(getFocusedRouteNameFromRoute(route))),
      })}
      
      tabBarOptions={{
        activeTintColor: "#2196f3",
        inactiveTintColor: "gray",
        // tabBarVisible: false,
      }}
    >
      <Tab.Screen
        name="Chats"
        options={{ tabBarBadge: 3 }}
        // component={BaseScreen}
        children={(props) => <BaseScreen {...props} tab="chats" />}
      />
      <Tab.Screen
        name="Activity"
        children={(props) => <BaseScreen {...props} tab="activity" />}
      />
      <Tab.Screen
        name="Settings"
        children={(props) => (
          <BaseScreen
            {...props}
            tab="settings"
          />
        )}
      />
    </Tab.Navigator>
