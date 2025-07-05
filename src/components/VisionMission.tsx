
import { Card, CardContent } from '@/components/ui/card';

const VisionMission = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl font-bold text-foreground mb-4">
            Our Vision & Mission
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
            Building dreams with dedication, crafting homes with care
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Vision */}
          <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-background rounded-full"></div>
                </div>
              </div>
              <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">
                Our Vision
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                To be the trusted name in crafting serene and elegant homes for modern families—where every brick echoes peaceful living.
              </p>
            </CardContent>
          </Card>

          {/* Mission */}
          <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-background rounded-sm"></div>
                </div>
              </div>
              <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">
                Our Mission
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                At Sri Havens, we build more than homes—we craft havens of harmony and elegance. With a focus on quality, thoughtful design, and customer peace of mind, we deliver refined living experiences that reflect the aspirations of modern families.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <div className="mt-16">
          <h3 className="font-heading text-3xl font-semibold text-center text-foreground mb-8">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-primary rounded-full"></div>
              </div>
              <h4 className="font-heading text-xl font-semibold text-foreground mb-2">Quality</h4>
              <p className="font-body text-muted-foreground text-sm">
                Uncompromising quality in every aspect of construction
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-primary rounded-full"></div>
              </div>
              <h4 className="font-heading text-xl font-semibold text-foreground mb-2">Trust</h4>
              <p className="font-body text-muted-foreground text-sm">
                Building lasting relationships through transparency and reliability
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-primary rounded-full"></div>
              </div>
              <h4 className="font-heading text-xl font-semibold text-foreground mb-2">Innovation</h4>
              <p className="font-body text-muted-foreground text-sm">
                Embracing modern techniques and sustainable practices
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
