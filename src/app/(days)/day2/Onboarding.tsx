import { StyleSheet, Text, View, SafeAreaView, Pressable } from "react-native";
import React, { useState } from "react";
import { router, Stack } from "expo-router";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { StatusBar } from "expo-status-bar";
import {
  Directions,
  Gesture,
  GestureDetector,
} from "react-native-gesture-handler";
import Animated, {
  FadeIn,
  FadeOut,
  SlideInLeft,
} from "react-native-reanimated";

const OnboardingSteps = [
  {
    icon: "snowflake",
    title: "Welcome To Rudraksh App",
    description: " Here in this app 24 Project is created ",
  },
  {
    icon: "air-freshener",
    title: "Learn And Grow Together",
    description: "Learn By Building 24 Projects with react-native and Expo",
  },
  {
    icon: "people-arrows",
    title: "Create for Learn",
    description: "This app create for learn and its day 2",
  },
];
const OnboardingScreen = () => {
  const [ScreenIndex, setScreenIndex] = useState(0);
  const data = OnboardingSteps[ScreenIndex];

  const oncontinue = () => {
    const isLastScreen = ScreenIndex === OnboardingSteps.length - 1;
    if (isLastScreen) {
      router.back();
    } else {
      setScreenIndex(ScreenIndex + 1);
    }
  };
  const onback = () => {
    const isfirstScreen = ScreenIndex === 0;
    if (isfirstScreen) {
      router.back();
    } else {
      setScreenIndex(ScreenIndex - 1);
    }
  };

  const endOnBoarding = () => {
    router.back();
  };

  const swipes = Gesture.Simultaneous(
    Gesture.Fling().direction(Directions.RIGHT).onEnd(onback),
    Gesture.Fling().direction(Directions.LEFT).onEnd(oncontinue)
  );

  return (
    <SafeAreaView style={styles.page}>
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar />
      <GestureDetector gesture={swipes}>
        <Animated.View
          entering={FadeIn}
          exiting={FadeOut}
          key={ScreenIndex}
          style={styles.pagecontainer}
        >
          <View style={styles.StepIndicatorContainer}>
            {OnboardingSteps.map((step, index) => (
              <View
                style={[
                  styles.StepIndicator,
                  {
                    backgroundColor: index === ScreenIndex ? "#CEF202" : "gray",
                  },
                ]}
                key={index}
              ></View>
            ))}
          </View>
          <Animated.View entering={FadeIn} exiting={FadeOut}>
            <FontAwesome5
              style={styles.image}
              name={data.icon}
              size={100}
              color="#CEF202"
            />
          </Animated.View>
          <View style={styles.footer}>
            <Animated.Text entering={SlideInLeft}  style={styles.title}>
              {data.title}
            </Animated.Text>

            <Animated.Text entering={SlideInLeft.delay(200)} style={styles.description}>
              {data.description}
            </Animated.Text>

            <View style={styles.buttonRow}>
              <Text onPress={endOnBoarding} style={styles.buttonText}>
                Skip
              </Text>
              <Pressable onPress={oncontinue} style={styles.button}>
                <Text style={styles.buttonText}>Continue</Text>
              </Pressable>
            </View>
          </View>
        </Animated.View>
      </GestureDetector>
    </SafeAreaView>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  page: {
    // alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#15141A",
  },

  pagecontainer: {
    padding: 30,
    flex: 1,
  },
  image: {
    alignSelf: "center",
    margin: 30,
    marginTop: 50,
  },
  title: {
    color: "#FDFDFD",
    fontSize: 50,
    fontWeight: 500,
    fontFamily: "InterBold",
    letterSpacing: 1.3,
    marginVertical: 10,
  },
  description: {
    color: "gray",
    fontSize: 20,
    fontFamily: "Inter",
    lineHeight: 28,
  },
  footer: {
    marginTop: "auto",
  },
  buttonRow: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  button: {
    backgroundColor: "#302E38",

    borderRadius: 50,
    alignItems: "center",
    flex: 1,
  },
  buttonText: {
    color: "#FDFDFD",
    fontSize: 16,
    fontFamily: "InterSemi",
    padding: 15,
    paddingHorizontal: 25,
  },

  StepIndicatorContainer: {
    flexDirection: "row",
    gap: 8,
    marginHorizontal: 15,
  },
  StepIndicator: {
    height: 5,
    flex: 1,
    backgroundColor: "gray",

    borderRadius: 10,
  },
});
