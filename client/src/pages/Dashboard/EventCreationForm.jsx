import { useState } from "react";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";
import {
  getTodayDateValue,
  validateEventForm,
} from "../../utils/validateEventForm";

const EMPTY_EVENT = {
  title: "",
  eventDate: "",
  venue: "",
  capacity: "",
  contactEmail: "",
  description: "",
};

function EventCreationForm() {
  const [values, setValues] = useState(EMPTY_EVENT);
  const [errors, setErrors] = useState({});
  const [submittedEvent, setSubmittedEvent] = useState(null);

  function handleChange(event) {
    const { name, value } = event.target;

    setValues((currentValues) => ({ ...currentValues, [name]: value }));
    setErrors((currentErrors) => {
      if (!currentErrors[name]) {
        return currentErrors;
      }

      const nextErrors = { ...currentErrors };
      delete nextErrors[name];
      return nextErrors;
    });
    setSubmittedEvent(null);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const validationErrors = validateEventForm(values);
    setErrors(validationErrors);
    setSubmittedEvent(null);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setSubmittedEvent({
      ...values,
      title: values.title.trim(),
      venue: values.venue.trim(),
      contactEmail: values.contactEmail.trim(),
      description: values.description.trim(),
    });
    setValues({ ...EMPTY_EVENT });
  }

  function handleReset() {
    setValues({ ...EMPTY_EVENT });
    setErrors({});
    setSubmittedEvent(null);
  }

  function fieldError(name) {
    return errors[name] ? (
      <span className="form-error" id={`${name}-error`}>
        {errors[name]}
      </span>
    ) : null;
  }

  return (
    <>
      <Card
        className="event-form-card"
        description="Add event details to preview a locally submitted event. Nothing is sent to a server."
        title="Create an event"
      >
        <form className="event-form" noValidate onSubmit={handleSubmit}>
          {Object.keys(errors).length > 0 && (
            <p className="form-error-summary" role="alert">
              Please correct the highlighted fields before submitting.
            </p>
          )}

          <div className="event-form-grid">
            <div className="form-field">
              <label htmlFor="event-title">
                Event name <span aria-hidden="true">*</span>
              </label>
              <input
                aria-describedby={errors.title ? "title-error" : undefined}
                aria-invalid={Boolean(errors.title)}
                autoComplete="off"
                id="event-title"
                maxLength={100}
                name="title"
                onChange={handleChange}
                placeholder="e.g. Spring Design Workshop"
                required
                type="text"
                value={values.title}
              />
              {fieldError("title")}
            </div>

            <div className="form-field">
              <label htmlFor="event-date">
                Event date <span aria-hidden="true">*</span>
              </label>
              <input
                aria-describedby={
                  errors.eventDate ? "eventDate-error" : undefined
                }
                aria-invalid={Boolean(errors.eventDate)}
                id="event-date"
                min={getTodayDateValue()}
                name="eventDate"
                onChange={handleChange}
                required
                type="date"
                value={values.eventDate}
              />
              {fieldError("eventDate")}
            </div>

            <div className="form-field">
              <label htmlFor="event-venue">
                Venue <span aria-hidden="true">*</span>
              </label>
              <input
                aria-describedby={errors.venue ? "venue-error" : undefined}
                aria-invalid={Boolean(errors.venue)}
                autoComplete="street-address"
                id="event-venue"
                maxLength={120}
                name="venue"
                onChange={handleChange}
                placeholder="e.g. Main Auditorium"
                required
                type="text"
                value={values.venue}
              />
              {fieldError("venue")}
            </div>

            <div className="form-field">
              <label htmlFor="event-capacity">
                Participant capacity <span aria-hidden="true">*</span>
              </label>
              <input
                aria-describedby={errors.capacity ? "capacity-error" : undefined}
                aria-invalid={Boolean(errors.capacity)}
                id="event-capacity"
                min="1"
                name="capacity"
                onChange={handleChange}
                placeholder="e.g. 120"
                required
                step="1"
                type="number"
                value={values.capacity}
              />
              {fieldError("capacity")}
            </div>

            <div className="form-field event-form-field--full">
              <label htmlFor="event-contact-email">
                Organizer email <span aria-hidden="true">*</span>
              </label>
              <input
                aria-describedby={
                  errors.contactEmail ? "contactEmail-error" : undefined
                }
                aria-invalid={Boolean(errors.contactEmail)}
                autoComplete="email"
                id="event-contact-email"
                maxLength={254}
                name="contactEmail"
                onChange={handleChange}
                placeholder="organizer@example.com"
                required
                type="email"
                value={values.contactEmail}
              />
              {fieldError("contactEmail")}
            </div>

            <div className="form-field event-form-field--full">
              <label htmlFor="event-description">
                Description <span className="form-optional">(optional)</span>
              </label>
              <textarea
                id="event-description"
                maxLength={500}
                name="description"
                onChange={handleChange}
                placeholder="What should participants know about this event?"
                rows="3"
                value={values.description}
              />
              <span className="form-hint">
                {values.description.length}/500 characters
              </span>
            </div>
          </div>

          <div className="event-form-actions">
            <Button type="submit">Create event</Button>
            <Button onClick={handleReset} type="button" variant="secondary">
              Reset form
            </Button>
          </div>
        </form>
      </Card>

      {submittedEvent && (
        <Card
          className="event-submission-card"
          description="This event was created in the current page session. It has not been sent to a backend."
          title="Event created successfully"
          role="status"
        >
          <dl className="event-summary">
            <div>
              <dt>Event</dt>
              <dd>{submittedEvent.title}</dd>
            </div>
            <div>
              <dt>Date</dt>
              <dd>{submittedEvent.eventDate}</dd>
            </div>
            <div>
              <dt>Venue</dt>
              <dd>{submittedEvent.venue}</dd>
            </div>
            <div>
              <dt>Capacity</dt>
              <dd>{submittedEvent.capacity}</dd>
            </div>
            <div>
              <dt>Organizer</dt>
              <dd>{submittedEvent.contactEmail}</dd>
            </div>
            {submittedEvent.description && (
              <div>
                <dt>Description</dt>
                <dd>{submittedEvent.description}</dd>
              </div>
            )}
          </dl>
        </Card>
      )}
    </>
  );
}

export default EventCreationForm;
