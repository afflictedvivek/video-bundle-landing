'use client';

import './globals.css';
import Button from '@/components/Button';
import Card from '@/components/Card';
import CardContent from '@/components/CardContent';
import Countdown from '@/components/Countdown';

export default function Home() {
  // Set countdown to 7 days from now
  const countdownDate = new Date();
  countdownDate.setDate(countdownDate.getDate() + 7);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black">
      {/* Hero Section */}
      <section className="relative px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-purple-600/20 border border-purple-500/30 rounded-full text-purple-400 text-sm font-semibold">
              🎥 Limited Time Offer
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 text-transparent bg-clip-text">
            Master Your Craft with Premium Video Tutorials
          </h1>
          <p className="text-xl sm:text-2xl text-gray-400 mb-10 max-w-3xl mx-auto">
            Get instant access to our comprehensive video bundle. 50+ hours of expert-led content, lifetime updates, and exclusive community access.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="primary" 
              className="text-lg"
              onClick={() => window.location.href = '#pricing'}
            >
              Get Started Now
            </Button>
            <Button 
              variant="outline" 
              className="text-lg"
              onClick={() => window.location.href = '#testimonials'}
            >
              See What Others Say
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto">
            <div>
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-gray-400">Hours of Content</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">10K+</div>
              <div className="text-gray-400">Happy Students</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">4.9★</div>
              <div className="text-gray-400">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="px-4 py-20 sm:px-6 lg:px-8 bg-gray-950/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-400">
              One-time payment. Lifetime access. No subscriptions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <Card>
              <CardContent>
                <h3 className="text-2xl font-bold mb-2 text-white">Starter</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">$99</span>
                  <span className="text-gray-400 ml-2">one-time</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-300">20 core video tutorials</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-300">Downloadable resources</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-300">Certificate of completion</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-300">Lifetime access</span>
                  </li>
                </ul>
                <Button 
                  variant="secondary" 
                  className="w-full"
                  onClick={() => window.location.href = 'https://checkout.shopify.com/starter-plan'}
                >
                  Get Starter
                </Button>
              </CardContent>
            </Card>

            {/* Professional Plan - Featured */}
            <Card className="border-2 border-purple-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  MOST POPULAR
                </span>
              </div>
              <CardContent>
                <h3 className="text-2xl font-bold mb-2 text-white">Professional</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">$199</span>
                  <span className="text-gray-400 ml-2">one-time</span>
                  <div className="text-sm text-green-400 mt-1">Save $50</div>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-300">All Starter features</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-300">50+ advanced tutorials</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-300">Premium project files</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-300">Private community access</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-300">Priority support</span>
                  </li>
                </ul>
                <Button 
                  variant="primary" 
                  className="w-full"
                  onClick={() => window.location.href = 'https://checkout.shopify.com/professional-plan'}
                >
                  Get Professional
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card>
              <CardContent>
                <h3 className="text-2xl font-bold mb-2 text-white">Enterprise</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">$399</span>
                  <span className="text-gray-400 ml-2">one-time</span>
                  <div className="text-sm text-green-400 mt-1">Best Value</div>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-300">All Professional features</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-300">1-on-1 coaching sessions</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-300">Custom project reviews</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-300">Exclusive master classes</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-300">VIP Discord channel</span>
                  </li>
                </ul>
                <Button 
                  variant="secondary" 
                  className="w-full"
                  onClick={() => window.location.href = 'https://checkout.shopify.com/enterprise-plan'}
                >
                  Get Enterprise
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
              What Our Students Say
            </h2>
            <p className="text-xl text-gray-400">
              Join thousands of satisfied learners who transformed their skills
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    JD
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold text-white">John Doe</div>
                    <div className="text-sm text-gray-400">Software Engineer</div>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300">
                  "This bundle completely changed my approach to development. The quality of content is outstanding, and I've already applied what I learned to real projects."
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    SK
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold text-white">Sarah Kim</div>
                    <div className="text-sm text-gray-400">Product Designer</div>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300">
                  "Best investment I've made in my career. The instructors are experts and the community support is incredible. Worth every penny!"
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    MP
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold text-white">Mike Peterson</div>
                    <div className="text-sm text-gray-400">Freelance Developer</div>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300">
                  "I've taken many courses, but this stands out. The production quality is top-notch and the content is practical and immediately applicable."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Limited Time Countdown */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/20 to-pink-900/20 border-y border-purple-500/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-red-600/20 border border-red-500/30 rounded-full text-red-400 text-sm font-semibold">
              ⚡ LIMITED TIME OFFER
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
            Special Launch Pricing Ends In:
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Lock in your lifetime access at the lowest price ever. Price increases soon!
          </p>
          <Countdown targetDate={countdownDate.toISOString()} />
          <div className="mt-10">
            <Button 
              variant="primary" 
              className="text-lg px-8 py-4"
              onClick={() => window.location.href = '#pricing'}
            >
              Claim Your Discount Now
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
            Ready to Transform Your Skills?
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Join over 10,000 students who are already mastering their craft. Get instant access to all videos, resources, and lifetime updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              variant="primary" 
              className="text-lg px-8 py-4"
              onClick={() => window.location.href = '#pricing'}
            >
              Get Started Today
            </Button>
            <Button 
              variant="outline" 
              className="text-lg px-8 py-4"
              onClick={() => window.location.href = 'mailto:support@example.com'}
            >
              Contact Sales
            </Button>
          </div>
          
          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400 text-sm">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
              Secure Payment
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              30-Day Money Back
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              Instant Access
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-8 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center text-gray-400 text-sm">
          <p>© 2024 Premium Video Bundle. All rights reserved.</p>
          <div className="mt-4 space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Contact Us</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
