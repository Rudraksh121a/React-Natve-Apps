import { StatusBar } from "expo-status-bar";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import DayListItem from "../components/Core/DayListItem";
import { Inter_900Black, useFonts } from "@expo-google-fonts/inter";
import { AmaticSC_400Regular,AmaticSC_700Bold } from "@expo-google-fonts/amatic-sc";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

const days = Array.from({ length: 24 }, (_, i) => i + 1);

// Keep the splash screen visible while we fetch resources
// SplashScreen.preventAutoHideAsync();

// Set the animation options. This is optional.

export default function HomeScreen() {
  const [fontloaded, fonterror] = useFonts({
    Inter: Inter_900Black,
    Amatic:AmaticSC_400Regular,
    AmaticBold:AmaticSC_700Bold,
  });

  useEffect(() => {
    if (fontloaded || fonterror) {
      SplashScreen.hideAsync();
    }
  }, [fontloaded, fonterror]);

  if (!fontloaded && !fonterror) {
    return null;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={days}
        numColumns={2}
        contentContainerStyle={styles.content}
        columnWrapperStyle={styles.column}
        renderItem={({ item }) => <DayListItem day={item} />}
        showsVerticalScrollIndicator={false}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",

    gap: 10,
  },
  content: { gap: 10, padding: 10 },
  box: {
    backgroundColor: "#F9EDE3",
    flex: 1,
    aspectRatio: 1,

    justifyContent: "center",
    alignItems: "center",

    // borderColor:"#9B4521",
    borderWidth: StyleSheet.hairlineWidth,
    gap: 10,
    borderRadius: 20,
  },
  text: { fontSize: 70, color: "#9B4521" },
  column: { gap: 10 },
});
