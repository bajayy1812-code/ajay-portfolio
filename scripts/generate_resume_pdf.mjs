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
  
  // Colors (Modern Developer Indigo & Cyan Palette for Print/Digital)
  const darkNavy = rgb(0.043, 0.059, 0.098); // #0B0F19
  const primaryIndigo = rgb(0.388, 0.400, 0.945); // #6366F1
  const secondaryCyan = rgb(0.133, 0.827, 0.933); // #22D3EE
  const charcoal = rgb(0.15, 0.18, 0.24);
  const slate = rgb(0.35, 0.40, 0.48);
  const dividerColor = rgb(0.85, 0.88, 0.92);
  
  // Header top banner
  page.drawRectangle({
    x: 0,
    y: height - 95,
    width: width,
    height: 95,
    color: darkNavy,
  });

  // Top accent line (Indigo)
  page.drawRectangle({
    x: 0,
    y: height - 4,
    width: width,
    height: 4,
    color: primaryIndigo,
  });

  // Header Text
  page.drawText('AJAY B', {
    x: 40,
    y: height - 42,
    size: 24,
    font: helveticaBold,
    color: rgb(0.97, 0.98, 1.0),
  });

  page.drawText('Aspiring Full Stack Developer  |  MERN Stack Developer', {
    x: 40,
    y: height - 62,
    size: 11,
    font: helveticaBold,
    color: secondaryCyan,
  });

  page.drawText('Coimbatore, India   *   bajayy1812@gmail.com   *   linkedin.com/in/ajay-b-0b0789328   *   github.com/bajayy1812-code', {
    x: 40,
    y: height - 80,
    size: 8.5,
    font: helvetica,
    color: rgb(0.88, 0.90, 0.95),
  });

  let curY = height - 116;
  const leftX = 40;

  function drawSectionHeader(title) {
    page.drawText(title.toUpperCase(), {
      x: leftX,
      y: curY,
      size: 10,
      font: helveticaBold,
      color: primaryIndigo,
    });
    page.drawLine({
      start: { x: leftX + helveticaBold.widthOfTextAtSize(title.toUpperCase(), 10) + 10, y: curY + 3 },
      end: { x: width - leftX, y: curY + 3 },
      thickness: 1,
      color: dividerColor,
    });
    curY -= 15;
  }

  // --- SUMMARY ---
  drawSectionHeader('Professional Summary');
  const summaryText = 
    "Aspiring Full Stack Developer and MERN Stack Developer with hands-on experience designing and building scalable web applications. Proficient in React.js frontend development, Node.js and Express.js RESTful API architecture, MongoDB schema modeling, and secure authentication (JWT, bcrypt). Passionate about writing clean, maintainable code, test automation, and solving complex engineering challenges.";
  
  page.drawText(summaryText.slice(0, 140), { x: leftX, y: curY, size: 8.5, font: helvetica, color: charcoal });
  curY -= 12;
  page.drawText(summaryText.slice(140, 275), { x: leftX, y: curY, size: 8.5, font: helvetica, color: charcoal });
  curY -= 12;
  page.drawText(summaryText.slice(275), { x: leftX, y: curY, size: 8.5, font: helvetica, color: charcoal });
  curY -= 18;

  // --- EDUCATION ---
  drawSectionHeader('Education');
  page.drawText('Sri Shakthi Institute of Engineering and Technology', {
    x: leftX,
    y: curY,
    size: 9.5,
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
    color: primaryIndigo,
  });
  curY -= 12;
  page.drawText('Location: Coimbatore, Tamil Nadu, India', {
    x: leftX,
    y: curY,
    size: 8,
    font: helveticaOblique,
    color: slate,
  });
  curY -= 18;

  // --- EXPERIENCE ---
  drawSectionHeader('Internship Experience');
  page.drawText('MERN Stack Developer Intern', {
    x: leftX,
    y: curY,
    size: 9.5,
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
    color: primaryIndigo,
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
    page.drawText('*', { x: leftX + 4, y: curY, size: 8, font: helveticaBold, color: primaryIndigo });
    page.drawText(bullet, { x: leftX + 16, y: curY, size: 8.5, font: helvetica, color: charcoal });
    curY -= 12;
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
    'Implemented member registration, attendance logs, BMI calculation, and diet plan allocations with secure REST APIs.',
    'Engineered an interactive administrative dashboard equipped with real-time membership analytics and statistics.'
  ];
  for (const bullet of proj1Bullets) {
    page.drawText('*', { x: leftX + 4, y: curY, size: 8, font: helveticaBold, color: primaryIndigo });
    page.drawText(bullet, { x: leftX + 16, y: curY, size: 8.5, font: helvetica, color: charcoal });
    curY -= 11.5;
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
    page.drawText('*', { x: leftX + 4, y: curY, size: 8, font: helveticaBold, color: primaryIndigo });
    page.drawText(bullet, { x: leftX + 16, y: curY, size: 8.5, font: helvetica, color: charcoal });
    curY -= 11.5;
  }
  curY -= 8;

  // --- TECHNICAL SKILLS ---
  drawSectionHeader('Technical Skills & Competencies');

  const skillGroups = [
    { label: 'Frontend Development:', list: 'HTML, CSS, JavaScript, React.js, Tailwind CSS, Responsive Web Design' },
    { label: 'Backend Development:', list: 'Node.js, Express.js, RESTful APIs, Middleware, JWT, bcrypt' },
    { label: 'Databases:', list: 'MongoDB, MongoDB Atlas, Mongoose ODM, SQL' },
    { label: 'Programming Languages:', list: 'JavaScript (ES6+), Python' },
    { label: 'Testing & Automation:', list: 'Playwright (E2E Test Automation)' },
    { label: 'Tools & Workflow:', list: 'Git, GitHub, VS Code, Postman, Browser DevTools' }
  ];

  for (const sg of skillGroups) {
    page.drawText(sg.label, { x: leftX, y: curY, size: 8.5, font: helveticaBold, color: darkNavy });
    const labelW = helveticaBold.widthOfTextAtSize(sg.label, 8.5);
    page.drawText(sg.list, { x: leftX + labelW + 6, y: curY, size: 8.5, font: helvetica, color: charcoal });
    curY -= 12.5;
  }
  curY -= 6;

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
