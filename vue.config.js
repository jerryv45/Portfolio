module.exports = {
<<<<<<< HEAD
    publicPath: ''
=======
    publicPath: process.env.NODE_ENV === 'production'
      ? '/Portfolio/'
      : '/'
>>>>>>> 1efc785 (Rebuild Github Pages)
  }