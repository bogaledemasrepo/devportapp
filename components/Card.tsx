import { Feather } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Card = ({ item }: { item: number }) => {
  return (
    <View
      style={{
        padding: 4,
        marginVertical: 8,
      }}
    >
      <View
        style={{
          width: "96%",
          marginHorizontal: "auto",
          borderWidth: 1,
          borderColor: "#b9b9b97a",
          height: 280,
          borderRadius: 4,
          padding: 8,
        }}
      >
        <Text style={{ textAlign: "center" }}>{"Number" + item}</Text>
      </View>
      <View
        style={{
          width: "96%",
          marginHorizontal: "auto",
          borderWidth: 1,
          borderColor: "#0000ff8a",
          height: 50,
          display: "flex",
          flexDirection: "row",
          gap: 24,
          borderRadius: 4,
          alignItems: "center",
          paddingHorizontal: 8,
        }}
      >
        <TouchableOpacity>
          <Feather name="thumbs-up" size={24} color={"#0000ff8a"} />
          <Text style={{ fontSize: 10 }}>1k</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="thumbs-down" size={24} color={"#0000ff8a"} />
          <Text style={{ fontSize: 10 }}>17</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="heart" size={24} color={"#0000ff8a"} />
          <Text style={{ fontSize: 10 }}>500</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({});
