import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";
import PageTitle from "../../components/ui/PageTitle";

function Profile() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <PageTitle
        title="Your profile"
        description="Manage your event management account and personal details."
      />
      <Card
        className="content-card"
        title="Profile settings"
        description="Profile editing will be available in a future sprint. Your account details will appear here."
      >
        <Button onClick={() => navigate("/")}>Return to home</Button>
      </Card>
    </div>
  );
}

export default Profile;