const PDFMerger = require('pdf-merger-js');
const merger = new PDFMerger(); // Correct the variable name

const pdf = async (p1, p2) => {
  await merger.add(p1);
  await merger.add(p2);
  await merger.save('public/merged.pdf');
};

module.exports = { pdf };
