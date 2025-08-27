import Card from "@/components/Card";
import Header from "@/components/Header";
import contentService, { ContentType } from "@/services/contentService";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const _layout = () => {
  const [content, setContent] = useState<ContentType[]>([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false); // State to manage loading status

  const onScrollEnd = async () => {
    if (loading) return; // Prevent multiple calls while loading
    setLoading(true);
    const response = await contentService.getContents(page, 6);
    if (response.length === 0) {
      setLoading(false);
      return;
    }
    setContent((prev) => [...prev, ...response]);
    setPage((prev) => prev + 1); // Increment the page number for next fetch
    setLoading(false);
  };

  const handleScroll = (event: {
    nativeEvent: {
      contentSize: { height: any };
      layoutMeasurement: { height: any };
      contentOffset: { y: any };
    };
  }) => {
    const contentHeight = event.nativeEvent.contentSize.height;
    const scrollHeight = event.nativeEvent.layoutMeasurement.height;
    const scrollPosition = event.nativeEvent.contentOffset.y;

    // Check if the user has scrolled to the bottom
    if (scrollPosition + scrollHeight >= contentHeight - 20) {
      // Adding a small buffer
      onScrollEnd();
    }
  };

  useEffect(() => {
    onScrollEnd(); // Initial load
  }, []);

  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <Header />
        <ScrollView
          style={{ display: "flex", backgroundColor: "#d4d4d4ff" }}
          onScroll={handleScroll}
          scrollEventThrottle={16} // To ensure we get enough scroll events
        >
          {content.map((Item, index) => (
            <Card key={index} item={1} {...Item} />
          ))}
          {loading && (
            <View
              style={{
                width: "100%",
                height: 60,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ActivityIndicator size={48} />
            </View>
          )}
        </ScrollView>
        <StatusBar backgroundColor={"#000"} />
      </SafeAreaView>
    </>
  );
};

export default _layout;

const styles = StyleSheet.create({});
