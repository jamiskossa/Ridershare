import { useState } from 'react';
import { Button } from '../components/Button';
import { Search, MapPin, Star, Clock } from 'lucide-react';

interface Driver {
  id: number;
  name: string;
  rating: number;
  vehicle: string;
  location: string;
  price: number;
  available: boolean;
}

const mockDrivers: Driver[] = [
  {
    id: 1,
    name: 'John Smith',
    rating: 4.8,
    vehicle: 'Toyota Camry - Sedan',
    location: '2.5 km away',
    price: 25,
    available: true,
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    rating: 4.9,
    vehicle: 'Tesla Model 3 - Luxury',
    location: '1.8 km away',
    price: 35,
    available: true,
  },
  {
    id: 3,
    name: 'Michael Brown',
    rating: 4.7,
    vehicle: 'Honda CR-V - SUV',
    location: '3.2 km away',
    price: 30,
    available: true,
  },
];

export function SearchDrivers() {
  const [location, setLocation] = useState('');
  const [vehicleType, setVehicleType] = useState('all');
  const [drivers] = useState<Driver[]>(mockDrivers);

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Find a Driver</h1>
          <p className="mt-2 text-sm text-gray-600">
            Search for available drivers in your area
          </p>
        </div>

        <div className="bg-white shadow-sm rounded-lg p-6 mb-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                Location
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MapPin className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  name="location"
                  id="location"
                  className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                  placeholder="Enter your location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label htmlFor="vehicleType" className="block text-sm font-medium text-gray-700">
                Vehicle Type
              </label>
              <select
                id="vehicleType"
                name="vehicleType"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value)}
              >
                <option value="all">All Types</option>
                <option value="sedan">Sedan</option>
                <option value="suv">SUV</option>
                <option value="luxury">Luxury</option>
                <option value="van">Van</option>
              </select>
            </div>

            <div className="flex items-end">
              <Button className="w-full">
                <Search className="h-5 w-5 mr-2" />
                Search
              </Button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {drivers.map((driver) => (
            <div
              key={driver.id}
              className="bg-white shadow-sm rounded-lg p-6 flex flex-col md:flex-row md:items-center md:justify-between"
            >
              <div className="flex-1">
                <h3 className="text-lg font-medium text-gray-900">{driver.name}</h3>
                <div className="mt-1 flex items-center">
                  <Star className="h-5 w-5 text-yellow-400" />
                  <span className="ml-1 text-sm text-gray-600">{driver.rating}</span>
                </div>
                <div className="mt-2 text-sm text-gray-500">{driver.vehicle}</div>
                <div className="mt-1 flex items-center text-sm text-gray-500">
                  <MapPin className="h-4 w-4 mr-1" />
                  {driver.location}
                </div>
              </div>

              <div className="mt-4 md:mt-0 flex flex-col md:items-end">
                <div className="flex items-center text-lg font-medium text-gray-900">
                  ${driver.price}
                  <span className="ml-1 text-sm text-gray-500">/hour</span>
                </div>
                <div className="mt-2 flex items-center text-sm text-green-600">
                  <Clock className="h-4 w-4 mr-1" />
                  Available now
                </div>
                <Button className="mt-4">Book Now</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}