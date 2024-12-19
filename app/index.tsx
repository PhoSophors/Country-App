import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  ScrollView,
  Image,
  SafeAreaView
} from "react-native";
import { useApi } from "../hooks/useApi";
import { Country } from "../types";
import { StatusBar } from "expo-status-bar";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center"
  },
  errorText: {
    fontSize: 18,
    color: "red"
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    height: 60,
    display: "flex",
    justifyContent: "flex-start",
    marginVertical: 5,
    // marginHorizontal: 5,
    backgroundColor: "white",
    borderRadius: 10,
    elevation: 3
  },
  flag: {
    width: 30,
    height: 30,
    marginRight: 10,
    borderRadius: 50
  },
  itemText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333"
  }
});

const HomeScreen = () => {
  const { data, isLoading, error } = useApi<Country[]>(
    "https://restcountries.com/v3.1/all?fields=name,flags"
  );

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Error fetching data</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={[styles.container]}>
      <FlatList
        data={data}
        contentContainerStyle={{
          paddingHorizontal: 20
        }}
        ListEmptyComponent={<Text>No data found</Text>}
        ListHeaderComponent={
          <View style={{ marginTop: 30, marginBottom: 20 }}>
            <Text style={{ fontSize: 30, fontWeight: "bold" }}>
              A Comprehensive Guide to the World's Nations
            </Text>
            <Text style={{ fontSize: 18 }}>
              Search by country name, sort by country name, and browse by page.
            </Text>
          </View>
        }
        keyExtractor={item => item.name.common}
        renderItem={({ item }) =>
          <View style={styles.itemContainer}>
            <Image source={{ uri: item.flags.png }} style={styles.flag} />
            <Text style={styles.itemText}>
              {item.name.common}
            </Text>
          </View>}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
