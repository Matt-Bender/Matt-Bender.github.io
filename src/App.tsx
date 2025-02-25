import React, { useState } from 'react';
import { Sprout, ShoppingCart, Leaf, Heart, Award, ChevronRight, Star, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Broccoli Microgreens',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1592437111271-239fa8dcb401?auto=format&fit=crop&q=80&w=800',
    description: 'Rich in sulforaphane, perfect for detox and heart health',
    rating: 4.9,
    benefits: ['High in antioxidants', 'Supports immune system', 'Anti-inflammatory properties'],
    sizes: ['2oz', '4oz', '8oz']
  },
  {
    id: 2,
    name: 'Pea Shoot Microgreens',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1515471209610-dae1c92d8777?auto=format&fit=crop&q=80&w=800',
    description: 'Sweet and crunchy, high in protein and fiber',
    rating: 4.8,
    benefits: ['High in protein', 'Rich in fiber', 'Natural sweetness'],
    sizes: ['2oz', '4oz', '8oz']
  },
  {
    id: 3,
    name: 'Sunflower Microgreens',
    price: 13.99,
    image: 'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&q=80&w=800',
    description: 'Nutty flavor, packed with healthy fats and vitamin E',
    rating: 4.9,
    benefits: ['Rich in vitamin E', 'Heart-healthy fats', 'Protein-packed'],
    sizes: ['2oz', '4oz', '8oz']
  }
];

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    text: "The freshest microgreens I've ever tasted! The weekly subscription has transformed my cooking.",
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 2,
    name: 'Michael Chen',
    text: 'Incredible quality and service. These microgreens have become an essential part of my healthy lifestyle.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    text: 'The subscription service is so convenient, and the microgreens are always fresh and flavorful.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200'
  }
];

function App() {
  const [email, setEmail] = useState('');

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-green-700 text-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Sprout className="h-8 w-8" />
              <span className="ml-2 text-xl font-bold">MannaFest Greens</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#benefits" className="hover:text-green-200 transition duration-200">Benefits</a>
              <a href="#products" className="hover:text-green-200 transition duration-200">Shop</a>
              <a href="#subscription" className="hover:text-green-200 transition duration-200">Subscribe</a>
              <a href="#contact" className="hover:text-green-200 transition duration-200">Contact</a>
              <button className="relative">
                <ShoppingCart className="h-6 w-6" />
                <span className="absolute -top-2 -right-2 bg-green-500 text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative bg-center bg-cover h-[600px]" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524179091875-bf99a9a6af57?auto=format&fit=crop&q=80&w=2000')" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="text-white max-w-2xl">
              <h1 className="text-6xl font-bold mb-6">Nourishing Your Body, Naturally</h1>
              <p className="text-xl mb-8 leading-relaxed">Experience the power of fresh, locally grown microgreens delivered straight to your door. Packed with nutrients, bursting with flavor.</p>
              <div className="flex space-x-4">
                <button className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition duration-300">
                  Shop Now
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-green-700 transition duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div id="benefits" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Microgreens?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Discover the incredible benefits of our carefully cultivated microgreens, packed with nutrients and flavor.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">100% Organic</h3>
              <p className="text-gray-600">Grown without pesticides or harmful chemicals, ensuring the purest and safest greens for your table.</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Nutrient Dense</h3>
              <p className="text-gray-600">Up to 40x more nutrients than mature plants, providing maximum health benefits in every bite.</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Fresh Harvested</h3>
              <p className="text-gray-600">Harvested daily and delivered within hours, ensuring peak freshness and nutritional value.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div id="products" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Fresh Microgreens</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Choose from our selection of premium microgreens, each carefully grown for optimal nutrition and flavor.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
                <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-semibold">{product.name}</h3>
                    <span className="text-green-600 text-xl font-bold">${product.price}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-400 fill-current" />
                      <span className="ml-2 text-gray-600">{product.rating} Rating</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {product.sizes.map((size) => (
                        <button key={size} className="px-3 py-1 border border-gray-300 rounded-full text-sm hover:border-green-500 hover:text-green-500 transition duration-200">
                          {size}
                        </button>
                      ))}
                    </div>
                    <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-300">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Subscription Section */}
      <div id="subscription" className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-12">
                <h2 className="text-4xl font-bold mb-6">Subscribe & Save</h2>
                <p className="text-xl text-gray-600 mb-8">Get fresh microgreens delivered to your door weekly or monthly. Save up to 20% with our subscription plans.</p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <ChevronRight className="h-6 w-6 text-green-500 mr-2" />
                    <span>Choose your favorite microgreens</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-6 w-6 text-green-500 mr-2" />
                    <span>Select delivery frequency</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-6 w-6 text-green-500 mr-2" />
                    <span>Enjoy fresh greens every week</span>
                  </li>
                </ul>
                <button className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition duration-300">
                  Start Subscription
                </button>
              </div>
              <div className="bg-center bg-cover" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1515471209610-dae1c92d8777?auto=format&fit=crop&q=80&w=800')" }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Join thousands of satisfied customers who have made our microgreens part of their healthy lifestyle.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full object-cover" />
                  <div className="ml-4">
                    <h4 className="text-xl font-semibold">{testimonial.name}</h4>
                    <div className="flex text-yellow-400">
                      <Star className="h-5 w-5 fill-current" />
                      <Star className="h-5 w-5 fill-current" />
                      <Star className="h-5 w-5 fill-current" />
                      <Star className="h-5 w-5 fill-current" />
                      <Star className="h-5 w-5 fill-current" />
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">&quot;{testimonial.text}&quot;</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-green-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Stay Connected</h2>
            <p className="text-xl text-green-100 mb-8">Subscribe to our newsletter for recipes, health tips, and exclusive offers.</p>
            <div className="max-w-md mx-auto">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-6 py-4 rounded-l-lg focus:outline-none"
                />
                <button className="bg-green-800 text-white px-8 py-4 rounded-r-lg font-semibold hover:bg-green-900 transition duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center mb-6">
                <Sprout className="h-8 w-8" />
                <span className="ml-2 text-xl font-bold">MannaFest Greens</span>
              </div>
              <p className="text-gray-400">Bringing the freshest and most nutritious microgreens to your table, sustainably grown with care.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#" className="hover:text-white transition duration-200">About Us</a></li>
                <li><a href="#" className="hover:text-white transition duration-200">Shop</a></li>
                <li><a href="#" className="hover:text-white transition duration-200">Subscription</a></li>
                <li><a href="#" className="hover:text-white transition duration-200">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact</h4>
              <ul className="space-y-4 text-gray-400">
                <li>123 Green Street</li>
                <li>Fresh City, FC 12345</li>
                <li>contact@mannafest.com</li>
                <li>(555) 123-4567</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition duration-200">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition duration-200">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition duration-200">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition duration-200">
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 MannaFest Greens. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;