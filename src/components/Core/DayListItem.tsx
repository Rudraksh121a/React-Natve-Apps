import { View, Text, StyleSheet } from "react-native";
import React from "react";

type DayListItem={
    number:number;
}

const DayListItem = (props:DayListItem) => {
  return (
    <View style={styles.box}>
      <Text style={styles.text}>{props.number}</Text>
    </View>
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
  text: { fontSize: 70, color: "#9B4521" },
});

export default DayListItem;
