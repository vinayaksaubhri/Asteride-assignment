import React, { useEffect } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { useHomeData } from "../hooks/useHomeData";

const HomeScreen: React.FC = () => {
  const { homes, fetchHomes, loading } = useHomeData();
  console.log("🚀 ~ homes:", homes);

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
    <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>
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
