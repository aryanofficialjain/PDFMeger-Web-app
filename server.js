const express = require('express');
const path = require('path');
const app = express()
const port = 3000;
const multer = require('multer');
const { pdf } = require('./textpdf'); // Correct the path to your merged.js file
const upload = multer({ dest: 'uploads/' })
app.use('/static', express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './templates/index.html'));
})

app.post('/merge', upload.array('pdfs', 2), async (req, res, next) => {
  console.log(req.files); // Use req.files, not req.file
  await pdf(path.join(__dirname, req.files[0].path), path.join(__dirname, req.files[1].path)); // Use req.files[1], not req.files[0]
  res.redirect("http://localhost:3000/static/merged.pdf");
  // Remove the following line, as you're sending a response using res.redirect
  // res.send({ data: req.files })
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
