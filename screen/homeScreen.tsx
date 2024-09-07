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
import ROUTES from "../constant/routes";

const HomeScreen: React.FC = ({ navigation }) => {
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
      contentContainerStyle={styles.contentContainerStyle}
      keyExtractor={(item) => item.id.toString()}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
        <HomeCard
          home={item}
          onPress={() =>
            navigation.navigate(ROUTES.HOME_DETAILS_SCREEN, { home: item })
          }
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
  contentContainerStyle: {
    padding: 15,
  },
});
