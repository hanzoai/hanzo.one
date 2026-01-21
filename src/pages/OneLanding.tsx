import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Building2, Users, CreditCard, BarChart3, Calendar, FileText, Mail, MessageSquare, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  { icon: Users, name: "Team Management", description: "Manage your entire organization" },
  { icon: CreditCard, name: "Billing & Invoicing", description: "Automated financial workflows" },
  { icon: BarChart3, name: "Analytics", description: "Real-time business intelligence" },
  { icon: Calendar, name: "Scheduling", description: "Smart calendar management" },
  { icon: FileText, name: "Documents", description: "AI-powered document processing" },
  { icon: Mail, name: "Email", description: "Unified inbox with AI assist" },
  { icon: MessageSquare, name: "Communication", description: "Team chat and video calls" },
  { icon: Building2, name: "CRM", description: "Customer relationship management" },
];

const plans = [
  {
    name: "Starter",
    price: "$29",
    description: "For small teams",
    features: ["Up to 5 team members", "Basic analytics", "Email support"],
  },
  {
    name: "Business",
    price: "$99",
    description: "For growing companies",
    features: ["Up to 50 team members", "Advanced analytics", "Priority support", "Custom integrations"],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations",
    features: ["Unlimited team members", "Dedicated support", "SLA guarantee", "On-premise option"],
  },
];

const OneLanding = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-black to-teal-900/20" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/10 rounded-full blur-3xl" />

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm mb-8">
              <Building2 className="w-4 h-4" />
              All-in-One Business Suite
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-emerald-200 to-emerald-400 bg-clip-text text-transparent">
              One Platform.
              <br />
              Zero Complexity.
            </h1>

            <p className="text-xl text-neutral-400 max-w-2xl mx-auto mb-8 leading-relaxed">
              Everything you need to run your business. Team management, billing,
              analytics, documents—all powered by AI.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold px-8">
                Start Free Trial
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-neutral-700 hover:bg-neutral-800">
                Book a Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-neutral-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Everything in One Place</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Stop juggling between apps. Hanzo One brings all your business tools together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="p-5 rounded-xl bg-neutral-900/50 border border-neutral-800 hover:border-emerald-500/50 transition-colors"
              >
                <feature.icon className="w-8 h-8 text-emerald-400 mb-3" />
                <h3 className="font-semibold mb-1">{feature.name}</h3>
                <p className="text-sm text-neutral-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Simple Pricing</h2>
            <p className="text-neutral-400">One price for everything. No hidden fees.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative p-6 rounded-2xl ${
                  plan.popular
                    ? "bg-gradient-to-b from-emerald-900/50 to-neutral-900/50 border-2 border-emerald-500"
                    : "bg-neutral-900/50 border border-neutral-800"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-emerald-500 text-black text-xs font-semibold rounded-full">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-semibold mb-1">{plan.name}</h3>
                <p className="text-sm text-neutral-400 mb-4">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-neutral-400">/month</span>}
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-neutral-300">
                      <Check className="w-4 h-4 text-emerald-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-emerald-500 hover:bg-emerald-600 text-black"
                      : "bg-neutral-800 hover:bg-neutral-700"
                  }`}
                >
                  Get Started
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-b from-neutral-950 to-black">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Simplify?</h2>
          <p className="text-neutral-400 max-w-xl mx-auto mb-8">
            Join thousands of businesses running on Hanzo One.
          </p>
          <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold px-8">
            Start Free Trial
          </Button>
        </div>
      </section>
    </div>
  );
};

export default OneLanding;
