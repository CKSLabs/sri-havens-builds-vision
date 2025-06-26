
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import VisionMission from '@/components/VisionMission';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <Hero />
        <VisionMission />
        
        {/* Services Preview */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-heading text-4xl font-bold text-foreground mb-4">
                What We Do
              </h2>
              <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
                From concept to completion, we deliver comprehensive construction services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="text-center border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-8 h-8 bg-primary rounded-lg"></div>
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    New Home Construction
                  </h3>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed">
                    Custom homes built to your specifications with attention to every detail
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-8 h-8 bg-primary rounded-full"></div>
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    Renovations & Extensions
                  </h3>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed">
                    Transform your existing space with thoughtful renovations and additions
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-8 h-8 bg-primary rounded-sm"></div>
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    Design & Planning
                  </h3>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed">
                    Comprehensive design services from initial concept to final blueprints
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Recent Projects Preview */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-heading text-4xl font-bold text-foreground mb-4">
                Recent Projects
              </h2>
              <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
                Take a look at some of our latest completed homes
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="overflow-hidden hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/30">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/30 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                        <div className="w-6 h-6 bg-primary rounded-lg"></div>
                      </div>
                      <p className="font-body text-sm text-muted-foreground">Project Image</p>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                      Project {i === 1 ? 'Serenity Villa' : i === 2 ? 'Modern Heights' : 'Garden Residence'}
                    </h3>
                    <p className="font-body text-muted-foreground text-sm mb-4">
                      {i === 1 
                        ? 'A tranquil family home with sustainable features'
                        : i === 2 
                        ? 'Contemporary design with luxury finishes'
                        : 'Traditional charm meets modern comfort'
                      }
                    </p>
                    <div className="text-xs font-body text-muted-foreground">
                      Completed {i === 1 ? 'March 2024' : i === 2 ? 'January 2024' : 'November 2023'}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link to="/projects">
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-body font-medium px-8 py-3 rounded-full"
                >
                  View All Projects
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 to-accent/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading text-4xl font-bold text-foreground mb-4">
              Ready to Build Your Dream Home?
            </h2>
            <p className="font-body text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss your vision and create a home that truly feels like a haven.
            </p>
            <Link to="/contact">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-body font-medium px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get Started Today
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
