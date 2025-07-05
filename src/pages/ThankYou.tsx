import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Home } from 'lucide-react';

const ThankYou = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(20);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          navigate('/');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  const handleGoHome = () => {
    navigate('/');
  };



  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-8">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 to-accent/20 py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-primary" />
              </div>
              <h1 className="font-heading text-5xl font-bold text-foreground mb-4">
                Thank You!
              </h1>
              <p className="font-body text-xl text-muted-foreground">
                Your message has been sent successfully. We'll get back to you within 24 hours.
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <Card className="border-2 border-primary/20">
                <CardContent className="p-8 text-center">
                  <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                    What's Next?
                  </h2>
                  <p className="font-body text-muted-foreground mb-6 leading-relaxed">
                    Our team will review your project details and contact you with a personalized 
                    consultation. We're excited to help bring your vision to life!
                  </p>
                  
                  <div className="space-y-4">
                    <div className="bg-primary/5 rounded-lg p-4">
                      <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                        What to Expect
                      </h3>
                      <ul className="font-body text-muted-foreground text-sm space-y-1 text-left">
                        <li>• Response within 24 hours</li>
                        <li>• Initial consultation call</li>
                        <li>• Project assessment and quote</li>
                        <li>• Detailed project timeline</li>
                      </ul>
                    </div>
                    
                    <p className="font-body text-sm text-muted-foreground">
                      Redirecting to homepage in <span className="font-semibold text-primary">{countdown}</span> seconds...
                    </p>
                  </div>
                  
                  <div className="flex justify-center mt-8">
                    <Button 
                      onClick={handleGoHome}
                      className="bg-primary hover:bg-primary/90 text-primary-foreground font-body font-medium py-3 px-8"
                    >
                      <Home className="w-4 h-4 mr-2" />
                      Go to Homepage
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ThankYou; 