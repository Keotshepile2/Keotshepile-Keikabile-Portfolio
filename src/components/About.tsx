import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Target, Code, BarChart3 } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-section-bg">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm a Mathematical and Computer Sciences student at Sol Plaatje University with a strong interest in mathematics, programming, and data-driven problem-solving. I enjoy exploring how mathematical principles, statistical methods, and computational techniques can be applied to understand complex problems and develop practical solutions.
            My interests span mathematical research, quantitative finance, data science, and software development. I'm continually developing my analytical and technical skills through academic study, independent learning, and practical projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Story */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">
              My Journey
            </h3>
            <p className="text-muted-foreground leading-relaxed">
            My academic journey brings together two areas I find particularly exciting: mathematics and computing.
            Through my studies, I've developed an interest in mathematical reasoning, statistical analysis, algorithms, and computational problem-solving. Alongside my academic work, I've explored software development and database systems, building applications that organise information and support data-driven decision-making.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I've also worked as a university tutor, helping students understand mathematical concepts and approach challenging problems systematically. This experience has strengthened my communication skills and reinforced my belief that complex ideas become more manageable when explained clearly and logically.
            </p>
            
            <div className="pt-4">
              <h4 className="text-lg font-medium mb-3 text-foreground">A Few Things About Me:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• I enjoy solving mathematical puzzles and exploring different approaches to challenging problems.</li>
                <li>• I enjoy experimenting with code, building practical projects, and finding better ways to solve problems.</li>
                <li>• I'm always eager to explore new technologies, strengthen my mathematical knowledge, and expand my technical skills</li>
                <li>• I value logical reasoning, clean code, and solutions that are both effective and maintainable.</li>
              </ul>
            </div>
          </div>

          {/* Right side - Goals Cards */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">
              Career Goals
            </h3>
            
            <div className="space-y-4">
              <Card className="card-hover border-none shadow-soft">
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Mathematics & Research</h4>
                    <p className="text-sm text-muted-foreground">
                      Developing a deeper understanding of mathematical structures, analysis, modelling, and computational methods, with the long-term ambition of pursuing postgraduate research and a PhD.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-hover border-none shadow-soft">
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Code className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Quantitative Finance</h4>
                    <p className="text-sm text-muted-foreground">
                      Building the mathematical, statistical, and programming foundations needed to understand quantitative modelling, financial markets, risk analysis, and data-driven financial decision-making.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-hover border-none shadow-soft">
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Software Engineering & Data Science</h4>
                    <p className="text-sm text-muted-foreground">
                      Developing software applications, analysing complex datasets, and exploring machine learning techniques to build useful systems and extract meaningful insights from data.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;