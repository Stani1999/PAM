// Lab X.2.2.
import AsyncStorage from "@react-native-async-storage/async-storage";
import { STORAGE_KEYS } from "../constants/storageKeys";

export async function getFavoritePostIds(): Promise<number[]> {
  const storedValue = await AsyncStorage.getItem(STORAGE_KEYS.FAVORITE_POSTS);

  if (!storedValue) {
    return [];
  }

  return JSON.parse(storedValue) as number[];
}

export async function saveFavoritePostIds(ids: number[]): Promise<void> {
  await AsyncStorage.setItem(
    STORAGE_KEYS.FAVORITE_POSTS,
    JSON.stringify(ids)
  );
}

export async function addFavoritePostId(id: number): Promise<number[]> {
  const currentIds = await getFavoritePostIds();

  if (currentIds.includes(id)) {
    return currentIds;
  }

  const updatedIds = [...currentIds, id];
  await saveFavoritePostIds(updatedIds);

  return updatedIds;
}

export async function removeFavoritePostId(id: number): Promise<number[]> {
  const currentIds = await getFavoritePostIds();
  const updatedIds = currentIds.filter((currentId) => currentId !== id);

  await saveFavoritePostIds(updatedIds);

  return updatedIds;
}

export async function isFavoritePost(id: number): Promise<boolean> {
    const currentIds = await getFavoritePostIds();
    
    return currentIds.includes(id);
}

// <X.4.2.>
export async function clearFavoritePosts(): Promise<void> {
  await AsyncStorage.removeItem(STORAGE_KEYS.FAVORITE_POSTS);
}
// </X.4.2.>