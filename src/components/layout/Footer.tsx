'use client';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Mail, Phone, MapPin, Twitter, Linkedin, Github } from 'lucide-react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_FOOTER = {
  brandName: 'RoboTech Innovations',
  tagline: 'Intelligent robotics solutions that transform how businesses automate and innovate.',
  copyright: '© 2024 RoboTech Innovations. All rights reserved.',
  contactEmail: 'hello@robotech.com',
  contactPhone: '+1 (555) 123-4567',
  contactAddress: '123 Innovation Drive, Tech Valley, CA 94025',
  companyLinks: [
    { title: 'About Us', href: '/about' },
    { title: 'Careers', href: '/careers' },
  ],
  legalLinks: [
    { title: 'Privacy Policy', href: '/privacy' },
    { title: 'Terms of Service', href: '/terms' },
  ],
  socialLinks: [
    { title: 'Twitter', href: 'https://twitter.com/robotech' },
    { title: 'LinkedIn', href: 'https://linkedin.com/company/robotech' },
    { title: 'GitHub', href: 'https://github.com/robotech' },
  ],
} as const;

type FooterProps = Partial<typeof DEFAULT_FOOTER>;

export default function Footer(props: FooterProps) {
  const config = { ...DEFAULT_FOOTER, ...props };
  const navigate = useSmartNavigation();

  const handleLinkClick = (href: string) => {
    if (href.startsWith('http')) {
      window.open(href, '_blank', 'noopener,noreferrer');
    } else {
      navigate(href);
    }
  };

  return (
    <footer id="footer" className="bg-muted/30 text-foreground border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <h3 className="text-2xl font-bold tracking-tight">
                <span data-editable="brandName">{config.brandName}</span>
              </h3>
              <p className="text-muted-foreground mt-2 max-w-md">
                <span data-editable="tagline">{config.tagline}</span>
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <span data-editable="contactEmail">{config.contactEmail}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <span data-editable="contactPhone">{config.contactPhone}</span>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span data-editable="contactAddress">{config.contactAddress}</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <nav className="space-y-3">
              {config.companyLinks.map((link, idx) => (
                <Button
                  key={idx}
                  variant="ghost"
                  className="h-auto p-0 font-normal text-muted-foreground hover:text-foreground justify-start"
                  onClick={() => handleLinkClick(link.href)}
                  data-editable-href={`companyLinks[${idx}].href`}
                  data-href={link.href}
                >
                  <span data-editable={`companyLinks[${idx}].title`}>{link.title}</span>
                </Button>
              ))}
            </nav>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <nav className="space-y-3">
              {config.legalLinks.map((link, idx) => (
                <Button
                  key={idx}
                  variant="ghost"
                  className="h-auto p-0 font-normal text-muted-foreground hover:text-foreground justify-start"
                  onClick={() => handleLinkClick(link.href)}
                  data-editable-href={`legalLinks[${idx}].href`}
                  data-href={link.href}
                >
                  <span data-editable={`legalLinks[${idx}].title`}>{link.title}</span>
                </Button>
              ))}
            </nav>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            <span data-editable="copyright">{config.copyright}</span>
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {config.socialLinks.map((social, idx) => (
              <Button
                key={idx}
                variant="ghost"
                size="sm"
                className="h-9 w-9 p-0"
                onClick={() => handleLinkClick(social.href)}
                data-editable-href={`socialLinks[${idx}].href`}
                data-href={social.href}
                aria-label={social.title}
              >
                <div className="text-muted-foreground hover:text-foreground transition-colors">
                  {idx === 0 && <Twitter className="h-4 w-4" />}
                  {idx === 1 && <Linkedin className="h-4 w-4" />}
                  {idx === 2 && <Github className="h-4 w-4" />}
                </div>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
