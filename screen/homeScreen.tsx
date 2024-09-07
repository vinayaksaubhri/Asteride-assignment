import React, { useEffect } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useHomeData } from "../hooks/useHomeData";
import HomeCard from "../components/homeCard";

const HomeScreen: React.FC = () => {
  const { homes, fetchHomes, loading } = useHomeData();

  useEffect(() => {
    fetchHomes();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <FlatList
      data={homes}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <HomeCard
          home={item}
          // onPress={() => navigation.navigate("HomeDetails", { home: item })}
          onPress={() => console.log("Pressed")}
        />
      )}
    />
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
