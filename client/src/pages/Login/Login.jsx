import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";
import PageTitle from "../../components/ui/PageTitle";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <PageTitle
        title="Welcome back"
        description="Sign in to continue managing your events and registrations."
      />
      <Card
        className="content-card"
        title="Sign in"
        description="Account sign-in will be added in a future sprint. You can continue exploring the event management application."
      >
        <Button onClick={() => navigate("/")}>Back to home</Button>
      </Card>
    </div>
  );
}

export default Login;