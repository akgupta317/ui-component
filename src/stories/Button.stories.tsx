import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../lib/components/Button";
import { ArrowRight, Mail, Loader2 } from "lucide-react";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
    design: {
      type: "figma",
      url: "https://www.figma.com/file/...",
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
      ],
      description: "The visual style of the button",
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "icon"],
      description: "The size of the button",
    },
    isLoading: {
      control: "boolean",
      description: "Whether the button is in a loading state",
    },
    disabled: {
      control: "boolean",
      description: "Whether the button is disabled",
    },
    leftIcon: {
      control: { disable: true },
      description: "Icon to display on the left side of the button text",
    },
    rightIcon: {
      control: { disable: true },
      description: "Icon to display on the right side of the button text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Button",
    variant: "default",
    size: "default",
  },
  parameters: {
    docs: {
      description: {
        story: "The default button style with primary color (#102de6)",
      },
    },
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary",
    variant: "secondary",
  },
  parameters: {
    docs: {
      description: {
        story: "Secondary button style with a more subtle appearance",
      },
    },
  },
};

export const Destructive: Story = {
  args: {
    children: "Destructive",
    variant: "destructive",
  },
  parameters: {
    docs: {
      description: {
        story: "Used for destructive actions like delete or remove",
      },
    },
  },
};

export const Outline: Story = {
  args: {
    children: "Outline",
    variant: "outline",
  },
  parameters: {
    docs: {
      description: {
        story: "Outlined button with a border and transparent background",
      },
    },
  },
};

export const Ghost: Story = {
  args: {
    children: "Ghost",
    variant: "ghost",
  },
  parameters: {
    docs: {
      description: {
        story: "Minimal button with no background or border",
      },
    },
  },
};

export const Link: Story = {
  args: {
    children: "Link Button",
    variant: "link",
  },
  parameters: {
    docs: {
      description: {
        story: "Button that looks like a link, using the primary color",
      },
    },
  },
};

export const Small: Story = {
  args: {
    children: "Small Button",
    size: "sm",
  },
  parameters: {
    docs: {
      description: {
        story: "Small-sized button for compact UIs",
      },
    },
  },
};

export const Large: Story = {
  args: {
    children: "Large Button",
    size: "lg",
  },
  parameters: {
    docs: {
      description: {
        story: "Large-sized button for emphasis",
      },
    },
  },
};

export const WithLeftIcon: Story = {
  args: {
    children: "With Icon",
    leftIcon: <Mail className="h-4 w-4" />,
  },
  parameters: {
    docs: {
      description: {
        story: "Button with an icon on the left side",
      },
    },
  },
};

export const WithRightIcon: Story = {
  args: {
    children: "Next Step",
    rightIcon: <ArrowRight className="h-4 w-4" />,
  },
  parameters: {
    docs: {
      description: {
        story: "Button with an icon on the right side",
      },
    },
  },
};

export const Loading: Story = {
  args: {
    children: "Loading",
    isLoading: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Loading state with animated spinner",
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled",
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Disabled state with reduced opacity",
      },
    },
  },
};

export const IconButton: Story = {
  args: {
    children: <Mail className="h-4 w-4" />,
    size: "icon",
    "aria-label": "Send email",
  },
  parameters: {
    docs: {
      description: {
        story: "Icon-only button with a square shape and accessibility label",
      },
    },
  },
};
