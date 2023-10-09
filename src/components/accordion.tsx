import { forwardRef } from "react";
import * as RadixAccordion from "@radix-ui/react-accordion";
import { Icon } from "@iconify/react";

export function Accordion(props: {
  children?: React.ReactNode;
  defaultValue?: string;
}) {
  return (
    <RadixAccordion.Root
      className="overflow-hidden rounded-md p-px"
      type="single"
      collapsible
      defaultValue={props.defaultValue}
    >
      {props.children}
    </RadixAccordion.Root>
  );
}

export const AccordionItem = forwardRef<
  HTMLDivElement,
  { children?: React.ReactNode; value: string }
>((props, ref) => (
  <RadixAccordion.Item ref={ref} value={props.value}>
    {props.children}
  </RadixAccordion.Item>
));
AccordionItem.displayName = "AccordionItem";

export const AccordionTrigger = forwardRef<
  HTMLButtonElement,
  { children?: React.ReactNode }
>((props, ref) => (
  <RadixAccordion.Header className="flex px-4 py-2 shadow outline-none">
    <RadixAccordion.Trigger
      ref={ref}
      className="group flex flex-1 cursor-default items-center justify-between py-2"
    >
      {props.children}
      <div
        aria-hidden
        className="transition-transform duration-300 group-data-[state=open]:rotate-180"
      >
        <Icon icon="fe:arrow-down" />
      </div>
    </RadixAccordion.Trigger>
  </RadixAccordion.Header>
));
AccordionTrigger.displayName = "AccordionTrigger";

export const AccordionContent = forwardRef<
  HTMLDivElement,
  { children?: React.ReactNode }
>((props, ref) => (
  <RadixAccordion.Content
    ref={ref}
    className="overflow-hidden bg-gray-50 p-4 outline outline-1 outline-neutral-200 data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown"
  >
    {props.children}
  </RadixAccordion.Content>
));
AccordionContent.displayName = "AccordionContent";
