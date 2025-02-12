import { useState } from 'react';
import { Button } from '../components/Button';
import { User, Mail, Phone, MapPin, Car, Calendar } from 'lucide-react';

export function DriverProfile() {
  const [profile, setProfile] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    phone: '+1234567890',
    address: '123 Main St, City',
    vehicleType: 'Sedan',
    vehicleModel: 'Toyota Camry',
    vehicleYear: '2020',
    licenseNumber: 'DL123456',
    availability: {
      monday: true,
      tuesday: true,
      wednesday: true,
      thursday: true,
      friday: true,
      saturday: false,
      sunday: false,
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement profile update logic
  };

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0">
            <h3 className="text-lg font-medium leading-6 text-gray-900">Driver Profile</h3>
            <p className="mt-1 text-sm text-gray-600">
              Manage your driver profile and vehicle information.
            </p>
          </div>
        </div>

        <div className="mt-5 md:mt-0 md:col-span-2">
          <form onSubmit={handleSubmit}>
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                      First name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      value={profile.firstName}
                      onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
                      className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                      Last name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      value={profile.lastName}
                      onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
                      className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email address
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                        <Mail className="h-4 w-4" />
                      </span>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={profile.email}
                        onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                        className="focus:ring-blue-500 focus:border-blue-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                      />
                    </div>
                  </div>

                  <div className="col-span-6 sm:col-span-4">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Phone number
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                        <Phone className="h-4 w-4" />
                      </span>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        value={profile.phone}
                        onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                        className="focus:ring-blue-500 focus:border-blue-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                      />
                    </div>
                  </div>

                  <div className="col-span-6">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                      Address
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                        <MapPin className="h-4 w-4" />
                      </span>
                      <input
                        type="text"
                        name="address"
                        id="address"
                        value={profile.address}
                        onChange={(e) => setProfile({ ...profile, address: e.target.value })}
                        className="focus:ring-blue-500 focus:border-blue-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                      />
                    </div>
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="vehicleType" className="block text-sm font-medium text-gray-700">
                      Vehicle Type
                    </label>
                    <select
                      id="vehicleType"
                      name="vehicleType"
                      value={profile.vehicleType}
                      onChange={(e) => setProfile({ ...profile, vehicleType: e.target.value })}
                      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    >
                      <option>Sedan</option>
                      <option>SUV</option>
                      <option>Van</option>
                      <option>Luxury</option>
                    </select>
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="vehicleModel" className="block text-sm font-medium text-gray-700">
                      Vehicle Model
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                        <Car className="h-4 w-4" />
                      </span>
                      <input
                        type="text"
                        name="vehicleModel"
                        id="vehicleModel"
                        value={profile.vehicleModel}
                        onChange={(e) => setProfile({ ...profile, vehicleModel: e.target.value })}
                        className="focus:ring-blue-500 focus:border-blue-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                      />
                    </div>
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="vehicleYear" className="block text-sm font-medium text-gray-700">
                      Vehicle Year
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                        <Calendar className="h-4 w-4" />
                      </span>
                      <input
                        type="text"
                        name="vehicleYear"
                        id="vehicleYear"
                        value={profile.vehicleYear}
                        onChange={(e) => setProfile({ ...profile, vehicleYear: e.target.value })}
                        className="focus:ring-blue-500 focus:border-blue-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                      />
                    </div>
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="licenseNumber" className="block text-sm font-medium text-gray-700">
                      License Number
                    </label>
                    <input
                      type="text"
                      name="licenseNumber"
                      id="licenseNumber"
                      value={profile.licenseNumber}
                      onChange={(e) => setProfile({ ...profile, licenseNumber: e.target.value })}
                      className="mt-1 focus:ring-blue-500 focus:border- blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Availability</label>
                  <div className="mt-4 space-y-4">
                    {Object.entries(profile.availability).map(([day, isAvailable]) => (
                      <div className="flex items-center" key={day}>
                        <input
                          id={day}
                          name={day}
                          type="checkbox"
                          checked={isAvailable}
                          onChange={(e) =>
                            setProfile({
                              ...profile,
                              availability: {
                                ...profile.availability,
                                [day]: e.target.checked,
                              },
                            })
                          }
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label htmlFor={day} className="ml-3 block text-sm font-medium text-gray-700">
                          {day.charAt(0).toUpperCase() + day.slice(1)}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Profile Photo</label>
                  <div className="mt-1 flex items-center">
                    <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                      <User className="h-full w-full text-gray-300" />
                    </span>
                    <Button type="button" variant="outline" className="ml-5">
                      Change
                    </Button>
                  </div>
                </div>
              </div>

              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <Button type="submit">Save</Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}