import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, FileText, BookOpen, LifeBuoy, Megaphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// The app lanes the cloud binary compiles in, each registered with
// framework.RegisterModule and installable per org at
// /v1/framework/modules/:module/install. `module` is the id the API answers to;
// `installs` are the DocTypes that lane declares.
const apps = [
  {
    icon: Building2,
    name: "ERP",
    module: "erp",
    installs:
      "Sales orders, invoices, purchase orders, payments, journal and GL entries, items, stock entries, stock ledger, warehouses, customers, suppliers, employees, departments",
  },
  {
    icon: FileText,
    name: "CMS",
    module: "cms",
    installs: "Pages, posts, articles, media, authors, navigation",
  },
  {
    icon: BookOpen,
    name: "Knowledge",
    module: "kb",
    installs: "Wiki pages, agent memory, ingested sources, connectors, wikilinks",
  },
  {
    icon: LifeBuoy,
    name: "Helpdesk",
    module: "help",
    installs: "Tickets, communications, categories, articles",
  },
  {
    icon: Megaphone,
    name: "Marketing",
    module: "marketing",
    installs: "Campaigns, social posts, assets",
  },
];

// Properties of the engine the lanes share, from apps/framework in the cloud binary.
const platform = [
  "One Go binary — every app mounts under /v1/framework, so there is no second service to run.",
  "Installed per organization, one module at a time.",
  "Encrypted at rest under a master key held in Hanzo KMS.",
  "Your org comes from a validated identity, so a forged header reads as no org and is refused.",
];

const OneLanding = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 to-black" />

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-sm mb-8">
              <Building2 className="w-4 h-4" />
              All-in-One Business Suite
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              One Platform.
              <br />
              Zero Complexity.
            </h1>

            <p className="text-xl text-neutral-400 max-w-2xl mx-auto mb-8 leading-relaxed">
              ERP, CMS, knowledge base, helpdesk and marketing — one binary, one
              login, one bill.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-black hover:bg-gray-100 font-semibold px-8">
                  Talk to us
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <a href="https://docs.hanzo.ai" target="_blank" rel="noreferrer">
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  Read the docs
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The apps */}
      <section className="py-24 bg-neutral-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Five apps, one engine</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Each app is a module you install into your organization. They share
              one schema engine, one permission model and one database.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {apps.map((app, index) => (
              <motion.div
                key={app.module}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="p-6 rounded-xl bg-neutral-900/50 border border-neutral-800 hover:border-neutral-600 transition-colors"
              >
                <app.icon className="w-8 h-8 text-white mb-3" />
                <div className="flex items-baseline gap-2 mb-2">
                  <h3 className="font-semibold text-lg">{app.name}</h3>
                  <code className="text-xs text-neutral-500">{app.module}</code>
                </div>
                <p className="text-sm text-neutral-400 leading-relaxed">{app.installs}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The engine underneath */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What you are running</h2>
          </div>

          <ul className="max-w-3xl mx-auto space-y-4">
            {platform.map((line) => (
              <li
                key={line}
                className="flex gap-4 p-5 rounded-xl bg-neutral-900/50 border border-neutral-800 text-neutral-300"
              >
                <span className="text-neutral-600 select-none">—</span>
                {line}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-b from-neutral-950 to-black">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Which modules do you need?</h2>
          <p className="text-neutral-400 max-w-xl mx-auto mb-8">
            Tell us what you run your business on today and we will put a number
            on it.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-black hover:bg-gray-100 font-semibold px-8">
              Talk to us
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OneLanding;
