import router from '../item.router'

describe('item router', () => {
  test('has crud routes', () => {
    // so assert that everything in the routes array is present in the router stack.
    const routes = [
      { path: '/', method: 'get' },
      { path: '/:id', method: 'get' },
      { path: '/:id', method: 'delete' },
      { path: '/:id', method: 'put' },
      { path: '/', method: 'post' }
    ]

    routes.forEach(route => {
      console.log('router-----', router)
      const match = router.stack.find(
        s => s.route.path === route.path && s.route.methods[route.method]
      )
      expect(match).toBeTruthy()
    })
  })
})

// stack contains [{route: {path, method}}]