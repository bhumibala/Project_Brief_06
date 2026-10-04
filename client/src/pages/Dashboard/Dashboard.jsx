import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";
import PageTitle from "../../components/ui/PageTitle";
import WelcomeMessage from "../../components/ui/WelcomeMessage";
import EventCreationForm from "./EventCreationForm";

function Dashboard() {
  const navigate = useNavigate();
  const [organizerName, setOrganizerName] = useState("");
  const [planningTipVisible, setPlanningTipVisible] = useState(false);

  return (
    <div className="container">
      <PageTitle
        title="Dashboard"
        description="Your event planning workspace, with the essentials close at hand."
        actions={
          <Button onClick={() => navigate("/")}>Browse events</Button>
        }
      />
      <Card
        className="dashboard-interaction-card"
        title="Make this dashboard yours"
        description="Enter your name to personalize your welcome. Your changes update as you type."
      >
        <label className="dashboard-name-label" htmlFor="organizer-name">
          Your name
        </label>
        <input
          autoComplete="name"
          className="dashboard-name-input"
          id="organizer-name"
          maxLength={60}
          onChange={(event) => setOrganizerName(event.target.value)}
          placeholder="e.g. Alex"
          type="text"
          value={organizerName}
        />
        <WelcomeMessage
          name={organizerName}
          projectName="Event Management System"
        />
        <div className="dashboard-tip-control">
          <Button
            aria-expanded={planningTipVisible}
            onClick={() => setPlanningTipVisible((visible) => !visible)}
            variant="secondary"
          >
            {planningTipVisible ? "Hide planning tip" : "Show planning tip"}
          </Button>
        </div>
        {planningTipVisible && (
          <p className="dashboard-tip" role="status">
            Start with your event date and capacity, then build a schedule that
            works for your participants.
          </p>
        )}
      </Card>
      <EventCreationForm />
      <section aria-label="Dashboard overview" className="card-grid">
        <Card
          title="Events"
          description="Create and manage events, details, schedules, and capacity."
        />
        <Card
          title="Registrations"
          description="Keep participant registrations and event records organized."
        />
        <Card
          title="Attendance"
          description="Track check-ins and review attendance for your events."
        />
      </section>
    </div>
  );
}

export default Dashboard;