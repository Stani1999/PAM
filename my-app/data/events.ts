// Lab V.1.3.
import { EventItem } from "../types/Event";

export const events: EventItem[] = [
    // <V.3.3.>
    { eventId: 1, title: "Lecture: React", description: "Introduction to React Native basics.", location: "A1",// isHighlighted: true, <VI.1.1./>
         time: "10:00", date: "2026-10-12", category: "Lecture", 
         speaker: "Dr. Maciej Stanisław" // <VI.2.1./>
     }, 
    { eventId: 2, title: "Workshop: AI", description: "Hands-on machine learning models training.", location: "B2",// isHighlighted: false, <VI.1.1./>
         time: "12:00", date: "2026-10-12", category: "Workshop", 
         speaker: "J.K. Chmielacky" // <VI.2.1./>
     }, 
    { eventId: 3, title: "Meeting: Coding Club", description: "Weekly algorithmic challenges and pizza.", location: "C3",// isHighlighted: true, <VI.1.1./>
         time: "15:00", date: "2026-10-13", category: "Meeting", 
         speaker: "Dr. Piotr Fulmański" // <VI.2.1./>
     }, 
    { eventId: 4, title: "Seminar: Mobile Dev", description: "Future of cross-platform frameworks.", location: "D4",// isHighlighted: false, <VI.1.1./>
         time: "17:00", date: "2026-10-13", category: "Seminar",
          speaker: "Dr. Mike Wazowski" // <VI.2.1./>
     }, 
    { eventId: 5, title: "Hackathon Kickoff", description: "Team formation and rules explanation.", location: "E5",// isHighlighted: true, <VI.1.1./>
         time: "19:00", date: "2026-10-14", category: "Event", 
         speaker: "Hackathon Committee" // <VI.2.1./>
     }, 
    { eventId: 6, title: "Lab: Database Design", description: "Normalizing SQL databases.", location: "F6",// isHighlighted: false, <VI.1.1./>
         time: "09:00", date: "2026-10-15", category: "Lab", 
         speaker: "Dr. Wilson" // <VI.2.1./>
     }, 
    { eventId: 7, title: "Lecture: TypeScript", description: "Advanced typing and generics.", location: "G7",// isHighlighted: true, <VI.1.1./>
         time: "11:00", date: "2026-10-15", category: "Lecture", 
         speaker: "Dr. Smith" // <VI.2.1./>
     }, 
    { eventId: 8, title: "Workshop: UI/UX", description: "Prototyping in Figma.", location: "H8",// isHighlighted: false, <VI.1.1./>
         time: "13:00", date: "2026-10-16", category: "Workshop", 
         speaker: "Emily" // <VI.2.1./>
     }, 
    { eventId: 9, title: "Networking Session", description: "Meet industry leaders.", location: "I9",// isHighlighted: true, <VI.1.1./>
         time: "15:30", date: "2026-10-16", category: "Networking", 
         speaker: "John Doe" // <VI.2.1./>
     }, 
    { eventId: 10, title: "Seminar: Cloud Services", description: "AWS and Azure deployment strategies.", location: "J0",// isHighlighted: false, <VI.1.1./>
         time: "17:30", date: "2026-10-17", category: "Seminar", 
         speaker: "Jane Smith" // <VI.2.1./>
     }, 
    { eventId: 11, title: "Code Review Panel", description: "Best practices in PRs.", location: "K1",// isHighlighted: true, <VI.1.1./>
         time: "19:00", date: "2026-10-17", category: "Panel", 
         speaker: "Bob Johnson" // <VI.2.1./>
     }, 
    { eventId: 12, title: "Workshop: Testing", description: "Unit testing with Jest.", location: "L2",// isHighlighted: false, <VI.1.1./>
         time: "09:30", date: "2026-10-18", category: "Workshop", 
         speaker: "Alice Brown" // <VI.2.1./>
     }, 
    { eventId: 13, title: "Closing Ceremony", description: "Awards and summary.", location: "Main Hall",// isHighlighted: true, <VI.1.1./>
         time: "20:00", date: "2026-10-18", category: "Event", 
         speaker: "Event Committee" // <VI.2.1./>
     }, 
    { eventId: 14, title: "After Party", description: "Music and drinks.", location: "Village",// isHighlighted: true, <VI.1.1./>
         time: "22:00", date: "2026-10-18", category: "Party", 
         speaker: "DJ Vance" // <VI.2.1./>
     }, 
    { eventId: 15, title: "Lecture: Security", description: "Cybersecurity fundamentals.", location: "A1",// isHighlighted: false, <VI.1.1./>
         time: "08:00", date: "2026-10-19", category: "Lecture", 
         speaker: "Dr. Smith" // <VI.2.1./>
     }, 
    { eventId: 16, title: "Workshop: CI/CD", description: "GitHub Actions setup.", location: "B2", //isHighlighted: true,  <VI.1.1./>
         time: "10:30", date: "2026-10-19", category: "Workshop",
          speaker: "Prof. Johnson" // <VI.2.1./>
     }
    // </V.3.3.>
];