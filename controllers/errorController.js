
exports.error404 = (req, res, next) => {
  res.status(404).render('home/errorView', {
    pageTitle: 'Error', 
    path: '/404'
  });
};
