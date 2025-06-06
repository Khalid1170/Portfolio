export const AboutMe = () => {
    return <section id= "about" className="py-24 px-4 relative">
        {" "}

    <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl container mx-auto max-w-5xl mb-12 text-center">
        About <span className="text-primary"> Me</span>
        </h2>


    {/* About me details */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    <div className="space-y-6">
    <h3>Junior Software Developer & Problem Solver</h3>
    <p>
    I recently completed an intensive 6-month Full-Stack Software Development Bootcamp, 
    where I built real-world applications using technologies like React, JavaScript, Python, and Flask.
     The experience sharpened my skills in both frontend and backend development and gave me the confidence
      to tackle complex projects from idea to deployment.

    </p>
    <p>
    I’ve worked both independently and in teams, including taking 
    on the role of Scrum Master for a 4-person team delivering a movie 
    streaming app in just four days. I’m passionate about clean code, good design,
    and always learning something new to improve my craft.
    </p>

    <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#contacts" className="cosmic-button">
              Get in contact
            </a>
          </div>
    </div>

    </div>

    



    </div>
    </section>
}