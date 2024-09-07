import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  Alert,
  ScrollView,
  Pressable,
} from "react-native";
import * as Location from "expo-location";
import { getDistance } from "geolib";
import { FontAwesome } from "@expo/vector-icons";

export default function HomeDetailsScreen({ navigation, route }) {
  const { home } = route.params;
  const [userLocation, setUserLocation] = useState({
    latitude: 0,
    longitude: 0,
  });
  const [distance, setDistance] = useState<number | null>(null);
  const [canUnlock, setCanUnlock] = useState(false);

  useEffect(() => {
    async function getDistanceFormHome() {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert(
          "Permission Denied",
          "Location permission is required to unlock the home."
        );
        return;
      }

      let location = await Location.getCurrentPositionAsync({});

      setUserLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });

      const distanceFromHome = getDistance(
        {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        },
        {
          latitude: home.coordinates.latitude,
          longitude: home.coordinates.longitude,
        }
      );
      setDistance(distanceFromHome);
      if (distanceFromHome <= 30) setCanUnlock(true);
    }
    try {
      getDistanceFormHome();
    } catch (error) {
      console.error("Error getting user location: ", error);
    }
  }, []);

  const handleUnlock = async () => {
    // Simulate API call
    Alert.alert("Success", "Home unlocked successfully!");
  };

  return (
    <ScrollView style={styles.container}>
      <Pressable
        style={styles.backButtonContainer}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <FontAwesome name="angle-left" size={24} color="black" />
      </Pressable>
      <Image source={{ uri: home.imageUrl }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.address}>{home.address}</Text>
        <Text style={styles.description}>{home.description}</Text>
        <Text style={styles.distanceText}>
          {distance !== null
            ? `Distance: ${Math.round(distance / 1000)} kilometers`
            : "Calculating distance..."}
        </Text>

        {canUnlock ? (
          <View style={styles.unlockButton}>
            <Button title="Unlock Home" onPress={handleUnlock} color="#fff" />
          </View>
        ) : (
          <Text style={styles.outOfRangeText}>
            You are too far to unlock the home.
          </Text>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  image: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
  },
  detailsContainer: {
    padding: 16,
    backgroundColor: "#fff",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    marginTop: -20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    height: "100%",
  },
  address: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333",
  },
  description: {
    fontSize: 16,
    color: "#666",
    lineHeight: 22,
    marginBottom: 12,
  },
  distanceText: {
    fontSize: 14,
    color: "#999",
    marginBottom: 20,
  },
  unlockButton: {
    backgroundColor: "#4CAF50",
    borderRadius: 8,
    paddingVertical: 10,
  },
  outOfRangeText: {
    color: "#d9534f",
    fontWeight: "bold",
    fontSize: 16,
  },
  backButtonContainer: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
    position: "absolute",
    zIndex: 1,
    top: 10,
    left: 10,
    backgroundColor: "#fff",
  },
});
