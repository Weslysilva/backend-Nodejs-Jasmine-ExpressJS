app.use((req, res, next) => {
    setTimeout(() => {
      httpRequestContext.set('user', 'fulano')
      next()
    }, 100)
})