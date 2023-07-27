import "./button.css";

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  /**
   * Is this the principal call to action on the page?
   */
  variation?: "primary" | "secondary";
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  variation = "primary",
  size = "medium",
  label,
  ...props
}: ButtonProps) => {
  return (
    <button
      type='button'
      className={[
        "storybook-button",
        `storybook-button--${variation}`,
        `storybook-button--${size}`,
      ].join(" ")}
      {...props}>
      {label}
    </button>
  );
};
