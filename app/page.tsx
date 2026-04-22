import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { siteContent } from "@/lib/siteContent";
import { Logo } from "@/components/Logo";

export default function Home() {
  const { hero, features, howItWorks, techStack, pricing, demo, contact, footer } = siteContent;

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <Logo />
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
              <a href="#services" className="transition-colors hover:text-foreground/80 text-foreground/60">Services</a>
              <a href="#pricing" className="transition-colors hover:text-foreground/80 text-foreground/60">Pricing</a>
              <a href="#contact" className="transition-colors hover:text-foreground/80 text-foreground/60">Contact</a>
            </nav>
            <Button asChild>
              <a href="#contact">Get Started</a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5" />
        <div className="container relative mx-auto px-4 py-16 md:py-24 lg:py-32">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-6 text-center lg:text-left">
              <Badge variant="secondary" className="inline-block">
                {hero.badge}
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                {hero.headline}
              </h1>
              <p className="text-lg text-muted-foreground sm:text-xl max-w-2xl mx-auto lg:mx-0">
                {hero.subheadline}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="text-base" asChild>
                  <a href="#contact">{hero.ctaPrimary}</a>
                </Button>
                <Button size="lg" variant="outline" className="text-base" asChild>
                  <a href="#work">{hero.ctaSecondary}</a>
                </Button>
              </div>
            </div>
            <div className="relative aspect-[4/3] lg:aspect-square rounded-xl overflow-hidden shadow-2xl border bg-muted">
              <Image
                src={hero.image}
                alt={hero.imageAlt}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="services" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12 md:mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              {features.heading}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {features.subheading}
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.items.map((feature, index) => (
              <Card key={index} className="relative overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <div className="text-4xl mb-2">{feature.icon}</div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12 md:mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              {howItWorks.heading}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {howItWorks.subheading}
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {howItWorks.steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold font-mono shadow-lg">
                      {step.number}
                    </div>
                    {index < howItWorks.steps.length - 1 && (
                      <div className="hidden lg:block absolute top-8 left-16 w-full h-0.5 bg-gradient-to-r from-primary to-transparent" />
                    )}
                  </div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack / Integrations Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12 md:mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              {techStack.heading}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {techStack.subheading}
            </p>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 max-w-5xl mx-auto">
            {techStack.logos.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-6 rounded-lg border bg-card hover:bg-accent transition-colors group"
              >
                <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">
                  {tech.icon}
                </div>
                <p className="text-xs font-mono text-muted-foreground group-hover:text-foreground">
                  {tech.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12 md:mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              {pricing.heading}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {pricing.subheading}
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3 max-w-6xl mx-auto">
            {pricing.tiers.map((tier, index) => (
              <Card
                key={index}
                className={`relative flex flex-col ${
                  tier.highlighted
                    ? "border-primary shadow-xl scale-105 lg:scale-110"
                    : ""
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    {tier.tagline}
                  </div>
                )}
                <CardHeader className="pb-8">
                  {!tier.highlighted && tier.tagline && (
                    <Badge variant="secondary" className="w-fit mb-2">
                      {tier.tagline}
                    </Badge>
                  )}
                  <CardTitle className="text-2xl">{tier.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{tier.price}</span>
                  </div>
                  <CardDescription className="mt-2">
                    {tier.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <span className="mr-2 text-primary">✓</span>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full"
                    variant={tier.highlighted ? "default" : "outline"}
                    asChild
                  >
                    <a href="#contact">{tier.cta}</a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Demo CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Card className="relative overflow-hidden border-2">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/5 to-blue-500/10" />
            <CardHeader className="relative text-center pb-8">
              <CardTitle className="text-3xl md:text-4xl lg:text-5xl font-bold">
                {demo.heading}
              </CardTitle>
              <CardDescription className="text-lg mt-4 max-w-2xl mx-auto">
                {demo.subheading}
              </CardDescription>
            </CardHeader>
            <CardContent className="relative flex flex-col sm:flex-row gap-4 justify-center pb-12">
              <Button size="lg" className="text-base" asChild>
                <a href="#contact">{demo.ctaPrimary}</a>
              </Button>
              <Button size="lg" variant="outline" className="text-base" asChild>
                <a href="#work">{demo.ctaSecondary}</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              {contact.heading}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {contact.subheading}
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form
                  action={`mailto:${contact.info.email}`}
                  method="post"
                  encType="text/plain"
                  className="space-y-4"
                >
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder={contact.form.namePlaceholder}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder={contact.form.emailPlaceholder}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      name="company"
                      placeholder={contact.form.companyPlaceholder}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder={contact.form.messagePlaceholder}
                      rows={5}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    {contact.form.submitButton}
                  </Button>
                </form>
              </CardContent>
            </Card>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="mr-3 text-primary text-xl">📧</span>
                    <div>
                      <p className="font-medium">Email</p>
                      <a
                        href={`mailto:${contact.info.email}`}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {contact.info.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="mr-3 text-primary text-xl">📍</span>
                    <div>
                      <p className="font-medium">Locations</p>
                      <p className="text-muted-foreground">
                        {contact.info.locations.join(" • ")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <Card className="bg-gradient-to-br from-primary/5 to-purple-500/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-lg">Why Choose Monstarlab?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p>✓ 100% client satisfaction rate</p>
                  <p>✓ Based in Singapore & Malaysia</p>
                  <p>✓ Expert in mobile & web technologies</p>
                  <p>✓ Fast turnaround times</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/30 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-1">
              <Logo className="mb-4" />
              <p className="text-sm text-muted-foreground">
                {footer.tagline}
              </p>
            </div>
            {footer.columns.map((column, index) => (
              <div key={index}>
                <h3 className="font-semibold mb-4">{column.title}</h3>
                <ul className="space-y-2">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <Separator className="my-8" />
          <div className="text-center text-sm text-muted-foreground">
            {footer.copyright}
          </div>
        </div>
      </footer>
    </div>
  );
}
