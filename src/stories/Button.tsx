import "./button.css";

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  /**
   * Button type
   */
  variation?: "primary" | "secondary";
  /**
   * Button size
   */
  size?: "small" | "medium" | "large";
  /**
   * Button label content
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
