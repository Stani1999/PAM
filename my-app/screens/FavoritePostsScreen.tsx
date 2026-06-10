// Lab X.4.1.
import { FavoritePostsScreenProps } from "../types/Navigation"; // <X.6.1./>
import { useEffect, useState } from "react";
import { View, Text, FlatList, Button, Pressable } from "react-native"; // <X.6.2./

import { getFavoritePostIds, clearFavoritePosts } from "../services/FavoritesStorage"; // <X.5.3./>
import { styles } from "@/styles/FavoritePostsScreenStyles";

export default function FavoritePostsScreen({ navigation }: FavoritePostsScreenProps) { // <X.6.1./>
  const [favoriteIds, setFavoriteIds] = useState<number[]>([]);

  const loadFavorites = async () => {
    const ids = await getFavoritePostIds();
    setFavoriteIds(ids);
  };

  useEffect(() => {
    loadFavorites();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Favorite Posts</Text>
      <View style={styles.button}>
        <Button title="Refresh" onPress={loadFavorites} />
      </View>
      {/* <X.5.3.> */}
      <View style={styles.button}>
       <Button
        title="Clear Favorites"
        onPress={async () => {
          await clearFavoritePosts();
          setFavoriteIds([]);
        }}
      />
      </View>
      {/* </X.5.3.> */}
      <FlatList
        data={favoriteIds}
        keyExtractor={(item) => item.toString()}
        renderItem={({ item, index }) => ( // <X.5.1./>
          // <X.6.2.>
          <Pressable
            onPress={() => navigation.navigate
              ("ApiPostDetails", { id: item })}
          >
          {/* </X.6.2.> */}
            <View style={styles.card}>
              <Text style={styles.cardText}>Favorite post number {index + 1} (ID: {item}){/* <X.5.1./> */}</Text>
            </View>
          </Pressable> // <X.6.2./>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No favorite posts.</Text>
        }
      />
    </View>
  );
}