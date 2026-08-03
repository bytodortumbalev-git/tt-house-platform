import { Heading, Body, Tag } from "@/components/elements";
import type { ContactChannel } from "@/data/contact";

export interface ContactChannelListProps {
  channels: ContactChannel[];
}

/** Renders the enquiry/press/collaboration/custom/appointment entries for /contact. */
export function ContactChannelList({ channels }: ContactChannelListProps) {
  return (
    <ul className="flex flex-col divide-y divide-border border-t border-border">
      {channels.map((channel) => (
        <li
          key={channel.label}
          className="flex flex-col gap-2 py-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
        >
          <div className="flex flex-col gap-1">
            <Heading level={3}>{channel.label}</Heading>
            <Body size="sm" className="text-foreground/80">
              {channel.description}
            </Body>
          </div>
          {channel.href ? (
            <a
              href={channel.href}
              className="text-body-sm font-body tracking-wide text-foreground opacity-100 transition-opacity duration-fast ease-standard hover:opacity-70"
            >
              {channel.action}
            </a>
          ) : (
            <Tag>{channel.action}</Tag>
          )}
        </li>
      ))}
    </ul>
  );
}
