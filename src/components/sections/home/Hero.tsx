'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Cpu, Zap, Shield, Play } from 'lucide-react';
import { useState } from 'react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_HERO = {
  badge: 'Next-Gen Robotics',
  title: 'Intelligent Automation That Transforms Your Business',
  subtitle:
    'Deploy advanced robotic solutions that deliver measurable results. Our scalable automation technology integrates seamlessly with your operations for rapid ROI.',
  ctaText: 'Start Your Automation Journey',
  ctaHref: '/get-started',
  secondaryCtaText: 'Watch Demo',
  secondaryCtaHref: '/demo',
  features: [
    {
      title: 'AI-Powered Intelligence',
      description:
        'Advanced machine learning algorithms that adapt and optimize performance in real-time',
    },
    {
      title: 'Enterprise-Grade Security',
      description:
        'Military-grade encryption and security protocols protect your sensitive operations',
    },
    {
      title: 'Lightning-Fast Deployment',
      description:
        'Get up and running in days, not months, with our streamlined integration process',
    },
  ],
  stats: [
    { value: '99.9%', label: 'Uptime Reliability' },
    { value: '40%', label: 'Cost Reduction' },
    { value: '24/7', label: 'Expert Support' },
  ],
} as const;

type HeroProps = Partial<typeof DEFAULT_HERO>;

export default function Hero(props: HeroProps) {
  const config = { ...DEFAULT_HERO, ...props };
  const navigate = useSmartNavigation();
  const [isHovered, setIsHovered] = useState(false);

  const handlePrimaryClick = () => {
    navigate(config.ctaHref);
  };

  const handleSecondaryClick = () => {
    navigate(config.secondaryCtaHref);
  };

  return (
    <section id="hero" className="bg-background text-foreground py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Content */}
          <div className="text-center mb-16">
            <Badge
              variant="secondary"
              className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
            >
              <span data-editable="badge">{config.badge}</span>
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
              <span data-editable="title">{config.title}</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              <span data-editable="subtitle">{config.subtitle}</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                size="lg"
                onClick={handlePrimaryClick}
                data-editable-href="ctaHref"
                data-href={config.ctaHref}
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg font-semibold transition-all duration-200 hover:scale-105"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <span data-editable="ctaText">{config.ctaText}</span>
                <ArrowRight
                  className={`ml-2 h-5 w-5 transition-transform duration-200 ${isHovered ? 'translate-x-1' : ''}`}
                />
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={handleSecondaryClick}
                data-editable-href="secondaryCtaHref"
                data-href={config.secondaryCtaHref}
                className="border-border hover:bg-accent hover:text-accent-foreground px-8 py-6 text-lg font-semibold transition-all duration-200"
              >
                <Play className="mr-2 h-5 w-5" />
                <span data-editable="secondaryCtaText">{config.secondaryCtaText}</span>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
              {config.stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                    <span data-editable={`stats[${idx}].value`}>{stat.value}</span>
                  </div>
                  <div className="text-muted-foreground font-medium">
                    <span data-editable={`stats[${idx}].label`}>{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {config.features.map((feature, idx) => (
              <Card
                key={idx}
                className="bg-card text-card-foreground border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-8">
                  <div className="mb-6 text-primary">
                    {idx === 0 && <Cpu className="h-12 w-12" />}
                    {idx === 1 && <Shield className="h-12 w-12" />}
                    {idx === 2 && <Zap className="h-12 w-12" />}
                  </div>

                  <h3 className="text-xl font-semibold mb-4">
                    <span data-editable={`features[${idx}].title`}>{feature.title}</span>
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    <span data-editable={`features[${idx}].description`}>
                      {feature.description}
                    </span>
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
