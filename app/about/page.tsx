import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Logo } from "@/components/Logo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Monstarlab",
  description: "Learn about Monstarlab, building exceptional mobile experiences for startups and SMBs across Singapore and Malaysia. iOS, Android, Web Apps, and PWA development.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <a href="/">
              <Logo />
            </a>
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
              <a href="/#services" className="transition-colors hover:text-foreground/80 text-foreground/60">Services</a>
              <a href="/#pricing" className="transition-colors hover:text-foreground/80 text-foreground/60">Pricing</a>
              <a href="/#contact" className="transition-colors hover:text-foreground/80 text-foreground/60">Contact</a>
            </nav>
            <Button asChild>
              <a href="/#contact">Get Started</a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5" />
        <div className="container relative mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              About Monstarlab
            </h1>
            <p className="text-lg text-muted-foreground sm:text-xl">
              Building exceptional mobile experiences for startups and SMBs across Singapore and Malaysia
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Monstarlab was founded with a simple mission: to help ambitious startups and SMBs in Southeast Asia bring their mobile app ideas to life. We believe that great technology should be accessible to businesses of all sizes.
                </p>
                <p>
                  With deep roots in Singapore and Malaysia, we've partnered with dozens of companies to ship iOS, Android, Web Apps, and Progressive Web Apps that users love. Our team combines technical excellence with a pragmatic, business-first approach.
                </p>
                <p>
                  We're not just developers—we're your product partners. From the first discovery call to post-launch optimization, we're invested in your success.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl border bg-muted">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&w=1600"
                alt="Monstarlab team collaboration"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12 md:mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              What We Stand For
            </h2>
            <p className="text-lg text-muted-foreground">
              Our values guide every decision we make and every line of code we write
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <div className="text-4xl mb-2">🎯</div>
                <CardTitle>Ship Fast, Ship Right</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Speed matters, but quality matters more. We balance rapid iteration with robust engineering to get your app to market faster without cutting corners.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="text-4xl mb-2">🤝</div>
                <CardTitle>Transparent Partnership</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  No black boxes. You'll know exactly where your project stands, what we're building, and why. We communicate proactively and honestly.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="text-4xl mb-2">💡</div>
                <CardTitle>User-Centric Design</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Beautiful interfaces mean nothing if users can't accomplish their goals. We obsess over usability, accessibility, and delightful experiences.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="text-4xl mb-2">🔧</div>
                <CardTitle>Pragmatic Technology</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  We choose the right tools for your business needs, not the latest trends. Proven, stable technology stacks that scale with your growth.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="text-4xl mb-2">📈</div>
                <CardTitle>Data-Driven Decisions</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Real user behavior trumps assumptions. We build analytics into every app and use data to guide feature prioritization and optimization.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="text-4xl mb-2">🌱</div>
                <CardTitle>Long-Term Success</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Launch is just the beginning. We design apps that can evolve with your business, with clean architecture and comprehensive documentation.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center space-y-4 mb-12 md:mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Our Expertise
              </h2>
              <p className="text-lg text-muted-foreground">
                Full-stack mobile development across every major platform
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">📱</span>
                    Native Mobile Development
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Expert iOS development with Swift and Android development with Kotlin. We build native apps that leverage platform-specific features for maximum performance and user experience.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">⚡</span>
                    Cross-Platform Solutions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    React Native and Flutter expertise for rapid deployment across iOS and Android. Share code while maintaining native performance and look-and-feel.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">🌐</span>
                    Progressive Web Apps
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Build once, run everywhere. PWAs deliver app-like experiences through the browser with offline support, push notifications, and install prompts.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">🔗</span>
                    Backend & Integration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Full API development, database design, cloud infrastructure, and seamless integration with your existing systems, CRMs, and third-party services.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Where We Work
              </h2>
              <p className="text-lg text-muted-foreground">
                Serving startups and SMBs across Southeast Asia
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">🇸🇬 Singapore</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Our Singapore presence puts us at the heart of Southeast Asia's tech ecosystem. We work with innovative startups and established SMBs looking to digitize and scale their operations.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">🇲🇾 Malaysia</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Malaysia's growing tech scene is home to ambitious businesses ready to compete globally. We partner with companies across Kuala Lumpur, Penang, and beyond.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to Build Together?
            </h2>
            <p className="text-lg text-muted-foreground">
              Let's talk about your app idea and how we can help you bring it to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="/#contact">Get in Touch</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/#pricing">View Pricing</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center space-y-4">
            <Logo className="justify-center" />
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              Building mobile apps for Singapore & Malaysia's most ambitious companies.
            </p>
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Monstarlab. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
