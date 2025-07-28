import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroBanner from '@/assets/hero-banner.jpg';

const CompleteHome = () => {
  return (
    <>
      {/* Inline Styles */}
      <style>{`
        /* Hero Float Animation */
        .hero-float {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        /* Button Gradient */
        .btn-gradient {
          background: linear-gradient(to right, hsl(16 100% 66%), hsl(16 100% 75%));
          color: hsl(0 0% 100%);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
          transition: all 0.2s;
        }

        .btn-gradient:hover {
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
          transform: scale(1.05);
        }

        /* Glow on Hover */
        .glow-on-hover {
          transition: all 0.3s;
        }

        .glow-on-hover:hover {
          box-shadow: 0 10px 15px -3px rgba(255, 102, 51, 0.25);
        }

        /* Soft Button */
        .btn-soft {
          background: rgba(134 239 172 / 0.2);
          color: hsl(222 20% 20%);
          border: 1px solid rgba(134 239 172 / 0.3);
          transition: all 0.2s;
        }

        .btn-soft:hover {
          background: rgba(134 239 172 / 0.3);
          border-color: rgba(134 239 172 / 0.5);
        }

        /* Responsive text sizing */
        .hero-title {
          font-size: 2.25rem;
          line-height: 2.5rem;
        }

        @media (min-width: 1024px) {
          .hero-title {
            font-size: 3.75rem;
            line-height: 1;
          }
        }

        /* Color Variables */
        .text-primary {
          color: hsl(16 100% 66%);
        }

        .text-foreground {
          color: hsl(222 20% 20%);
        }

        .text-muted-foreground {
          color: hsl(215 16% 47%);
        }

        .bg-warning {
          background-color: hsl(38 92% 50%);
        }

        .bg-success {
          background-color: hsl(142 76% 36%);
        }

        .bg-background {
          background-color: hsl(0 0% 99%);
        }

        .bg-secondary {
          background-color: hsl(213 100% 85%);
        }

        .bg-accent {
          background-color: hsl(48 100% 70%);
        }

        /* Background Gradient */
        .hero-gradient {
          background: linear-gradient(135deg, 
            hsl(0 0% 99%), 
            rgba(134 239 172 / 0.1), 
            rgba(254 240 138 / 0.05)
          );
        }
      `}</style>

      <div 
        className="min-h-screen"
        style={{ backgroundColor: 'hsl(0 0% 99%)' }}
      >
        <section className="relative hero-gradient overflow-hidden">
          <div 
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20"
            style={{ maxWidth: '80rem' }}
          >
            <div 
              className="grid lg:grid-cols-2 gap-12 items-center"
              style={{ 
                display: 'grid',
                gap: '3rem',
                alignItems: 'center',
                gridTemplateColumns: window.innerWidth >= 1024 ? '1fr 1fr' : '1fr'
              }}
            >
              {/* Content */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <h1 
                    className="hero-title font-bold text-foreground"
                    style={{ 
                      fontWeight: 700,
                      color: 'hsl(222 20% 20%)',
                      lineHeight: 'tight'
                    }}
                  >
                    Everything Your
                    <span 
                      className="hero-float text-primary"
                      style={{ 
                        display: 'block',
                        color: 'hsl(16 100% 66%)'
                      }}
                    >
                      Little Ones
                    </span>
                    Need & Love
                  </h1>
                  
                  <p 
                    className="text-lg text-muted-foreground"
                    style={{ 
                      fontSize: '1.125rem',
                      color: 'hsl(215 16% 47%)',
                      maxWidth: '32rem'
                    }}
                  >
                    Discover premium children's clothing, shoes, toys, and games that bring joy to every moment. 
                    Quality products that parents trust and kids adore.
                  </p>
                </div>

                <div 
                  className="flex flex-col sm:flex-row gap-4"
                  style={{ 
                    display: 'flex',
                    flexDirection: window.innerWidth >= 640 ? 'row' : 'column',
                    gap: '1rem'
                  }}
                >
                  <Link to="/products">
                    <Button 
                      size="lg" 
                      className="btn-gradient glow-on-hover group"
                      style={{ 
                        padding: '0.75rem 2rem',
                        fontSize: '1.125rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}
                    >
                      Shop Now
                      <ArrowRight 
                        className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200"
                        style={{ 
                          width: '1rem',
                          height: '1rem',
                          marginLeft: '0.5rem',
                          transition: 'transform 0.2s'
                        }}
                      />
                    </Button>
                  </Link>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="btn-soft"
                    style={{ 
                      padding: '0.75rem 2rem',
                      fontSize: '1.125rem'
                    }}
                  >
                    View Categories
                  </Button>
                </div>
              </div>

              {/* Hero Image */}
              <div style={{ position: 'relative' }}>
                <div 
                  className="relative rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
                  style={{ 
                    position: 'relative',
                    borderRadius: '1.5rem',
                    overflow: 'hidden',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                    transform: 'rotate(3deg)',
                    transition: 'transform 0.5s',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'rotate(0deg)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'rotate(3deg)';
                  }}
                >
                  <img
                    src={heroBanner}
                    alt="Kids Paradise - Premium children's products"
                    style={{ 
                      width: '100%',
                      height: '500px',
                      objectFit: 'cover'
                    }}
                  />
                  <div 
                    className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(0, 0, 0, 0.2), transparent)'
                    }}
                  />
                </div>
                
                {/* Floating Elements */}
                <div 
                  className="absolute -top-4 -left-4 w-20 h-20 bg-warning rounded-full flex items-center justify-center shadow-lg hero-float"
                  style={{
                    position: 'absolute',
                    top: '-1rem',
                    left: '-1rem',
                    width: '5rem',
                    height: '5rem',
                    backgroundColor: 'hsl(38 92% 50%)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <span style={{ fontSize: '2rem' }}>🎯</span>
                </div>
                <div 
                  className="absolute -bottom-4 -right-4 w-16 h-16 bg-success rounded-full flex items-center justify-center shadow-lg hero-float"
                  style={{
                    position: 'absolute',
                    bottom: '-1rem',
                    right: '-1rem',
                    width: '4rem',
                    height: '4rem',
                    backgroundColor: 'hsl(142 76% 36%)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                    animationDelay: '2s'
                  }}
                >
                  <span style={{ fontSize: '1.25rem' }}>✨</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CompleteHome;