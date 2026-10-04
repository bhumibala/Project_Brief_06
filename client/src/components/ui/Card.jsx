function Card({ title, description, children, className = "", ...props }) {
  const classes = ["card", className].filter(Boolean).join(" ");

  return (
    <article className={classes} {...props}>
      {title && <h2 className="card-title">{title}</h2>}
      {description && <p className="card-description">{description}</p>}
      {children}
    </article>
  );
}

export default Card;
