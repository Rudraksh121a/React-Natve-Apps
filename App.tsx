import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from "react-native";
import DayListItem from "./src/components/Core/DayListItem";

export default function App() {
  const days = Array.from({ length: 24 }, (_, i) => i + 1);

  return (
    <View style={styles.container}>
      <FlatList
        data={days}
        numColumns={2}
        contentContainerStyle={styles.content}
        columnWrapperStyle={styles.column}
        renderItem={({ item }) => (
          <DayListItem number={item}/>
        )}
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
  content: { gap: 10,padding:10},
  box: {
    backgroundColor: "#F9EDE3",
    flex: 1,
    aspectRatio: 1 ,

    justifyContent: "center",
    alignItems: "center",

    // borderColor:"#9B4521",
    borderWidth: StyleSheet.hairlineWidth,
    gap: 10,
    borderRadius: 20,
  },
  text: { fontSize: 70, color: "#9B4521" },
  column:{gap:10},
});
