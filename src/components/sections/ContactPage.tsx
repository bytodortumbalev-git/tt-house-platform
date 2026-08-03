import { Section } from "@/components/layout";
import { Display, Heading, Body, Tag, Metadata } from "@/components/elements";
import { ContactChannelList } from "@/components/patterns";
import { contactIntro, contactChannels, socialChannels } from "@/data/contact";

/** Static contact page — enquiry channels and social links. No form submission yet. */
export function ContactPage() {
  return (
    <>
      <Section spacing="xl" className="border-b border-border">
        <div className="flex max-w-content flex-col gap-6">
          <Metadata>Contact</Metadata>
          <Display>{contactIntro.title}</Display>
          <Body size="lg" className="text-foreground/80">
            {contactIntro.copy}
          </Body>
        </div>
      </Section>

      <Section spacing="lg" className="border-b border-border">
        <div className="flex flex-col gap-8">
          <Heading level={2}>Reach the House</Heading>
          <ContactChannelList channels={contactChannels} />
        </div>
      </Section>

      <Section spacing="lg">
        <div className="flex flex-col gap-6">
          <Heading level={2}>Elsewhere</Heading>
          <div className="flex flex-wrap gap-x-10 gap-y-2">
            {socialChannels.map((social) => (
              <Tag key={social.label}>{social.label} — coming soon</Tag>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
