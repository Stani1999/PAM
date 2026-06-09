// Lab VI.2.6.
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../types/Navigation";
import AddEventForm from "../components/AddEventForm";

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, "AddEvent">;
  route: RouteProp<RootStackParamList, "AddEvent">;
};

export default function AddEventScreen({ navigation, route }: Props) {
  return (
    <AddEventForm 
      onAddEvent={(newEvent) => {
        route.params.onAddEvent(newEvent);
        navigation.goBack();
      }} 
    />
  );
}