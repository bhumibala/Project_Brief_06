import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";
import PageTitle from "../../components/ui/PageTitle";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <PageTitle
        title="Dashboard"
        description="Your event planning workspace, with the essentials close at hand."
        actions={
          <Button onClick={() => navigate("/")}>Browse events</Button>
        }
      />
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