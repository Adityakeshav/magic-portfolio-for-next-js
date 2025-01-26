import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Aditya",
  lastName: "Keshav",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Microsoft Certified | β MLSA",
  avatar: "/images/adit.jpeg",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Hindi"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
     A curious computer science student always looking for new ways to use technology. 
     Right now, I'm fascinated by data science and how it can be used to uncover hidden insights.

    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Adityakeshav",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/adityakeshav1",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:adityakeshav393@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Designing the Future, Building Innovation</>,
  subline: (
    <>
     I’m Aditya Keshav (He/Him), a Microsoft Certified professional and β MLSA with expertise in Microsoft Azure. As a curious computer science student, I’m constantly exploring innovative ways to harness technology. 
     Currently, I’m captivated by devops and its potential to uncover hidden insights and drive impactful solutions.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://api.whatsapp.com/send?phone=919798826822",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Aditya Keshav is a tech enthusiast and design engineer with a talent for simplifying intricate challenges into intuitive, elegant solutions.
        Specializing in digital interfaces, interactive experiences,
        and the fusion of design and technology, he brings creativity and precision to every project he undertakes.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Professional Experience",
    experiences: [
      {
        company: "Unstop",
        timeframe: "Oct 2024 – Present | Remote",
        role: "Student Director",
        achievements: [
          <>
            Spearheaded leadership and branding initiatives to enhance student participation.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          // {
          //   src: "/images/projects/project-01/cover-01.jpg",
          //   alt: "Once UI Project",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        company: "TFUG Jalandhar",
        timeframe: "Sep 2023 – Present",
        role: "Core Team Member ",
        achievements: [
          <>
            Organized tech events focused on Google technologies and shared knowledge within the community.
          </>,
          // <>
          //   Led a cross-functional team to launch a new product line, contributing to a 15% increase
          //   in overall company revenue.
          // </>,
        ],
        images: [],
      },
      {
        company: "CNCF Jalandhar",
        timeframe: "Oct 2023 – Present",
        role: "Core Team Member ",
        achievements: [
          <>
           Coordinated events and fostered community engagement in cloud-native technologies.
          </>,
          // <>
          //   Led a cross-functional team to launch a new product line, contributing to a 15% increase
          //   in overall company revenue.
          // </>,
        ],
        images: [],
      },
      {
        company: "Microsoft Learn Student Ambassador",
        timeframe: "Sep 2023 – Present",
        role: "(Beta MLSA)",
        achievements: [
          <>
            Conducted workshops on Git, Microsoft Azure, Docker, and Terraform.
          </>,
          <>
            Hosted Cloud Skill Challenges and guided students in learning DevOps tools.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Lovely Professional University",
        description: <>B.tech CSE 2026</>,
      },
      {
        name: "Resonance Eduventures Limited",
        description: <>Intermediate Intermediate</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Projects",
    skills: [
      {
        title: "GitHub Actions",
        description: <>CI/CD Workflow Automation with GitHub Actions</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "R Programming",
        description: <>Predicting Credit Policy Approvals Using Machine Learning</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Python",
        description: <>Predicting Credit Policy Approvals Using Machine Learning</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
