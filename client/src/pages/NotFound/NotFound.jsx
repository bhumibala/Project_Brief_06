import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";
import PageTitle from "../../components/ui/PageTitle";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="container not-found-page">
      <PageTitle
        title="Page not found"
        description="We couldn't find the page you were looking for."
      />
      <Card className="content-card" title="404">
        <Button onClick={() => navigate("/")}>Return to home</Button>
      </Card>
    </div>
  );
}

export default NotFound;