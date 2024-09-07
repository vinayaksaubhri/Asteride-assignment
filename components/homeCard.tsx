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
    <Pressable onPress={onPress}>
      <View style={styles.card}>
        <Image source={{ uri: home.imageUrl }} style={styles.image} />
        <Text style={styles.address}>{home.address}</Text>
        <Text>{home.description}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: 150,
    marginBottom: 10,
    resizeMode: "cover",
  },
  address: {
    fontWeight: "bold",
    marginBottom: 5,
  },
});
