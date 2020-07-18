/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.render('home', {
    title: 'Home'
  });
};

exports.proton = (req, res) => {
  res.render('proton', {
    title: 'Landing Page'
  });
};
