import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity, View, TextInput } from "react-native";

import KeranjangScreen from "./screens/KeranjangScreen";
import ScreenProduk from "./screens/ScreenProduk";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ProductsScreen from "./screens/MyProducts/ProductsScreen";
import ProductDetailScreen from "./screens/MyProducts/ProductIdScreen";
import TabBar from "./components/TabBar";
import TaskApp from "./components/TaskApp";
import HeaderCustom from "./components/Header";
import ScreensBuku from "./screens/ScreenBuku";
import SoriesScreen from "./screens/SoriesScreen";
import KacamataScreen from "./screens/KacamataScreen";
import ProductDetail from "./screens/ProductDetail";
import BookDetailScreen from "./screens/BookDetailScreenl";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const ProfileScreenComponent = ({ navigation }) => (
  <ProfileScreen navigation={navigation} />
);

const ProductDetailScreenComponent = ({ navigation, route }) => (
  <ProductDetailScreen navigation={navigation} route={route} />
);

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AppTabs">
        <Stack.Screen
          name="AppTabs"
          component={AppTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreenComponent}
          options={({ navigation }) => ({
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{ padding: 10 }}
              >
                <MaterialCommunityIcons
                  name="arrow-left"
                  size={24}
                  color="#000"
                />
              </TouchableOpacity>
            ),
            headerTitle: "Profile",
            headerTitleAlign: "center",
            headerRight: () => (
              <View
                style={{ flexDirection: "row", alignItems: "center" }}
              ></View>
            ),
          })}
        />
        <Stack.Screen
          name="ProductDetail"
          component={ProductDetail}
          options={({ navigation }) => ({
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{ padding: 10 }}
              >
                <MaterialCommunityIcons
                  name="arrow-left"
                  size={24}
                  color="#000"
                />
              </TouchableOpacity>
            ),
            headerTitle: "Product Detail",
            headerTitleAlign: "center",
          })}
        />
        <Stack.Screen
          name="BookDetail"
          component={BookDetailScreen}
          options={({ route, navigation }) => ({
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{ padding: 10 }}
              >
                <MaterialCommunityIcons
                  name="arrow-left"
                  size={24}
                  color="#000"
                />
              </TouchableOpacity>
            ),
            headerTitle: route.params.bookTitle || "Book Detail",
            headerTitleAlign: "center",
          })}
        />
        <Stack.Screen
          name="Keranjang"
          component={KeranjangScreen}
          options={{
            headerTitle: "Keranjang",
            headerTitleAlign: "center",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="HomePakaian"
          component={ScreenProduk}
          options={({ navigation }) => ({
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{ padding: 10 }}
              >
                <MaterialCommunityIcons
                  name="arrow-left"
                  size={24}
                  color="#000"
                />
              </TouchableOpacity>
            ),
            headerTitle: "Pakaian",
            headerTitleAlign: "center",
          })}
        />
        <Stack.Screen
          name="ScreensBuku"
          component={ScreensBuku}
          options={({ navigation }) => ({
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{ padding: 10 }}
              >
                <MaterialCommunityIcons
                  name="arrow-left"
                  size={24}
                  color="#000"
                />
              </TouchableOpacity>
            ),
            headerTitle: "Buku",
            headerTitleAlign: "center",
          })}
        />
        <Stack.Screen
          name="SoriesScreen"
          component={SoriesScreen}
          options={({ navigation }) => ({
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{ padding: 10 }}
              >
                <MaterialCommunityIcons
                  name="arrow-left"
                  size={24}
                  color="#000"
                />
              </TouchableOpacity>
            ),
            headerTitle: "List Pokemon",
            headerTitleAlign: "center",
          })}
        />
        <Stack.Screen
          name="KacamataScreen"
          component={KacamataScreen}
          options={({ navigation }) => ({
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{ padding: 10 }}
              >
                <MaterialCommunityIcons
                  name="arrow-left"
                  size={24}
                  color="#000"
                />
              </TouchableOpacity>
            ),
            headerTitle: "Kacamata",
            headerTitleAlign: "center",
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function ProductsStack() {
  return (
    <Stack.Navigator initialRouteName="Products">
      <Stack.Screen
        name="Products"
        component={ProductsScreen}
        options={{
          headerTitle: "Pakaian",
          headerTitleAlign: "center",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ProductId"
        component={ProductDetailScreen}
        options={{
          headerTitle: "Pakaian",
          headerTitleAlign: "center",
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

function AppTabs() {
  return (
    <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
      <Tab.Screen
        name="Beranda"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
          header: ({ navigation }) => (
            <HeaderCustom navigation={navigation} title="Beranda" rightButton />
          ),
          headerTitle: "Pakaian",
          headerTitleAlign: "center",
          headerRight: () => (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <MaterialCommunityIcons name="magnify" size={24} color="#000" />
              <TextInput
                style={{
                  marginLeft: 10,
                  height: 40,
                  borderColor: "gray",
                  borderWidth: 1,
                  borderRadius: 10,
                  paddingLeft: 10,
                  width: 200,
                }}
                placeholder="cari disini"
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Produk"
        component={ProductsStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cart" color={color} size={size} />
          ),
          header: ({ navigation }) => (
            <HeaderCustom navigation={navigation} title="Produk" rightButton />
          ),
          headerTitle: "Pakaian",
          headerTitleAlign: "center",
          headerRight: () => (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <MaterialCommunityIcons name="magnify" size={24} color="#000" />
              <TextInput
                style={{
                  marginLeft: 10,
                  height: 40,
                  borderColor: "gray",
                  borderWidth: 1,
                  borderRadius: 10,
                  paddingLeft: 10,
                  width: 200,
                }}
                placeholder="cari disini"
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Keranjang"
        component={KeranjangScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="cart-outline"
              color={color}
              size={size}
            />
          ),
          header: ({ navigation }) => (
            <HeaderCustom
              navigation={navigation}
              title="Keranjang"
              rightButton
            />
          ),
          headerTitle: "Keranjang",
          headerTitleAlign: "center",
        }}
      />
      <Tab.Screen
        name="Chat"
        component={TaskApp}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="forum" color={color} size={size} />
          ),
          header: ({ navigation }) => (
            <HeaderCustom navigation={navigation} title="Chat" rightButton />
          ),
          headerTitle: "Chat",
          headerTitleAlign: "center",
        }}
      />
    </Tab.Navigator>
  );
}

export default App;
