// to have a dynamic title for an inner screen, add these options to the stack when creating it: 
// note the {} around route

            <Stack.Screen
              name="MyScreen"
              component={MyScreen}
              navigation={navigation}
              options={({route}) => {
                return ({ 
                  title: route.params.name, 
                  headerShown: true })
              }}
            />

// and to pass this param.name dynamically, do this when calling the navigation item:

            onPress={() => { navigation.navigate('MyScreen', {type: 'single', id: item.uid, name: 'blabla'} ) } }
