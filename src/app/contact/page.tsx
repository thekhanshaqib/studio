"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Download, Globe } from "lucide-react";
import { AppBar } from '@/components/AppBar';

const contactDetails = {
  name: "Mega Power Contracting LLC",
  email: "info@megapower.com",
  phone: "+971 4 396 0292",
  address: "Business Bay, Dubai, UAE",
  website: "https://www.megapower.com"
};

export default function ContactPage() {
  const handleSaveContact = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${contactDetails.name}
TEL;TYPE=WORK,VOICE:${contactDetails.phone}
EMAIL:${contactDetails.email}
ADR;TYPE=WORK:;;${contactDetails.address}
URL:${contactDetails.website}
END:VCARD`;

    const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = "MegaPower.vcf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

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
              <div className="flex items-center space-x-4">
                <Globe className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <p className="font-semibold">Website</p>
                  <a href={contactDetails.website} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:underline">{contactDetails.website}</a>
                </div>
              </div>
              <div className="pt-4">
                  <Button onClick={handleSaveContact} className="w-full h-12 text-base">
                      <Download className="mr-2 h-5 w-5" />
                      Save Contact
                  </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
