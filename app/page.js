// import Navbar from "@/components/Navbar";
// import LandingPage from "./landing-page";
// import Footer from "./landing-page/footer";
// import { getServerSession } from "next-auth";
// import { NEXT_AUTH } from "@/lib/auth";

// export default async function Home() {
//   const session = await getServerSession(NEXT_AUTH)
//   return (
//     <>
//       <Navbar session={session}/>
//       <main className="flex min-h-screen flex-col items-center justify-between p-24">
//         <LandingPage />
//         <Footer />
//       </main>{" "}
//     </>
//   );
// }

import React from 'react';
import { MessageSquare, BarChart3, Zap, CheckCircle, ArrowRight, Users, Globe2, Shield, Sparkles } from 'lucide-react';
import LandingNavbar from '@/components/LandingNavbar';

function App() {
  return (
   <>
   <LandingNavbar />
     <div className="pt-16 min-h-screen bg-gradient-to-b from-gray-950 to-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-900/20 to-orange-800/20 opacity-50" />
          <div className="absolute inset-y-0 right-1/2 w-screen bg-gradient-to-r from-orange-950/20 to-orange-900/20 opacity-30 blur-3xl" />
          <div className="absolute inset-y-0 right-0 w-screen bg-gradient-to-l from-orange-900/20 to-orange-950/20 opacity-30 blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32 relative">
          <div className="absolute top-8 left-1/2 -translate-x-1/2 flex items-center space-x-2 bg-gray-900/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-800 shadow-sm">
            <Sparkles className="h-4 w-4 text-orange-500" />
            <span className="text-sm font-medium text-gray-200">New: AI-Powered Feedback Analysis</span>
          </div>
          <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-tight text-white sm:text-7xl">
            Collect and manage user feedback
            <span className="text-orange-500"> with ease</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-gray-300">
            Transform user feedback into actionable insights. Our platform helps businesses collect,
            analyze, and act on customer feedback to build better products.
          </p>
          <div className="mt-10 flex justify-center gap-x-6">
            <a
              href="#"
              className="rounded-xl bg-orange-500 px-8 py-4 text-sm font-semibold text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400 transition-all duration-200 hover:scale-105"
            >
              Get started
              <ArrowRight className="ml-2 inline-block h-4 w-4" />
            </a>
            <a
              href="#"
              className="rounded-xl bg-gray-900/80 backdrop-blur-sm px-8 py-4 text-sm font-semibold text-gray-200 shadow-sm ring-1 ring-gray-800 hover:ring-gray-700 transition-all duration-200 hover:scale-105"
            >
              Watch demo
            </a>
          </div>
          <div className="mt-12 flex items-center justify-center gap-x-8">
            <img src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=50&fit=crop&crop=edges" alt="Company 1" className="h-8 grayscale opacity-40 hover:opacity-100 transition-opacity duration-200" />
            <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=200&h=50&fit=crop&crop=edges" alt="Company 2" className="h-8 grayscale opacity-40 hover:opacity-100 transition-opacity duration-200" />
            <img src="https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=200&h=50&fit=crop&crop=edges" alt="Company 3" className="h-8 grayscale opacity-40 hover:opacity-100 transition-opacity duration-200" />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Everything you need to manage feedback
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Streamline your feedback collection process and turn customer insights into growth opportunities.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-7xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <div className="rounded-lg bg-orange-500/10 p-2">
                    <MessageSquare className="h-5 w-5 flex-none text-orange-500" />
                  </div>
                  Collect Feedback
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto">
                    Easily gather feedback through customizable forms, surveys, and widgets that seamlessly integrate with your product.
                  </p>
                  <p className="mt-6">
                    <a href="#" className="text-sm font-semibold leading-6 text-orange-500 hover:text-orange-400">
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <div className="rounded-lg bg-orange-500/10 p-2">
                    <BarChart3 className="h-5 w-5 flex-none text-orange-500" />
                  </div>
                  Analyze Insights
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto">
                    Transform raw feedback into actionable insights with powerful analytics and reporting tools.
                  </p>
                  <p className="mt-6">
                    <a href="#" className="text-sm font-semibold leading-6 text-orange-500 hover:text-orange-400">
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <div className="rounded-lg bg-orange-500/10 p-2">
                    <Zap className="h-5 w-5 flex-none text-orange-500" />
                  </div>
                  Take Action
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto">
                    Prioritize and act on feedback with our built-in task management and collaboration tools.
                  </p>
                  <p className="mt-6">
                    <a href="#" className="text-sm font-semibold leading-6 text-orange-500 hover:text-orange-400">
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-orange-500">Scale with confidence</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Built for modern businesses
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Our platform is designed to help you collect, analyze, and act on feedback at any scale.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col items-start">
                <div className="rounded-lg bg-orange-500/10 p-2">
                  <Users className="h-6 w-6 text-orange-500" />
                </div>
                <dt className="mt-4 font-semibold text-white">Team Collaboration</dt>
                <dd className="mt-2 leading-7 text-gray-300">
                  Work together seamlessly with your team to analyze and act on feedback.
                </dd>
              </div>
              <div className="flex flex-col items-start">
                <div className="rounded-lg bg-orange-500/10 p-2">
                  <Globe2 className="h-6 w-6 text-orange-500" />
                </div>
                <dt className="mt-4 font-semibold text-white">Global Scale</dt>
                <dd className="mt-2 leading-7 text-gray-300">
                  Collect feedback from users worldwide with multi-language support.
                </dd>
              </div>
              <div className="flex flex-col items-start">
                <div className="rounded-lg bg-orange-500/10 p-2">
                  <Shield className="h-6 w-6 text-orange-500" />
                </div>
                <dt className="mt-4 font-semibold text-white">Enterprise Security</dt>
                <dd className="mt-2 leading-7 text-gray-300">
                  Bank-grade security and compliance features to protect your data.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

{/* Pricing Section */}
<div className="bg-gray-950 py-24 sm:py-32">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Simple pricing, for every stage
      </h2>
      <p className="mt-6 text-lg leading-8 text-gray-300">
        Choose a plan that fits your business. Upgrade anytime as you grow.
      </p>
    </div>

    <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {/* Starter */}
      <div className="flex flex-col justify-between rounded-2xl bg-gray-900 p-8 ring-1 ring-gray-800 shadow-md hover:scale-105 transition-transform duration-200">
        <div>
          <h3 className="text-lg font-semibold text-white">Starter</h3>
          <p className="mt-4 text-sm text-gray-400">Perfect for individuals and startups.</p>
          <p className="mt-6 text-4xl font-bold text-white">$0<span className="text-base font-medium text-gray-400">/mo</span></p>
        </div>
        <ul className="mt-6 space-y-4 text-sm text-gray-300">
          <li>✓ 100 feedback entries</li>
          <li>✓ Basic analytics</li>
          <li>✓ Email support</li>
        </ul>
        <a href="#" className="mt-8 inline-block rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white text-center hover:bg-orange-400">
          Get started
        </a>
      </div>

      {/* Pro */}
      <div className="flex flex-col justify-between rounded-2xl bg-orange-500/10 border border-orange-500 p-8 ring-1 ring-orange-500 shadow-lg hover:scale-105 transition-transform duration-200">
        <div>
          <h3 className="text-lg font-semibold text-orange-400">Pro</h3>
          <p className="mt-4 text-sm text-orange-200">Best for growing teams & businesses.</p>
          <p className="mt-6 text-4xl font-bold text-white">$29<span className="text-base font-medium text-orange-200">/mo</span></p>
        </div>
        <ul className="mt-6 space-y-4 text-sm text-orange-100">
          <li>✓ 10,000 feedback entries</li>
          <li>✓ Advanced analytics</li>
          <li>✓ Priority support</li>
          <li>✓ Team collaboration</li>
        </ul>
        <a href="#" className="mt-8 inline-block rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white text-center hover:bg-orange-400">
          Choose Pro
        </a>
      </div>

      {/* Enterprise */}
      <div className="flex flex-col justify-between rounded-2xl bg-gray-900 p-8 ring-1 ring-gray-800 shadow-md hover:scale-105 transition-transform duration-200">
        <div>
          <h3 className="text-lg font-semibold text-white">Enterprise</h3>
          <p className="mt-4 text-sm text-gray-400">For large scale operations and enterprises.</p>
          <p className="mt-6 text-4xl font-bold text-white">Custom</p>
        </div>
        <ul className="mt-6 space-y-4 text-sm text-gray-300">
          <li>✓ Unlimited feedback</li>
          <li>✓ Custom integrations</li>
          <li>✓ Dedicated manager</li>
          <li>✓ Enterprise-level security</li>
        </ul>
        <a href="#" className="mt-8 inline-block rounded-xl bg-gray-800 px-5 py-3 text-sm font-semibold text-white text-center hover:bg-gray-700">
          Contact Sales
        </a>
      </div>
    </div>
  </div>
</div>


      {/* Stats Section */}
      <div className="relative isolate overflow-hidden bg-black py-24 sm:py-32">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.orange.900),theme(colors.gray.950))] opacity-20" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-black shadow-xl shadow-orange-500/10 ring-1 ring-white/10" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Trusted by companies worldwide
              </h2>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col bg-white/5 p-8 backdrop-blur-2xl">
                <dt className="text-sm font-semibold leading-6 text-gray-300">Active users</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white">100k+</dd>
              </div>
              <div className="flex flex-col bg-white/5 p-8 backdrop-blur-2xl">
                <dt className="text-sm font-semibold leading-6 text-gray-300">Feedback collected</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white">1M+</dd>
              </div>
              <div className="flex flex-col bg-white/5 p-8 backdrop-blur-2xl">
                <dt className="text-sm font-semibold leading-6 text-gray-300">Data points analyzed</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white">5M+</dd>
              </div>
              <div className="flex flex-col bg-white/5 p-8 backdrop-blur-2xl">
                <dt className="text-sm font-semibold leading-6 text-gray-300">Customer satisfaction</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white">99%</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative isolate overflow-hidden">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to transform your feedback process?
              <br />
              Start collecting insights today.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Join thousands of companies using our platform to build better products through customer feedback.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-xl bg-orange-500 px-8 py-4 text-sm font-semibold text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400 transition-all duration-200 hover:scale-105"
              >
                Get started for free
                <CheckCircle className="ml-2 inline-block h-4 w-4" />
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-200 hover:text-white">
                Contact sales <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
          <div className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-orange-800 to-orange-900 opacity-30" />
        </div>
      </div>
    </div>
   </>
  );
}

export default App;