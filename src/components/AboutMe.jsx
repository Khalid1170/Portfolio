import { Brain,  Code, User } from "lucide-react";


export const AboutMe = () => {
    return <section id= "about" className="py-24 px-4 relative">
        {" "}

    <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl container mx-auto max-w-5xl mb-12 text-center">
        About <span className="text-primary"> Me</span>
        </h2>


    {/* About me details */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    <div className="space-y-6 font-semibold">
    <h3 className="text-primary text-3xl">Junior Software Developer & Problem Solver</h3>
    <p className="text-muted-foreground">
    I recently completed a 6-month Full-Stack Bootcamp,
      where I built real-world applications using React, JavaScript, Python, and Flask. 
    The experience sharpened my frontend and backend skills, 
    from designing RESTful APIs to creating responsive UIs.

    </p>
    <p>
    I’ve worked both independently and in teams — including leading as Scrum Master on a 
    4-day project to deliver a movie streaming app. I enjoy solving problems with clean, 
    scalable code and take pride in writing readable,
     maintainable software.
    </p>
    <p>
    I’m always exploring new technologies, improving my workflow, and aiming to create seamless 
    user experiences across the web.
    </p>

    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
            <a href="#contacts" className="cosmic-button">
              Get in contact
            </a>
          </div>
    </div>

    <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web Development</h4>
                  <p className="text-muted-foreground">
                  Building modern, responsive apps with React, Flask, and Tailwind — from APIs to UIs.


                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                  Designing clean, accessible interfaces focused on usability and performance.

                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Brain className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Agile Collaboration</h4>
                  <p className="text-muted-foreground">
                  Experienced with Agile workflows, Git version control, Trello, and GitHub Projects.

                  </p>
                </div>
              </div>
            </div>
          </div>
    </div>



    </div>

    



    </section>
}