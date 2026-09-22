"use client";

import { Link } from "@tanstack/react-router";
import { Menu, PhoneCall, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { brand, routes } from "@/lib/invendo-data";

const primaryNav = [
  { label: "Home", href: routes.home },
  { label: "About", href: routes.about },
  { label: "Corporate Training", href: routes.corporate },
  { label: "Courses", href: routes.courses },
  { label: "Industries", href: routes.industries },
  { label: "Departments", href: routes.departments },
  { label: "Programs", href: routes.programs },
  { label: "Experience", href: routes.experience },
  { label: "Projects", href: routes.projects },
  { label: "Training Experience", href: routes.trainingExperience },
  { label: "Trainers", href: routes.trainers },
  { label: "Case Studies", href: routes.caseStudies },
  { label: "Organizations", href: routes.organizations },
  { label: "Testimonials", href: routes.testimonials },
  { label: "Resources", href: routes.resources },
  { label: "Contact", href: routes.contact },
] as const;

const footerLinks = [
  { label: "Corporate Training", href: routes.corporate },
  { label: "Courses", href: routes.courses },
  { label: "Training Programs", href: routes.programs },
  { label: "Industries", href: routes.industries },
  { label: "Departments", href: routes.departments },
  { label: "Projects", href: routes.projects },
  { label: "Training Experience", href: routes.trainingExperience },
  { label: "Trainers", href: routes.trainers },
  { label: "Testimonials", href: routes.testimonials },
  { label: "Resources", href: routes.resources },
  { label: "Contact", href: routes.contact },
] as const;

export function SiteFrame({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground">
        Skip to content
      </a>
      <header className="sticky top-0 z-40 border-b border-border/80 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="container-page flex h-20 items-center justify-between gap-6">
          <Link to="/" className="flex min-w-0 items-center gap-3" aria-label="Invendo AI Academy home">
            <img src={brand.logo} alt="Invendo AI Academy logo" className="h-11 w-auto max-w-44 object-contain" />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
            {primaryNav.slice(0, 6).map((item) => (
              <Link key={item.href} to={item.href} activeOptions={{ exact: item.href === routes.home }} activeProps={{ className: "text-primary" }} inactiveProps={{ className: "text-muted-foreground" }} className="rounded-md px-2 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground">{item.label}</Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Button variant="outline" asChild>
              <a href={`tel:${brand.phone.replace(/\s/g, "")}`} aria-label="Call Invendo AI Academy"><PhoneCall aria-hidden="true" />Talk to an Expert</a>
            </Button>
            <Button variant="brand" asChild><Link to="/contact">Request Corporate Training<ArrowRight aria-hidden="true" /></Link></Button>
          </div>

          <Sheet>
            <SheetTrigger asChild><Button variant="outline" size="icon" className="lg:hidden" aria-label="Open navigation menu"><Menu aria-hidden="true" /></Button></SheetTrigger>
            <SheetContent className="w-full max-w-sm overflow-y-auto border-border bg-background">
              <SheetHeader className="text-left"><SheetTitle><img src={brand.logo} alt="Invendo AI Academy logo" className="h-11 w-auto object-contain" /></SheetTitle><SheetDescription>{brand.descriptor}</SheetDescription></SheetHeader>
              <nav className="mt-8 grid gap-1" aria-label="Mobile navigation">
                {primaryNav.map((item) => <SheetClose key={item.href} asChild><Link to={item.href} className="rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-accent">{item.label}</Link></SheetClose>)}
                <SheetClose asChild><Button variant="brand" className="mt-4" asChild><Link to="/contact">Request Corporate Training</Link></Button></SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
        <nav className="hidden border-t border-border/70 lg:block" aria-label="Expanded navigation">
          <div className="container-page flex items-center justify-between gap-1 overflow-x-auto py-2">
            {primaryNav.slice(6).map((item) => (
              <Link
                key={item.href}
                to={item.href}
                activeOptions={{ exact: item.href === routes.home }}
                activeProps={{ className: "text-primary" }}
                inactiveProps={{ className: "text-muted-foreground" }}
                 className="whitespace-nowrap rounded-md px-2 py-1.5 text-xs font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </header>

      <main id="main-content">{children}</main>

      <footer className="border-t border-border bg-footer text-footer-foreground">
        <div className="container-page grid gap-10 py-14 lg:grid-cols-[1.25fr_1fr_1fr]">
          <div className="space-y-5">
            <img src={brand.logo} alt="Invendo AI Academy logo" className="h-12 w-auto object-contain" loading="lazy" />
            <p className="max-w-md text-sm leading-7 text-footer-muted">{brand.descriptor}. Practical, role-based corporate AI training for employee productivity.</p>
            <Button variant="footer" asChild>
              <Link to="/contact">Get a Corporate Training Proposal</Link>
            </Button>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-normal text-footer-heading">Navigation</h2>
            <ul className="mt-4 grid grid-cols-2 gap-3 text-sm text-footer-muted">
              {footerLinks.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="hover:text-footer-heading">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <address className="not-italic">
            <h2 className="text-sm font-semibold uppercase tracking-normal text-footer-heading">Business Information</h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-footer-muted">
              <li className="flex gap-3"><PhoneCall className="mt-1 h-4 w-4 text-footer-accent" aria-hidden="true" /> <a href={`tel:${brand.phone.replace(/\s/g, "")}`} className="hover:text-footer-heading">{brand.phone}</a></li>
              <li className="flex gap-3"><Mail className="mt-1 h-4 w-4 text-footer-accent" aria-hidden="true" /> <a href={`mailto:${brand.email}`} className="hover:text-footer-heading">{brand.email}</a></li>
              <li className="flex gap-3"><MapPin className="mt-1 h-4 w-4 shrink-0 text-footer-accent" aria-hidden="true" /> <span>{brand.address}</span></li>
              <li className="flex gap-3"><Clock className="mt-1 h-4 w-4 text-footer-accent" aria-hidden="true" /> <span>{brand.hours}</span></li>
            </ul>
          </address>
        </div>
        <div className="border-t border-footer-line">
          <div className="container-page flex flex-col gap-3 py-5 text-xs text-footer-muted md:flex-row md:items-center md:justify-between">
            <p>Copyright © {new Date().getFullYear()} Invendo AI Academy. All rights reserved.</p>
            <div className="flex gap-4">
              <Link to="/privacy-policy" className="hover:text-footer-heading">Privacy Policy</Link>
              <Link to="/terms-and-conditions" className="hover:text-footer-heading">Terms & Conditions</Link>
              <a href="/sitemap.xml" className="hover:text-footer-heading">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
