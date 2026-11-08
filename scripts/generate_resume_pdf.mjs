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
  
  // Colors (Dark Burgundy & Rose Palette)
  const darkBurgundy = rgb(0.090, 0.067, 0.078); // #171114
  const roseAccent = rgb(0.910, 0.475, 0.569); // #E87991
  const secondaryRose = rgb(0.839, 0.651, 0.627); // #D6A6A0
  const charcoal = rgb(0.18, 0.18, 0.18);
  const slate = rgb(0.40, 0.40, 0.40);
  const dividerColor = rgb(0.82, 0.78, 0.80);
  
  // Header top banner (Dark Burgundy)
  page.drawRectangle({
    x: 0,
    y: height - 95,
    width: width,
    height: 95,
    color: darkBurgundy,
  });

  // Top accent line (Rose)
  page.drawRectangle({
    x: 0,
    y: height - 4,
    width: width,
    height: 4,
    color: roseAccent,
  });

  // Header Text
  page.drawText('AJAY B', {
    x: 40,
    y: height - 42,
    size: 24,
    font: helveticaBold,
    color: rgb(1.0, 0.97, 0.97),
  });

  page.drawText('Full Stack Developer  |  MERN Stack Development', {
    x: 40,
    y: height - 62,
    size: 11,
    font: helveticaBold,
    color: roseAccent,
  });

  page.drawText('Coimbatore, India   *   bajayy1812@gmail.com   *   linkedin.com/in/ajay-b-0b0789328   *   github.com/bajayy1812-code', {
    x: 40,
    y: height - 80,
    size: 8.5,
    font: helvetica,
    color: rgb(0.88, 0.85, 0.86),
  });

  let curY = height - 116;
  const leftX = 40;

  function drawSectionHeader(title) {
    page.drawText(title.toUpperCase(), {
      x: leftX,
      y: curY,
      size: 10,
      font: helveticaBold,
      color: roseAccent,
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
    "Full Stack Developer specializing in MERN stack development and modern web application engineering. Hands-on experience building responsive React interfaces, scalable Node.js and Express.js RESTful APIs, and modeled MongoDB databases with JWT authentication and role-based access control. Passionate about problem-solving, test automation, and writing clean, maintainable code.";
  
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
    color: darkBurgundy,
  });
  page.drawText('2023 - 2027 (Expected)', {
    x: width - leftX - 95,
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
    color: roseAccent,
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
    color: darkBurgundy,
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
    color: roseAccent,
  });
  curY -= 14;

  const internBullets = [
    'Developed a full-stack MERN application with seamless client-server state synchronization.',
    'Created modular, reusable React.js interface components following DRY principles.',
    'Engineered responsive, accessible frontends tested across multiple screen resolutions.',
    'Built RESTful API endpoints using Node.js and Express.js with custom error handlers.',
    'Integrated MongoDB database layers using Mongoose ODM with strict schema definitions.',
    'Practiced continuous version control and collaborative workflows utilizing Git and GitHub.'
  ];

  for (const bullet of internBullets) {
    page.drawText('*', { x: leftX + 4, y: curY, size: 8, font: helveticaBold, color: roseAccent });
    page.drawText(bullet, { x: leftX + 16, y: curY, size: 8.5, font: helvetica, color: charcoal });
    curY -= 12;
  }
  curY -= 8;

  // --- PROJECTS ---
  drawSectionHeader('Featured Technical Projects');
  
  // Project 1
  page.drawText('Gym Membership Management System (Iron Pulse)', {
    x: leftX,
    y: curY,
    size: 9.5,
    font: helveticaBold,
    color: darkBurgundy,
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
    page.drawText('*', { x: leftX + 4, y: curY, size: 8, font: helveticaBold, color: roseAccent });
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
    color: darkBurgundy,
  });
  page.drawText('JavaScript ES6+, Node.js, Express.js, MongoDB, RESTful APIs', {
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
    page.drawText('*', { x: leftX + 4, y: curY, size: 8, font: helveticaBold, color: roseAccent });
    page.drawText(bullet, { x: leftX + 16, y: curY, size: 8.5, font: helvetica, color: charcoal });
    curY -= 12;
  }
  curY -= 8;

  // --- TECHNICAL SKILLS ---
  drawSectionHeader('Technical Skills');
  
  const skillLines = [
    { label: 'Frontend Development:', text: 'React.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Responsive Design' },
    { label: 'Backend Development:', text: 'Node.js, Express.js, RESTful API Design, Middleware, CRUD Operations' },
    { label: 'Database Systems:', text: 'MongoDB, MongoDB Atlas, Mongoose ODM, Data Modeling' },
    { label: 'Security & Auth:', text: 'JWT Authentication, bcrypt Password Hashing, RBAC, Protected Routes' },
    { label: 'Tools & Workflow:', text: 'Git, GitHub, Debugging, Data Structures & Algorithms, Clean Code' }
  ];

  for (const skill of skillLines) {
    page.drawText(skill.label, { x: leftX, y: curY, size: 8.5, font: helveticaBold, color: darkBurgundy });
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
    { name: 'Problem Solving Milestone', org: '100+ DSA Problems Solved on Competitive Platforms' }
  ];

  for (const ach of achievements) {
    page.drawText('*', { x: leftX + 4, y: curY, size: 8, font: helveticaBold, color: roseAccent });
    page.drawText(ach.name, { x: leftX + 16, y: curY, size: 8.5, font: helveticaBold, color: darkBurgundy });
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
