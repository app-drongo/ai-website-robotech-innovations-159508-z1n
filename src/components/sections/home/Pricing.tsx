'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Zap } from 'lucide-react';
import { useState } from 'react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_PRICING = {
  title: 'Intelligent Pricing for Every Scale',
  subtitle: 'Choose the perfect robotics solution for your business needs',
  billingToggle: {
    monthly: 'Monthly',
    annual: 'Annual',
    annualSavings: 'Save 20%',
  },
  plans: [
    {
      name: 'Starter',
      description: 'Perfect for small businesses exploring automation',
      monthlyPrice: 299,
      annualPrice: 239,
      currency: '$',
      period: 'per robot/month',
      features: [
        'Up to 3 robotic units',
        'Basic automation workflows',
        'Email support',
        'Standard integration APIs',
        'Monthly performance reports',
      ],
      ctaText: 'Start Free Trial',
      ctaHref: '/signup?plan=starter',
      popular: false,
    },
    {
      name: 'Professional',
      description: 'Advanced automation for growing enterprises',
      monthlyPrice: 799,
      annualPrice: 639,
      currency: '$',
      period: 'per robot/month',
      features: [
        'Up to 25 robotic units',
        'Advanced AI-powered workflows',
        'Priority 24/7 support',
        'Custom integration support',
        'Real-time analytics dashboard',
        'Predictive maintenance alerts',
      ],
      ctaText: 'Get Started',
      ctaHref: '/signup?plan=professional',
      popular: true,
    },
    {
      name: 'Enterprise',
      description: 'Scalable solutions for large-scale operations',
      monthlyPrice: 1999,
      annualPrice: 1599,
      currency: '$',
      period: 'per robot/month',
      features: [
        'Unlimited robotic units',
        'Custom AI model training',
        'Dedicated success manager',
        'White-label solutions',
        'Advanced security compliance',
        'On-premise deployment options',
      ],
      ctaText: 'Contact Sales',
      ctaHref: '/contact?plan=enterprise',
      popular: false,
    },
  ],
} as const;

type PricingProps = Partial<typeof DEFAULT_PRICING>;

export default function Pricing(props: PricingProps) {
  const config = { ...DEFAULT_PRICING, ...props };
  const navigate = useSmartNavigation();
  const [isAnnual, setIsAnnual] = useState(false);

  const handlePlanSelect = (href: string) => {
    navigate(href);
  };

  return (
    <section id="pricing" className="bg-background text-foreground py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 lg:text-5xl">
            <span data-editable="title">{config.title}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            <span data-editable="subtitle">{config.subtitle}</span>
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <span className={`text-sm ${!isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
              <span data-editable="billingToggle.monthly">{config.billingToggle.monthly}</span>
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                isAnnual ? 'bg-primary' : 'bg-muted'
              }`}
              aria-label="Toggle billing period"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-background transition-transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <div className="flex items-center gap-2">
              <span className={`text-sm ${isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
                <span data-editable="billingToggle.annual">{config.billingToggle.annual}</span>
              </span>
              <Badge variant="secondary" className="text-xs">
                <span data-editable="billingToggle.annualSavings">
                  {config.billingToggle.annualSavings}
                </span>
              </Badge>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-8 lg:grid-cols-3 max-w-7xl mx-auto">
          {config.plans.map((plan, idx) => (
            <Card
              key={idx}
              className={`relative bg-card text-card-foreground transition-all duration-300 hover:shadow-lg ${
                plan.popular ? 'ring-2 ring-primary scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">
                    <Star className="h-3 w-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-8 pt-8">
                <div className="mb-4 text-primary">
                  {idx === 0 && <Zap className="h-12 w-12 mx-auto" />}
                  {idx === 1 && <Star className="h-12 w-12 mx-auto" />}
                  {idx === 2 && <Check className="h-12 w-12 mx-auto" />}
                </div>

                <h3 className="text-2xl font-bold mb-2">
                  <span data-editable={`plans[${idx}].name`}>{plan.name}</span>
                </h3>

                <p className="text-muted-foreground mb-6">
                  <span data-editable={`plans[${idx}].description`}>{plan.description}</span>
                </p>

                <div className="mb-6">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-3xl font-bold">
                      <span data-editable={`plans[${idx}].currency`}>{plan.currency}</span>
                    </span>
                    <span className="text-5xl font-bold">
                      {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    <span data-editable={`plans[${idx}].period`}>{plan.period}</span>
                  </p>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">
                        <span data-editable={`plans[${idx}].features[${featureIdx}]`}>
                          {feature}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={() => handlePlanSelect(plan.ctaHref)}
                  data-editable-href={`plans[${idx}].ctaHref`}
                  data-href={plan.ctaHref}
                  className={`w-full ${
                    plan.popular
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                      : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                  }`}
                  size="lg"
                >
                  <span data-editable={`plans[${idx}].ctaText`}>{plan.ctaText}</span>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground">
            Need a custom solution? Our team can design a tailored robotics package for your
            specific requirements.
          </p>
          <Button variant="outline" className="mt-4" onClick={() => navigate('/contact')}>
            Contact Our Experts
          </Button>
        </div>
      </div>
    </section>
  );
}
