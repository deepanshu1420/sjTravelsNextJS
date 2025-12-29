import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";
import { contactInfo } from "@/data/contact-info";

export default function ContactSection() {
  // Map icon strings to actual components
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Phone":
        return Phone;
      case "Mail":
        return Mail;
      case "MapPin":
        return MapPin;
      default:
        return Phone;
    }
  };

  return (
    <section className="mb-16" data-aos="fade-up" data-aos-delay="400">
      <Card className="overflow-hidden border-0 border-gray-800 bg-gray-900 shadow-2xl rounded-3xl">
        <div className="bg-gradient-to-r from-indigo-800 to-purple-900 py-12 px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Contact us today to book your ride!
          </h2>
          <p className="mt-4 text-indigo-100 max-w-2xl mx-auto">
            We're available 24/7 to assist you with your travel needs
          </p>
        </div>
        <CardContent className="bg-gray-900 p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((info) => {
              const IconComponent = getIcon(info.icon);

              return (
                <div
                  key={info.id}
                  className="flex flex-col items-center p-8 rounded-2xl bg-gray-800 border border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
                >
                  <div
                    className={`w-20 h-20 rounded-full bg-gradient-to-r ${
                      info.type === "email"
                        ? "from-amber-600 to-orange-600"
                        : "from-indigo-600 to-purple-700"
                    } flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="font-bold text-xl text-white mb-2">
                    {info.type === "phone"
                      ? "Call Us"
                      : info.type === "email"
                      ? "Email Us"
                      : "Visit Us"}
                  </h3>
                  <p className="text-indigo-400 font-semibold text-lg">
                    {info.value}
                  </p>
                  <p className="text-gray-400 mt-2 text-center">
                    {info.description}
                  </p>
                </div>
              );
            })}
          </div>
        </CardContent>
        <CardFooter className="flex justify-center bg-gray-900 pb-12">
          <Button
            size="lg"
            className="px-10 py-6 text-lg bg-gradient-to-r from-indigo-600 to-purple-700 hover:from-indigo-700 hover:to-purple-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Book Your Ride Now
          </Button>
        </CardFooter>
      </Card>
    </section>
  );
}
