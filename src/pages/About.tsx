import React from 'react';
import { Target, Users, Globe } from 'lucide-react';

export const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About OpenTender
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Transforming government tender processes in South Africa through 
            innovation and transparency.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To simplify and democratize access to government tenders, 
                making the process transparent and efficient for all businesses.
              </p>
            </div>
            <div className="text-center">
              <Globe className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To become the leading platform for government tender management 
                in South Africa and beyond.
              </p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Our Values</h3>
              <p className="text-gray-600">
                Transparency, innovation, and commitment to empowering 
                businesses of all sizes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-12">
              <div>
                <h3 className="text-xl font-semibold mb-2">2020 - Foundation</h3>
                <p className="text-gray-600">
                  OpenTender was founded with a vision to revolutionize the 
                  government tender process in South Africa.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">2021 - Growth</h3>
                <p className="text-gray-600">
                  Expanded our platform capabilities and grew our user base to 
                  over 1,000 businesses.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">2022 - Innovation</h3>
                <p className="text-gray-600">
                  Introduced advanced features including real-time notifications 
                  and automated bid tracking.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">2023 - Present</h3>
                <p className="text-gray-600">
                  Continuing to innovate and expand our services to meet the 
                  evolving needs of South African businesses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}