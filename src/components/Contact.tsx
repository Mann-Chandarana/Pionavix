
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Clock, Globe } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-200 via-gray-100 to-white text-gray-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-indigo-500 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-purple-500 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-200 backdrop-blur text-blue-800 text-sm font-medium mb-4">
            Get In Touch
          </div>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Let's discuss how we can help transform your business with our innovative digital solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Let's Build Something Amazing Together</h3>
              <p className="text-gray-700 leading-relaxed mb-8">
                Whether you're looking to build a new application, modernize your existing systems, or need expert consultation, our team is here to help you succeed.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/80 backdrop-blur rounded-2xl p-6 hover:bg-white transition-colors shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div className="font-semibold mb-1 text-gray-900">Email Us</div>
                <div className="text-gray-600 text-sm">hello@pionavix.com</div>
              </div>

              <div className="bg-white/80 backdrop-blur rounded-2xl p-6 hover:bg-white transition-colors shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div className="font-semibold mb-1 text-gray-900">Call Us</div>
                <div className="text-gray-600 text-sm">+1 (555) 123-4567</div>
              </div>

              <div className="bg-white/80 backdrop-blur rounded-2xl p-6 hover:bg-white transition-colors shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div className="font-semibold mb-1 text-gray-900">Visit Us</div>
                <div className="text-gray-600 text-sm">123 Innovation Street, Tech City, TC 12345</div>
              </div>

              <div className="bg-white/80 backdrop-blur rounded-2xl p-6 hover:bg-white transition-colors shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div className="font-semibold mb-1 text-gray-900">Business Hours</div>
                <div className="text-gray-600 text-sm">Mon - Fri: 9AM - 6PM</div>
              </div>
            </div>
          </div>

          <Card className="bg-white/90 backdrop-blur-md border-gray-300 shadow-2xl">
            <CardHeader>
              <CardTitle className="text-gray-900 text-2xl">Send us a Message</CardTitle>
              <CardDescription className="text-gray-700">
                Fill out the form below and we'll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <Input 
                  placeholder="First Name" 
                  className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-blue-500"
                />
                <Input 
                  placeholder="Last Name" 
                  className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-blue-500"
                />
              </div>
              <Input 
                placeholder="Email Address" 
                type="email" 
                className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-blue-500"
              />
              <Input 
                placeholder="Phone Number" 
                className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-blue-500"
              />
              <Input 
                placeholder="Company Name" 
                className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-blue-500"
              />
              <Textarea 
                placeholder="Tell us about your project..." 
                rows={4}
                className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 resize-none focus:border-blue-500"
              />
              <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white border-0 py-3 font-semibold">
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
