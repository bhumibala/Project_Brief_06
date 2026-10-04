function Button({
  children,
  text,
  variant = "primary",
  className = "",
  type = "button",
  ...props
}) {
  const label = children ?? text;
  const classes = ["button", `button--${variant}`, className]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={classes} type={type} {...props}>
      {label}
    </button>
  );
}

export default Button;
