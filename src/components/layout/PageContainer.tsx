import type { ElementType, HTMLAttributes, ReactNode } from "react";
import { Container } from "./Container";

export interface PageContainerProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  children?: ReactNode;
}

/** Standard page-level width cap — the default measure for most pages. */
export function PageContainer({
  as = "div",
  className,
  children,
  ...props
}: PageContainerProps) {
  return (
    <Container as={as} size="wide" className={className} {...props}>
      {children}
    </Container>
  );
}
