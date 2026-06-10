import { EventItem } from "./Event";                                      // <VI.2.6./>

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
    title: string;
    body: string;
  };
  // </VII.1.3.>
  Users: undefined; // <VIII.1.6./>
  Todos: undefined; // <VIII.2.4./>
};