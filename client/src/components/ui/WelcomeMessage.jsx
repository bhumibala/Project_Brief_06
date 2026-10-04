function WelcomeMessage({ name, projectName }) {
  const displayName = name.trim() || "there";

  return (
    <p className="welcome-message" aria-live="polite">
      Welcome, <strong>{displayName}</strong>. Here is your {projectName} workspace.
    </p>
  );
}

export default WelcomeMessage;
