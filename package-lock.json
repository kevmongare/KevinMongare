import TechStack from '../../../data/tech-stack'

const About = 'About Me'
const Aboutme =
  'I’m a React & MERN Stack Developer and Data Engineer trainee passionate about building scalable web apps and data-driven solutions. My unique background combines frontend development, SQL databases, and analytics to deliver solutions that are both user-friendly and insightful.'

const AboutMe = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 sm:px-10 lg:px-20 bg-navy text-slate bg-navy-light"
    >
      <div className="w-full max-w-5xl text-center">
        {/* Heading */}
        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl mb-4">
          <span className="text-green-bright text-xl sm:text-2xl">0.2 </span>
          {About}
        </h1>
        <hr className="mx-auto w-16 sm:w-20 border-green-bright mb-6" />

        {/* Description */}
        <p className="font-code text-base sm:text-lg leading-relaxed mb-10 px-2 sm:px-8">
          {Aboutme}
        </p>

        {/* Tech Skills */}
        <div className="mx-auto max-w-6xl">
          <h2 className="text-green-bright font-heading text-2xl sm:text-3xl mb-8">
            Tech Skills
          </h2>

          {/* Responsive Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8 text-left sm:text-center">
            <ul className="space-y-3">
              {TechStack.Frontend.map((items, index) => (
                <li key={index} className="hover:text-green-bright transition">
                  <span className="text-green-bright">‣ </span>
                  {items}
                </li>
              ))}
            </ul>

            <ul className="space-y-3">
              {TechStack.Backend.map((items, index) => (
                <li key={index} className="hover:text-green-bright transition">
                  <span className="text-green-bright">‣ </span>
                  {items}
                </li>
              ))}
            </ul>

            <ul className="space-y-3">
              {TechStack.DataScience.map((items, index) => (
                <li key={index} className="hover:text-green-bright transition">
                  <span className="text-green-bright">‣ </span>
                  {items}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
