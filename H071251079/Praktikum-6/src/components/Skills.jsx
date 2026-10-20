const skills = [
  "HTML & CSS",
  "JavaScript",
  "React",
  "Tailwind CSS",
  "Python",
  "Git & GitHub",
  "Figma",
]

function Skills() {
  return (
    <section id="skills" className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Keahlian</h2>
        <div className="w-10 h-1 bg-blue-600 rounded mb-6"></div>
        <p className="text-gray-600 mb-8">Beberapa teknologi dan tools yang saya kuasai:</p>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-800 text-sm font-medium px-4 py-2 rounded-lg border border-gray-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
