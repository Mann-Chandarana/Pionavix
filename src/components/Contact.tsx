
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur text-white text-sm font-medium mb-4">
            Get In Touch
          </div>
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Let's discuss how we can help transform your business with our digital solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Build Something Amazing Together</h3>
              <p className="text-blue-100 leading-relaxed">
                Whether you're looking to build a new application, modernize your existing systems, or need expert consultation, our team is here to help you succeed.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/10 backdrop-blur rounded-xl flex items-center justify-center">
                  <Mail className="h-6 w-6 text-blue-300" />
                </div>
                <div>
                  <div className="font-semibold">Email Us</div>
                  <div className="text-blue-200">hello@digitalcraft.com</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/10 backdrop-blur rounded-xl flex items-center justify-center">
                  <Phone className="h-6 w-6 text-blue-300" />
                </div>
                <div>
                  <div className="font-semibold">Call Us</div>
                  <div className="text-blue-200">+1 (555) 123-4567</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/10 backdrop-blur rounded-xl flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-blue-300" />
                </div>
                <div>
                  <div className="font-semibold">Visit Us</div>
                  <div className="text-blue-200">123 Innovation Street, Tech City, TC 12345</div>
                </div>
              </div>
            </div>
          </div>

          <Card className="bg-white/10 backdrop-blur border-white/20">
            <CardHeader>
              <CardTitle className="text-white">Send us a Message</CardTitle>
              <CardDescription className="text-blue-100">
                Fill out the form below and we'll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Input 
                  placeholder="First Name" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-blue-200"
                />
                <Input 
                  placeholder="Last Name" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-blue-200"
                />
              </div>
              <Input 
                placeholder="Email Address" 
                type="email" 
                className="bg-white/10 border-white/20 text-white placeholder:text-blue-200"
              />
              <Input 
                placeholder="Phone Number" 
                className="bg-white/10 border-white/20 text-white placeholder:text-blue-200"
              />
              <Textarea 
                placeholder="Tell us about your project..." 
                rows={4}
                className="bg-white/10 border-white/20 text-white placeholder:text-blue-200 resize-none"
              />
              <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
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
