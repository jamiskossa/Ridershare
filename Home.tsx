import { ArrowRight, Shield, Star, Users } from 'lucide-react';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
                Your trusted ride-sharing platform
              </h1>
              <p className="mt-3 text-lg sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Connect with professional drivers for safe and reliable transportation services.
              </p>
              <div className="mt-8 sm:mt-12">
                <Link to="/register">
                  <Button size="lg" className="mr-4">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/search">
                  <Button variant="outline" size="lg" className="mt-4 sm:mt-0 bg-white">
                    Find a Driver
                  </Button>
                </Link>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <img
                src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=1000"
                alt="Luxury car service"
                className="w-full rounded-lg shadow-xl ring-1 ring-black ring-opacity-5"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Why Choose RideShare?
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Experience the best in professional transportation services.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div className="inline-flex items-center justify-center p-3 bg-blue-600 rounded-md shadow-lg">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900">Safe & Secure</h3>
                    <p className="mt-5 text-base text-gray-500">
                      All our drivers are verified and background-checked for your safety.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div className="inline-flex items-center justify-center p-3 bg-blue-600 rounded-md shadow-lg">
                      <Star className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900">Professional Service</h3>
                    <p className="mt-5 text-base text-gray-500">
                      Experienced drivers providing top-quality transportation services.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div className="inline-flex items-center justify-center p-3 bg-blue-600 rounded-md shadow-lg">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900">Growing Community</h3>
                    <p className="mt-5 text-base text-gray-500">
                      Join thousands of satisfied users in our trusted network.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}