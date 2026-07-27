import type { ElementType, HTMLAttributes, ReactNode } from "react";
import { Container } from "./Container";

export interface ReadingContainerProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  children?: ReactNode;
}

/** Editorial body-copy measure — long-form reading such as Journal entries and House narrative. */
export function ReadingContainer({
  as = "div",
  className,
  children,
  ...props
}: ReadingContainerProps) {
  return (
    <Container as={as} size="content" className={className} {...props}>
      {children}
    </Container>
  );
}
