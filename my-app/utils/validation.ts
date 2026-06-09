// Lab VI.2.2.
export const validateEventForm = (
  title: string,
  date: string,
  description: string,
  location: string,
  time: string,
  category: string,
  speaker: string
): string | null => {
  if (title.trim().length < 3) return "Title must be at least 3 characters long.";
  if (!date.trim()) return "Date cannot be empty.";
  if (!speaker.trim()) return "Speaker cannot be empty.";
  if (!description.trim()) return "Description cannot be empty.";
  if (!location.trim()) return "Location cannot be empty.";
  if (!time.trim()) return "Time cannot be empty.";
  if (!category.trim()) return "Category cannot be empty.";
  
  return null;
};