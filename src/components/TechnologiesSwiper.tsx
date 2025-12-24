const technologies = [
  'Android',
  'Java',
  'Firebase',
  'CSS',
  'Html',
  'React',
  'SCSS',
  'Angular',
  'Javascript',
  'Typescript',
  'Next.js',
  'React MUI',
  'Node.js',
  'express.js',
  'MongoDB',
  'MySQL',
  'PHP',
  'Laravel',
  'Wordpress',
  'Figma',
  'PhotoShop',
  'Heroku',
  'Markdown',
  'Git',
  'Linux',
];

export default function TechnologiesSwiper() {
  return (
    <div className="py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 text-center sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {technologies.map((tech) => (
            <div key={tech} className="flex items-center justify-center">
              <p className="text-lg font-semibold text-gray-300">{tech}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
