import { Home, Compass } from "lucide-react";
import { Container } from "../components/ui/Container";
import { Button } from "../components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <Container size="narrow">
        <span className="font-mono text-sm font-bold text-accent">404</span>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-text sm:text-4xl">
          Page not found
        </h1>
        <p className="mt-3 text-sm text-text-muted leading-relaxed max-w-md mx-auto">
          The page or resource you requested does not exist or may have been relocated.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button href="/" variant="primary" size="md">
            <Home className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
          <Button href="/services" variant="secondary" size="md">
            <Compass className="mr-2 h-4 w-4" />
            Browse Services
          </Button>
        </div>
      </Container>
    </div>
  );
}
