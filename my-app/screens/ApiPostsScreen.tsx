// Lab VII.1.4.
import { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { Post } from "../types/Post";
import ApiPostItem from "../components/ApiPostItem";
import { styles } from "../styles/ApiPostsScreenStyles";
import { RootStackParamList } from "../types/Navigation";

type ApiPostsScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, "ApiPosts">;
};

export default function ApiPostsScreen({ navigation }: ApiPostsScreenProps) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        setError("");

        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts" // <VII.3.5./> <VII.3.1./>
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data from server.");
        }

        const data: Post[] = await response.json();
        setPosts(data);
      } catch (err) {
        setError("Oops! We couldn't load the posts. Please check your internet connection and try again."); // <VII.2.4./>
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);
  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" />
        <Text style={styles.infoText}>Loading data...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Posts from API: {posts.length}{/* <VII.2.3./> */}</Text>

      <FlatList
        data={posts.slice(0, 10)}                       // <VII.2.1.> 
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ApiPostItem
            title={item.title}
            id={item.id}                                // <VII.2.2./>
            body={item.body}
            onPress={() =>
              navigation.navigate("ApiPostDetails", {
                id: item.id,
                title: item.title,
                body: item.body,
              })
            }
          />
        )}
      />
    </View>
  );
}