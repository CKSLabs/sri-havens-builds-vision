
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Srinivasan\'s',
      status: 'completed',
      category: 'residential',
      location: 'Padappai',
      description: 'A 4-bedroom home with modern design elements and ample space for nature to thrive.',
      image: '/src/Srinivasans.jpeg',
      completionDate: 'June 2024',
      area: '2,300 sq ft'
    },
    {
      id: 2,
      title: 'Laxmi\'s Home',
      status: 'planning',
      category: 'residential',
      location: 'Maraimalai Nagar',
      description: 'Traditional design meets modern comfort in this carefully planned family residence.',
      image: '/src/Laxmi Home.jpeg',
      completionDate: 'Planning Phase',
      area: '2,700 sq ft'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.status === filter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800 border-green-200';
      case 'ongoing': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'planning': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-8">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 to-accent/20 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-heading text-5xl font-bold text-foreground mb-4">
              Our Projects
            </h1>
            <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our portfolio of exceptional homes and discover the quality 
              craftsmanship that defines Sri Havens Constructions.
            </p>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 bg-background">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant={filter === 'all' ? 'default' : 'outline'}
                onClick={() => setFilter('all')}
                className="font-body"
              >
                All Projects
              </Button>
              <Button
                variant={filter === 'completed' ? 'default' : 'outline'}
                onClick={() => setFilter('completed')}
                className="font-body"
              >
                Completed
              </Button>
              <Button
                variant={filter === 'ongoing' ? 'default' : 'outline'}
                onClick={() => setFilter('ongoing')}
                className="font-body"
              >
                Ongoing
              </Button>
              <Button
                variant={filter === 'planning' ? 'default' : 'outline'}
                onClick={() => setFilter('planning')}
                className="font-body"
              >
                Planning
              </Button>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/30">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/30 flex items-center justify-center">
                    {/* <div className="text-center">
                      <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                        <div className="w-8 h-8 bg-primary rounded-lg"></div>
                      </div>
                      <p className="font-body text-sm text-muted-foreground">Project Image</p>
                    </div> */}
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        {project.title}
                      </h3>
                      <Badge className={`${getStatusColor(project.status)} font-body text-xs`}>
                        {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                      </Badge>
                    </div>
                    
                    <p className="font-body text-muted-foreground text-sm mb-4">
                      {project.description}
                    </p>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="font-body text-muted-foreground">Location:</span>
                        <span className="font-body text-foreground font-medium">{project.location}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-body text-muted-foreground">Area:</span>
                        <span className="font-body text-foreground font-medium">{project.area}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-body text-muted-foreground">Timeline:</span>
                        <span className="font-body text-foreground font-medium">{project.completionDate}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-12">
                <p className="font-body text-muted-foreground text-lg">
                  No projects found for the selected filter.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 to-accent/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="font-body text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss your vision and create something extraordinary together.
            </p>
            <div>
            <Link to="/contact">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-body font-medium px-8 py-3 rounded-full"
              >
                Get In Touch
              </Button>
            </Link>
            </div>            
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;
