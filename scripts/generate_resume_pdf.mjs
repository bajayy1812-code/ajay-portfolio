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
  
  // Colors (Editorial Cream + Ink Black + Burnt Orange Palette)
  const darkInk = rgb(0.067, 0.067, 0.067); // #111111
  const burntOrange = rgb(0.851, 0.329, 0.118); // #D9541E
  const charcoal = rgb(0.18, 0.18, 0.18);
  const slate = rgb(0.42, 0.40, 0.38); // #77736B
  const dividerColor = rgb(0.85, 0.82, 0.76); // #D8D0C2
  
  // Header top banner (Ink Black with Burnt Orange Accent)
  page.drawRectangle({
    x: 0,
    y: height - 95,
    width: width,
    height: 95,
    color: darkInk,
  });

  // Top accent line (Burnt Orange)
  page.drawRectangle({
    x: 0,
    y: height - 4,
    width: width,
    height: 4,
    color: burntOrange,
  });

  // Header Text
  page.drawText('AJAY B', {
    x: 40,
    y: height - 42,
    size: 24,
    font: helveticaBold,
    color: rgb(0.98, 0.98, 0.98),
  });

  page.drawText('Aspiring Full Stack Developer  |  MERN Stack Developer', {
    x: 40,
    y: height - 62,
    size: 11,
    font: helveticaBold,
    color: burntOrange,
  });

  page.drawText('Coimbatore, India   *   bajayy1812@gmail.com   *   linkedin.com/in/ajay-b-0b0789328   *   github.com/bajayy1812-code', {
    x: 40,
    y: height - 80,
    size: 8.5,
    font: helvetica,
    color: rgb(0.88, 0.88, 0.88),
  });

  let curY = height - 116;
  const leftX = 40;

  function drawSectionHeader(title) {
    page.drawText(title.toUpperCase(), {
      x: leftX,
      y: curY,
      size: 10,
      font: helveticaBold,
      color: burntOrange,
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
    color: darkInk,
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
    color: burntOrange,
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
    color: darkInk,
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
    color: burntOrange,
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
    page.drawText('*', { x: leftX + 4, y: curY, size: 8, font: helveticaBold, color: burntOrange });
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
    color: darkInk,
  });
  page.drawText('React.js, Node.js, Express.js, MongoDB Atlas, JWT, bcrypt', {
    x: width - leftX - 250,
    y: curY,
    size: 8,
    font: helveticaOblique,
    color: slate,
  });
  curY -= 13;

  const ironPulseBullets = [
    'Architected an end-to-end full-stack gym management platform with administrative and member access tiers.',
    'Implemented stateless JWT authentication, password hashing with bcrypt, and role-based access control (RBAC).',
    'Engineered membership subscription tracking, daily check-in verification, automated BMI assessments, and diet modules.',
    'Formulated MongoDB database schemas with Mongoose ODM and crafted modular RESTful API endpoints.'
  ];

  for (const bullet of ironPulseBullets) {
    page.drawText('*', { x: leftX + 4, y: curY, size: 8, font: helveticaBold, color: burntOrange });
    page.drawText(bullet, { x: leftX + 16, y: curY, size: 8.5, font: helvetica, color: charcoal });
    curY -= 12;
  }
  curY -= 6;

  // Project 2
  page.drawText('Expense Tracker - Personal Finance & Ledger Application', {
    x: leftX,
    y: curY,
    size: 9.5,
    font: helveticaBold,
    color: darkInk,
  });
  page.drawText('JavaScript (ES6+), Node.js, Express.js, MongoDB, RESTful APIs', {
    x: width - leftX - 265,
    y: curY,
    size: 8,
    font: helveticaOblique,
    color: slate,
  });
  curY -= 13;

  const expenseBullets = [
    'Developed a responsive full-stack income and expenditure tracking portal with persistent MongoDB database storage.',
    'Engineered dynamic net balance calculations, multi-category transaction classification, and date-range ledger filtering.',
    'Built full CRUD operations backed by strict client and server-side form validations for financial numerical integrity.'
  ];

  for (const bullet of expenseBullets) {
    page.drawText('*', { x: leftX + 4, y: curY, size: 8, font: helveticaBold, color: burntOrange });
    page.drawText(bullet, { x: leftX + 16, y: curY, size: 8.5, font: helvetica, color: charcoal });
    curY -= 12;
  }
  curY -= 8;

  // --- TECHNICAL SKILLS ---
  drawSectionHeader('Technical Skills');
  
  const skillLines = [
    { label: 'Frontend Development:', text: 'React.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Responsive Web Design' },
    { label: 'Backend Development:', text: 'Node.js, Express.js, RESTful API Design, Middleware, JWT, bcrypt' },
    { label: 'Database Systems:', text: 'MongoDB, MongoDB Atlas, Mongoose ODM, SQL (Relational Queries & Constraints)' },
    { label: 'Programming & Testing:', text: 'JavaScript, Python, Playwright (Automated E2E Testing)' },
    { label: 'Tools & Workflow:', text: 'Git, GitHub, VS Code, Postman, Linux Terminal' }
  ];

  for (const skill of skillLines) {
    page.drawText(skill.label, { x: leftX, y: curY, size: 8.5, font: helveticaBold, color: darkInk });
    const labelW = helveticaBold.widthOfTextAtSize(skill.label, 8.5);
    page.drawText(skill.text, { x: leftX + labelW + 6, y: curY, size: 8.5, font: helvetica, color: charcoal });
    curY -= 13;
  }
  curY -= 6;

  // --- CERTIFICATIONS & ACHIEVEMENTS ---
  drawSectionHeader('Certifications & Achievements');
  
  const achievements = [
    { name: 'JavaScript (Basic & Intermediate)', org: 'HackerRank Certified Competency' },
    { name: 'Introduction to MERN Stack', org: 'Simplilearn SkillUp Verified Course' },
    { name: 'Data Structures & Algorithms', org: '100+ Problems Solved on HackerRank & Competitive Platforms' }
  ];

  for (const ach of achievements) {
    page.drawText('*', { x: leftX + 4, y: curY, size: 8, font: helveticaBold, color: burntOrange });
    page.drawText(ach.name, { x: leftX + 16, y: curY, size: 8.5, font: helveticaBold, color: darkInk });
    const nameW = helveticaBold.widthOfTextAtSize(ach.name, 8.5);
    page.drawText(`- ${ach.org}`, { x: leftX + 16 + nameW + 6, y: curY, size: 8.5, font: helvetica, color: slate });
    curY -= 13;
  }

  // Save PDF
  const pdfBytes = await pdfDoc.save();
  const outDir = path.resolve('public/resume');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }
  const outPath = path.join(outDir, 'Ajay_B_Full_Stack_Developer_Resume_Final.pdf');
  fs.writeFileSync(outPath, pdfBytes);
  console.log(`Resume PDF successfully generated at ${outPath}`);
}

generateResume().catch((err) => {
  console.error('Error generating PDF:', err);
  process.exit(1);
});
