import React from 'react';
import { Button } from './lib/components/Button';
import { Heart, ArrowRight } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-background p-8 flex flex-col items-center justify-center">
      <div className="max-w-3xl w-full space-y-12">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-foreground">Elegant UI Button</h1>
          <p className="text-muted-foreground">A beautiful and customizable button component with Tailwind CSS</p>
        </div>

        <div className="flex flex-col space-y-8">
          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Button Variants</h2>
            <div className="flex flex-wrap gap-4">
              <Button>Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Button Sizes</h2>
            <div className="flex flex-wrap items-center gap-4">
              <Button size="sm">Small</Button>
              <Button>Default</Button>
              <Button size="lg">Large</Button>
              <Button size="icon"><Heart className="h-4 w-4" /></Button>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Button States</h2>
            <div className="flex flex-wrap gap-4">
              <Button isLoading>Loading</Button>
              <Button disabled>Disabled</Button>
              <Button leftIcon={<Heart className="h-4 w-4" />}>With Left Icon</Button>
              <Button rightIcon={<ArrowRight className="h-4 w-4" />}>With Right Icon</Button>
            </div>
          </section>
        </div>

        <div className="text-center pt-8">
          <p className="text-sm text-muted-foreground">
            View the Storybook documentation for more examples and API details.
          </p>
          <div className="mt-4">
            <Button onClick={() => window.open('/storybook-static/index.html', '_blank')}>
              Open Storybook
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;