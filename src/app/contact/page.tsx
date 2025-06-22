
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Download } from "lucide-react";

const contactDetails = {
  email: "contact@catalyst.inc",
  phone: "+1 (555) 123-4567",
  address: "123 Innovation Drive, Tech City, 12345",
  vcardUrl: "/catalyst-contact.vcf" // This is a placeholder for vCard download
};

export default function ContactPage() {
  return (
    <div className="bg-background min-h-screen">
       <div className="max-w-sm mx-auto p-4">
        <header className="text-center mb-8 mt-4">
            <h1 className="text-3xl font-bold tracking-tight text-primary">Contact Information</h1>
            <p className="mt-2 text-md text-muted-foreground">Get in touch or save our details.</p>
        </header>
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
            <div className="pt-4">
                <Button asChild className="w-full h-12 text-base">
                    <a href={contactDetails.vcardUrl} download="CatalystInc_Contact.vcf">
                        <Download className="mr-2 h-5 w-5" />
                        Save Contact
                    </a>
                </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
