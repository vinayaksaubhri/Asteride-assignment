import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { homeDataType } from "../types";

export default function HomeCard({
  home,
  onPress,
}: {
  home: homeDataType;
  onPress: () => void;
}) {
  return (
    <Pressable onPress={onPress} style={styles.pressable}>
      <View style={styles.card}>
        <Image source={{ uri: home.imageUrl }} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.address}>{home.address}</Text>
          <Text style={styles.description}>{home.description}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressable: {
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 180,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    resizeMode: "cover",
  },
  textContainer: {
    padding: 15,
  },
  address: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 8,
    color: "#333",
  },
  description: {
    fontSize: 14,
    color: "#666",
  },
});
