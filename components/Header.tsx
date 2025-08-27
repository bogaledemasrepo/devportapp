import React from "react";
import { Text, View } from "react-native";

const Header = () => {
  return (
    <View
      style={{
        width: "100%",
        height: 60,
        backgroundColor: "#415aadff",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        paddingHorizontal: 8,
        paddingVertical: 5,
      }}
    >
      <View style={{ width: "auto" }}>
        <Text
          style={{
            fontSize: 32,
            color: "#fff",
            borderWidth: 2,
            borderColor: "#fff",
            width: 50,
            height: 50,
            borderRadius: 25,
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          FB
        </Text>
      </View>
      <View style={{ flex: 1 }}></View>
      <View
        style={{
          width: 50,
          height: 50,
          backgroundColor: "#fff",
          borderRadius: 25,
        }}
      ></View>
    </View>
  );
};

export default Header;
