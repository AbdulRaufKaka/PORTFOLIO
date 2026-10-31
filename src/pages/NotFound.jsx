import Button from '../components/ui/Button'

export default function NotFound() {
  return (
    <section className="app-container flex min-h-svh flex-col items-center justify-center text-center">
      <h1 className="font-anton text-8xl text-primary sm:text-9xl">404</h1>
      <p className="mt-4 text-lg text-muted-foreground">This page drifted off into space.</p>
      <Button as="link" to="/" className="mt-10">
        Go Home
      </Button>
    </section>
  )
}
