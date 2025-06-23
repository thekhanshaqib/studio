import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Download } from "lucide-react";
import { AppBar } from '@/components/AppBar';

const contactDetails = {
  email: "info@megapower-mea.com",
  phone: "+971 4 396 0292",
  address: "Deira, Dar Al Wuheida Building - 105 - Hor Al Anz East - Dubai - United Arab Emirates",
  website: "http://www.megapower-mea.com/",
  vcardUrl: "/megapower-contact.vcf" 
};

export default function ContactPage() {
  return (
    <>
      <AppBar title="Contact Information" />
      <div className="bg-background">
         <div className="max-w-sm mx-auto p-4">
          <p className="text-center text-muted-foreground mb-6">Get in touch or save our details.</p>
          <Card>
            <CardContent className="p-6 space-y-6">
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-semibold">Email</p>
                  <a href={`mailto:${contactDetails.email}`} className="text-muted-foreground hover:underline break-all">{contactDetails.email}</a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <a href={`tel:${contactDetails.phone}`} className="text-muted-foreground hover:underline">{contactDetails.phone}</a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Address</p>
                  <p className="text-muted-foreground">{contactDetails.address}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Website</p>
                  <p className="text-muted-foreground">{contactDetails.website}</p>
                </div>
              </div>
              <div className="pt-4">
                  <Button asChild className="w-full h-12 text-base">
                      <a href={contactDetails.vcardUrl} download="Megapower_Contact.vcf">
                          <Download className="mr-2 h-5 w-5" />
                          Save Contact
                      </a>
                  </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
