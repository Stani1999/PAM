import { NativeStackNavigationProp } from "@react-navigation/native-stack"; // <IV.3.1.>
import { RouteProp } from "@react-navigation/native";                       // <IX.1.3./>
import { EventItem } from "./Event";                                        // <VI.2.6./>

// Lab III.4.1.
export type RootStackParamList = {
  Home: undefined;

  Details: {
    eventId: number; // <III.6.1./>
    title: string;
    description: string;
    location: string; // <IV.1.1./>
    time: string; // <IV.3.1./>
    date: string; // <V.2.2./>
    category: string; // <V.3.2./>
    speaker: string; // <VI.2.1./>
  };
  AddEvent: { onAddEvent: (event: Omit<EventItem, "eventId">) => void };  // <VI.2.6./>

  // <VII.1.3.>
  ApiPosts: undefined;
  ApiPostDetails: {
    id: number;
    // <IX.1.3.>
    // title: string;
    // body: string;
    // <IX.1.3./>
  };
  // </VII.1.3.>
  Users: undefined; // <VIII.1.6./>
  Todos: undefined; // <VIII.2.4./>
  // <IX.3.1.>
  UserDetails: {
    id: number;
  };
  // </IX.3.1./>
};

// <IX.1.3.>
type ApiPostDetailsRouteProp = RouteProp<RootStackParamList, "ApiPostDetails">;

export type ApiPostDetailsScreenProps = { route: ApiPostDetailsRouteProp };
// </IX.1.3.>

// <IX.3.1.>
export type UsersScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Users">;
};

type UserDetailsRouteProp = RouteProp<RootStackParamList, "UserDetails">;

export type UserDetailsScreenProps = { route: UserDetailsRouteProp };
// </IX.3.1.>
