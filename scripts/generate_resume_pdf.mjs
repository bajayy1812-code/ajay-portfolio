import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

async function generateResume() {
  const pdfDoc = await PDFDocument.create();
  
  // Standard Letter page size (612 x 792 points)
  const page = pdfDoc.addPage([612, 792]);
  const { width, height } = page.getSize();
  
  // Fonts
  const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const helveticaBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const helveticaOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);
  
  // Colors (Dark luxury palette translated for clean PDF print/digital)
  const darkNavy = rgb(0.06, 0.08, 0.14); // #0F1424
  const primaryPurple = rgb(0.48, 0.28, 0.88); // #7C4DFF / #8B5CF6
  const charcoal = rgb(0.18, 0.22, 0.28);
  const slate = rgb(0.38, 0.44, 0.52);
  const lightGray = rgb(0.92, 0.94, 0.96);
  const dividerColor = rgb(0.82, 0.85, 0.90);
  
  // Header top banner
  page.drawRectangle({
    x: 0,
    y: height - 100,
    width: width,
    height: 100,
    color: darkNavy,
  });

  // Top accent line
  page.drawRectangle({
    x: 0,
    y: height - 5,
    width: width,
    height: 5,
    color: primaryPurple,
  });

  // Header Text
  page.drawText('AJAY B', {
    x: 40,
    y: height - 44,
    size: 24,
    font: helveticaBold,
    color: rgb(0.97, 0.98, 1.0),
  });

  page.drawText('Aspiring UI/UX Designer  |  Full Stack Developer', {
    x: 40,
    y: height - 64,
    size: 11,
    font: helveticaBold,
    color: rgb(0.68, 0.78, 1.0), // Ice blue
  });

  page.drawText('Coimbatore, India   *   bajayy1812@gmail.com   *   linkedin.com/in/ajay-b-0b0789328   *   github.com/ajayb1812', {
    x: 40,
    y: height - 82,
    size: 8.5,
    font: helvetica,
    color: rgb(0.85, 0.88, 0.94),
  });

  let curY = height - 120;
  const leftX = 40;
  const contentWidth = width - 80;

  function drawSectionHeader(title) {
    page.drawText(title.toUpperCase(), {
      x: leftX,
      y: curY,
      size: 10.5,
      font: helveticaBold,
      color: primaryPurple,
    });
    page.drawLine({
      start: { x: leftX + helveticaBold.widthOfTextAtSize(title.toUpperCase(), 10.5) + 10, y: curY + 3 },
      end: { x: width - leftX, y: curY + 3 },
      thickness: 1,
      color: dividerColor,
    });
    curY -= 16;
  }

  // --- SUMMARY ---
  drawSectionHeader('Professional Summary');
  const summaryText = 
    "Aspiring UI/UX Designer and Full Stack Developer passionate about creating meaningful digital experiences and building modern web applications. Combines creative design thinking with robust technical development to transform complex ideas into intuitive, functional, and visually engaging products. Solid foundation in MERN stack architecture, modern frontend frameworks, and user-centered design.";
  
  // Wrap summary
  page.drawText(summaryText.slice(0, 142), { x: leftX, y: curY, size: 8.5, font: helvetica, color: charcoal });
  curY -= 12;
  page.drawText(summaryText.slice(142, 280), { x: leftX, y: curY, size: 8.5, font: helvetica, color: charcoal });
  curY -= 12;
  page.drawText(summaryText.slice(280), { x: leftX, y: curY, size: 8.5, font: helvetica, color: charcoal });
  curY -= 20;

  // --- EDUCATION ---
  drawSectionHeader('Education');
  page.drawText('Sri Shakthi Institute of Engineering and Technology', {
    x: leftX,
    y: curY,
    size: 10,
    font: helveticaBold,
    color: darkNavy,
  });
  page.drawText('2023 - 2027', {
    x: width - leftX - 60,
    y: curY,
    size: 9,
    font: helveticaBold,
    color: slate,
  });
  curY -= 13;

  page.drawText('Bachelor of Engineering (B.E.) in Electronics and Communication Engineering', {
    x: leftX,
    y: curY,
    size: 9,
    font: helvetica,
    color: charcoal,
  });
  page.drawText('CGPA: 7.94 / 10.0', {
    x: width - leftX - 80,
    y: curY,
    size: 9,
    font: helveticaBold,
    color: primaryPurple,
  });
  curY -= 12;
  page.drawText('Location: Coimbatore, Tamil Nadu, India', {
    x: leftX,
    y: curY,
    size: 8,
    font: helveticaOblique,
    color: slate,
  });
  curY -= 20;

  // --- EXPERIENCE ---
  drawSectionHeader('Internship Experience');
  page.drawText('MERN Stack Developer Intern', {
    x: leftX,
    y: curY,
    size: 10,
    font: helveticaBold,
    color: darkNavy,
  });
  page.drawText('2025', {
    x: width - leftX - 35,
    y: curY,
    size: 9,
    font: helveticaBold,
    color: slate,
  });
  curY -= 13;

  page.drawText('Frenzo Academy  *  Coimbatore, India', {
    x: leftX,
    y: curY,
    size: 9,
    font: helveticaBold,
    color: primaryPurple,
  });
  curY -= 14;

  const internBullets = [
    'Engineered full-stack MERN application architecture encompassing frontend state management and backend services.',
    'Built responsive, reusable React.js interface components delivering seamless experiences across mobile and desktop devices.',
    'Designed RESTful APIs using Node.js and Express.js with robust routing, error handling, and middleware integration.',
    'Implemented secure authentication, CRUD operations, and schema modeling with MongoDB and Mongoose ODM.',
    'Practiced continuous version control and collaborative workflows utilizing Git and GitHub.'
  ];

  for (const bullet of internBullets) {
    page.drawText('*', { x: leftX + 4, y: curY, size: 8, font: helveticaBold, color: primaryPurple });
    page.drawText(bullet, { x: leftX + 16, y: curY, size: 8.5, font: helvetica, color: charcoal });
    curY -= 12.5;
  }
  curY -= 8;

  // --- PROJECTS ---
  drawSectionHeader('Featured Technical Projects');
  
  // Project 1
  page.drawText('Iron Pulse - Gym Membership Management System', {
    x: leftX,
    y: curY,
    size: 9.5,
    font: helveticaBold,
    color: darkNavy,
  });
  page.drawText('React.js, Node.js, Express.js, MongoDB Atlas, JWT, bcrypt', {
    x: width - leftX - 250,
    y: curY,
    size: 8,
    font: helveticaOblique,
    color: slate,
  });
  curY -= 13;

  const proj1Bullets = [
    'Built full-stack fitness management platform featuring role-based access control (Admin / Member) and protected routing.',
    'Implemented member registration, recurring subscription tracking, and payment record auditing with secure REST APIs.',
    'Engineered an interactive administrative dashboard equipped with real-time membership analytics and statistics.'
  ];
  for (const bullet of proj1Bullets) {
    page.drawText('*', { x: leftX + 4, y: curY, size: 8, font: helveticaBold, color: primaryPurple });
    page.drawText(bullet, { x: leftX + 16, y: curY, size: 8.5, font: helvetica, color: charcoal });
    curY -= 12;
  }
  curY -= 6;

  // Project 2
  page.drawText('Expense Tracker - Personal Finance Dashboard', {
    x: leftX,
    y: curY,
    size: 9.5,
    font: helveticaBold,
    color: darkNavy,
  });
  page.drawText('JavaScript, Node.js, Express.js, MongoDB, Mongoose, REST APIs', {
    x: width - leftX - 260,
    y: curY,
    size: 8,
    font: helveticaOblique,
    color: slate,
  });
  curY -= 13;

  const proj2Bullets = [
    'Developed dynamic finance tracking application supporting automated expense categorization and net income calculation.',
    'Engineered full CRUD operations with client-side form validation and persistent MongoDB data modeling.',
    'Created a responsive analytics overview providing visual spending summaries and category breakdowns.'
  ];
  for (const bullet of proj2Bullets) {
    page.drawText('*', { x: leftX + 4, y: curY, size: 8, font: helveticaBold, color: primaryPurple });
    page.drawText(bullet, { x: leftX + 16, y: curY, size: 8.5, font: helvetica, color: charcoal });
    curY -= 12;
  }
  curY -= 8;

  // --- TECHNICAL SKILLS ---
  drawSectionHeader('Technical Skills & Design Competencies');

  const skillGroups = [
    { label: 'Frontend Development:', list: 'React.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Responsive Web Design' },
    { label: 'Backend & APIs:', list: 'Node.js, Express.js, RESTful APIs, API Integration, Middleware Architecture' },
    { label: 'Database & Security:', list: 'MongoDB, MongoDB Atlas, Mongoose ODM, JWT Authentication, RBAC, bcrypt Hashing' },
    { label: 'Tools & Workflow:', list: 'Git, GitHub, VS Code, Browser DevTools, Debugging, Postman' },
    { label: 'Design & UX (Learning):', list: 'UI Design, UX Fundamentals, Wireframing, Prototyping, Figma, Typography, Color Theory' }
  ];

  for (const sg of skillGroups) {
    page.drawText(sg.label, { x: leftX, y: curY, size: 8.5, font: helveticaBold, color: darkNavy });
    const labelW = helveticaBold.widthOfTextAtSize(sg.label, 8.5);
    page.drawText(sg.list, { x: leftX + labelW + 6, y: curY, size: 8.5, font: helvetica, color: charcoal });
    curY -= 13;
  }
  curY -= 7;

  // --- CERTIFICATIONS & ACHIEVEMENTS ---
  drawSectionHeader('Certifications & Achievements');

  page.drawText('* JavaScript Certification - HackerRank', {
    x: leftX + 4,
    y: curY,
    size: 8.5,
    font: helveticaBold,
    color: darkNavy,
  });
  page.drawText('* 100+ Data Structures & Algorithms Problems Solved', {
    x: width / 2,
    y: curY,
    size: 8.5,
    font: helveticaBold,
    color: darkNavy,
  });
  curY -= 13;

  page.drawText('* Introduction to MERN Stack - Simplilearn SkillUp', {
    x: leftX + 4,
    y: curY,
    size: 8.5,
    font: helveticaBold,
    color: darkNavy,
  });
  page.drawText('Strong foundation in algorithmic problem-solving and optimization', {
    x: width / 2 + 8,
    y: curY,
    size: 8,
    font: helveticaOblique,
    color: slate,
  });

  const pdfBytes = await pdfDoc.save();
  const outPath = path.resolve('public/resume/Ajay_B_Full_Stack_Developer_Resume_Final.pdf');
  fs.writeFileSync(outPath, pdfBytes);
  console.log('Successfully generated resume PDF at:', outPath);
}

generateResume().catch(console.error);

