
import { Stack } from "expo-router";
import { Inter_900Black, useFonts ,Inter_600SemiBold,Inter_400Regular,Inter_700Bold,Inter_800ExtraBold} from "@expo-google-fonts/inter";
import { AmaticSC_400Regular,AmaticSC_700Bold} from "@expo-google-fonts/amatic-sc";
import * as SplashScreen from "expo-splash-screen"
import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  const [fontloaded, fonterror] = useFonts({
    Inter: Inter_400Regular,
    InterSemi: Inter_600SemiBold,
    InterBold: Inter_700Bold,
    InterExtraBold: Inter_800ExtraBold,
    
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
    <GestureHandlerRootView style={{flex:1}}>

    <Stack
      screenOptions={{
      }}
      >
    <Stack.Screen name="index" options={{title:"rudra"}}/>
    </Stack>
      </GestureHandlerRootView>
  );
}
