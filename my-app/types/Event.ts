// Lab V.1.2.
export type EventItem = {
  eventId: number;
  title: string;
  description: string;
  location: string;
  // isHighlighted: boolean; // VI.1.1.
  time: string;
  date: string; // <V.2.2./>
  category: string; // <V.3.2./>
  speaker: string; // <VI.2.1./>
};