exports.get404 = (req, res, next) => {
  res.status(404).render('404View', { pageTitle: 'Page Not Found', path: '/404' });
};
