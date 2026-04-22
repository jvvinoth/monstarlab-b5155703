import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { siteContent } from "@/lib/siteContent";

export default function Home() {
  const { hero, features, howItWorks, techStack, pricing, demo, contact, footer } = siteContent;

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
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
                  <CardDescription className="mt-2 text-base">
                    {tier.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-3">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">✓</span>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full"
                    variant={tier.highlighted ? "default" : "outline"}
                    size="lg"
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

      {/* Demo/CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-purple-500/10 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              {demo.heading}
            </h2>
            <p className="text-lg text-muted-foreground">
              {demo.subheading}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="text-base" asChild>
                <a href="#contact">{demo.ctaPrimary}</a>
              </Button>
              <Button size="lg" variant="outline" className="text-base" asChild>
                <a href="#work">{demo.ctaSecondary}</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-16 md:py-24 border-t">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                {contact.heading}
              </h2>
              <p className="text-lg text-muted-foreground">
                {contact.subheading}
              </p>
            </div>
            <div className="grid gap-12 md:grid-cols-3">
              <Card className="md:col-span-2">
                <CardContent className="pt-6">
                  <form
                    action={`mailto:${contact.info.email}`}
                    method="post"
                    encType="text/plain"
                    className="space-y-6"
                  >
                    <div className="grid gap-4 sm:grid-cols-2">
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
                    <Button type="submit" size="lg" className="w-full">
                      {contact.form.submitButton}
                    </Button>
                  </form>
                </CardContent>
              </Card>
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Email</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <a
                      href={`mailto:${contact.info.email}`}
                      className="text-primary hover:underline font-mono text-sm"
                    >
                      {contact.info.email}
                    </a>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Locations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {contact.info.locations.map((location, index) => (
                        <li key={index} className="text-sm text-muted-foreground">
                          {location}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/50">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5 mb-8">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Monstarlab</h3>
              <p className="text-muted-foreground max-w-md">
                {footer.tagline}
              </p>
            </div>
            {footer.columns.map((column, index) => (
              <div key={index}>
                <h4 className="font-semibold mb-4">{column.title}</h4>
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
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>{footer.copyright}</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
