// Lab III.4.1.
export type RootStackParamList = {
  Home: undefined;
  Details: {
    eventId: number; // <III.6.1./>
    title: string;
    description: string;
    location: string; // <IV.1.1./>
    time: string; // <IV.3.1./>
  };
};