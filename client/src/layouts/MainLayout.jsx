import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

function MainLayout() {
  return (
    <>
      <Navbar />

      <main className="main-content">
        <h1>Event Management System</h1>
        <p>Welcome to the application.</p>
      </main>

      <Footer />
    </>
  );
}

export default MainLayout;