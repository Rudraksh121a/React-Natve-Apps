
import { Stack } from "expo-router";
import { Inter_900Black, useFonts } from "@expo-google-fonts/inter";
import { AmaticSC_400Regular,AmaticSC_700Bold } from "@expo-google-fonts/amatic-sc";
import * as SplashScreen from "expo-splash-screen"
import { useEffect } from "react";

export default function RootLayout() {
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
    <Stack
      screenOptions={{
      }}
    >
    <Stack.Screen name="index" options={{title:"rudra"}}/>
    </Stack>
  );
}
