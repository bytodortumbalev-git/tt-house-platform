import type { ElementType, HTMLAttributes, ReactNode } from "react";
import { Container } from "./Container";

export interface EditorialContainerProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  children?: ReactNode;
}

/** Widest measure — full editorial spreads, campaign galleries, Chapter presentation. */
export function EditorialContainer({
  as = "div",
  className,
  children,
  ...props
}: EditorialContainerProps) {
  return (
    <Container as={as} size="widest" className={className} {...props}>
      {children}
    </Container>
  );
}
