function isValidCalendarDate(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return false;
  }

  const [year, month, day] = value.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));

  return (
    date.getUTCFullYear() === year &&
    date.getUTCMonth() === month - 1 &&
    date.getUTCDate() === day
  );
}

export function getTodayDateValue() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export function validateEventForm(values) {
  const errors = {};

  if (values.title.trim().length < 3) {
    errors.title = "Enter an event name with at least 3 characters.";
  }

  if (!isValidCalendarDate(values.eventDate)) {
    errors.eventDate = "Choose a valid event date.";
  } else if (values.eventDate < getTodayDateValue()) {
    errors.eventDate = "The event date must be today or later.";
  }

  if (values.venue.trim().length < 2) {
    errors.venue = "Enter a venue with at least 2 characters.";
  }

  if (
    !/^\d+$/.test(values.capacity) ||
    !Number.isSafeInteger(Number(values.capacity)) ||
    Number(values.capacity) < 1
  ) {
    errors.capacity = "Capacity must be a whole number greater than zero.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.contactEmail.trim())) {
    errors.contactEmail = "Enter a valid organizer email address.";
  }

  return errors;
}
