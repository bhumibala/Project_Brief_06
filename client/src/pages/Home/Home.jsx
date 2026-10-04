import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";
import PageTitle from "../../components/ui/PageTitle";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="container home-page">
      <PageTitle
        title="Bring every event together"
        description="Create memorable experiences with one place to plan events, welcome participants, and keep every detail on track."
      />
      <div className="home-actions">
        <Button onClick={() => navigate("/dashboard")}>Explore dashboard</Button>
        <Button onClick={() => navigate("/login")} variant="secondary">
          Sign in
        </Button>
      </div>
      <section aria-label="Event management features" className="card-grid">
        <Card
          title="Plan with confidence"
          description="Keep event details, capacity, and schedules organized as your plans take shape."
        />
        <Card
          title="Welcome participants"
          description="Make event registration easy and keep participant information together."
        />
        <Card
          title="Stay in control"
          description="Follow registrations and attendance from a centralized event workspace."
        />
      </section>
    </div>
  );
}

export default Home;