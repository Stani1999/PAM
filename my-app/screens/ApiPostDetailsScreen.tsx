// Lab VII.1.5.
import { Comment } from "../types/Comment"; // <IX.2.2./>
// <IX.1.5.>
import { Post } from "../types/Post";
import { useFetch } from "../hooks/useFetch";
import { View, Text, ActivityIndicator } from "react-native";
//import { RouteProp } from "@react-navigation/native";
import { ApiPostDetailsScreenProps } from "../types/Navigation"; 
// </IX.1.5.>
import { styles } from "../styles/ApiPostDetailsScreenStyles";

// <IX.1.3.>
// type ApiPostDetailsRouteProp = RouteProp<RootStackParamList, "ApiPostDetails">;
// type ApiPostDetailsScreenProps = { route: ApiPostDetailsRouteProp };
// <IX.1.3./>

export default function ApiPostDetailsScreen({route,}: ApiPostDetailsScreenProps) {
  const { 
    id, 
    // <IX.1.5.>
    // title, 
    // body 
    // <IX.1.5./>
  } = route.params;

  // <IX.1.5.>
  const { 
    data: post, 
    isLoading, 
    error 
  } = useFetch<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`);

   // <IX.2.2.>
  const {
    data: comments,
    isLoading: areCommentsLoading,
    error: commentsError,
  } = useFetch<Comment[]>(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
  // </IX.2.2.>

  if (isLoading || areCommentsLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" />
        <Text style={styles.infoText}>Loading post details...</Text>
      </View>
    );
  }

  if (error || commentsError) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>{error || commentsError}</Text>
      </View>
    );
  }

  if (!post) {
    return (
      <View style={styles.centered}>
        <Text style={styles.infoText}>Post not found.</Text>
      </View>
    );
  }
  // </IX.1.5.>

  return (
    <View style={styles.container}>
      {/* <IX.1.5.> */}
      <Text style={styles.title}>{post.title}</Text>
      <Text style={styles.meta}>Post ID: {post.id}</Text>
      <Text style={styles.author}>Author: user {post.userId}</Text>
      <Text style={styles.body}>{post.body}</Text>
      {/* </IX.1.5.> */}
      {/* <IX.2.2.> */}
      <Text style={styles.comments}>
        Liczba komentarzy: {comments?.length ?? 0}
      </Text>
      {/* </IX.2.2.> */}
    </View>
  );
}