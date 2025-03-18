import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { Link } from "expo-router";

type DayListItem = {
  day: number;
};

const DayListItem = ({ day }: DayListItem) => {
  return (
    <Link href={`/days/day${day}`} asChild>
      <Pressable style={styles.box}>
        <Text style={styles.text}>{day}</Text>
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#F9EDE3",
    flex: 1,
    aspectRatio: 1,

    justifyContent: "center",
    alignItems: "center",

    borderWidth: StyleSheet.hairlineWidth,
    gap: 10,
    borderRadius: 20,
  },
  text: { fontSize: 70, color: "#9B4521", fontFamily: "AmaticBold" },
});

export default DayListItem;
