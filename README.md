# Elegant UI Button

A beautiful and customizable button component built with React, TypeScript, and Tailwind CSS.

## Features

- Multiple button variants (default, secondary, destructive, outline, ghost, link)
- Various sizes (small, default, large, icon)
- Support for loading states
- Left and right icon support
- Fully typed with TypeScript
- Styled with Tailwind CSS
- Interactive documentation with Storybook

## Installation

```bash
npm install elegant-ui-button
```

## Usage

```jsx
import { Button } from 'elegant-ui-button';
import 'elegant-ui-button/dist/style.css'; // Import the styles

function App() {
  return (
    <div>
      <Button>Default Button</Button>
      <Button variant="secondary">Secondary Button</Button>
      <Button variant="destructive">Destructive Button</Button>
      <Button isLoading>Loading Button</Button>
    </div>
  );
}
```

## API

### Button Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | 'default' \| 'destructive' \| 'outline' \| 'secondary' \| 'ghost' \| 'link' | 'default' | The visual style of the button |
| size | 'default' \| 'sm' \| 'lg' \| 'icon' | 'default' | The size of the button |
| isLoading | boolean | false | Whether the button is in a loading state |
| leftIcon | ReactNode | undefined | Icon to display before the button text |
| rightIcon | ReactNode | undefined | Icon to display after the button text |
| asChild | boolean | false | Whether to merge props onto child |

Plus all standard button HTML attributes.

## Development

```bash
# Install dependencies
npm install

# Start Storybook for development
npm run storybook

# Build the component library
npm run build

# Build Storybook
npm run build-storybook
```

## License

MIT