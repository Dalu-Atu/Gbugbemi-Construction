import { Clock, Mail, MapPin, Phone } from "lucide-react";
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Input,
  Separator,
  Textarea,
} from "./CardUi";

function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4">Get In Touch</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-l text-slate-600 max-w-3xl mx-auto">
            Contact us today for a free consultation and project estimate. Our
            team is ready to bring your construction vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <Card className="border-l-4 border-orange-500">
              <CardHeader>
                <CardTitle className="mt-4 mb-4">Send Us a Message</CardTitle>
                <CardDescription className="mt-4 mb-4">
                  Fill out the form below and we'll get back to you within 24
                  hours.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="First Name" />
                  <Input placeholder="Last Name" />
                </div>
                <Input placeholder="Email Address" type="email" />
                <Input placeholder="Phone Number" type="tel" />
                <Input placeholder="Project Type" />
                <Textarea placeholder="Project Details" rows={4} />
                <Button className="w-full">Send Message</Button>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-emerald-600" />
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-slate-600">+234(816) 381-4609</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-emerald-600" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-slate-600">
                      info@gbugbemiconstruction.com
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-emerald-600" />
                  <div>
                    <div className="font-semibold">Address</div>
                    <div className="text-slate-600">
                      1234 Sapele road
                      <br />
                      YC, GA 30309
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-emerald-600" />
                  <div>
                    <div className="font-semibold">Business Hours</div>
                    <div className="text-slate-600">
                      Mon-Fri: 7:00 AM - 6:00 PM
                      <br />
                      Sat: 8:00 AM - 4:00 PM
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Separator />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
