// Lab III.4.1.
export type RootStackParamList = {
  Home: undefined;
  Details: {
    eventId: number; // <III.6.1./>
    title: string;
    description: string;
  };
};