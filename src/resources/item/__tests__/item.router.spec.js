import router from '../item.router'

describe('item router', () => {
  test('has crud routes', () => {
    // so assert that everything in the routes array is present in the router stack.
    const routes = [
      { path: '/', method: 'get' },
      // { path: '/:id', method: 'get' },
      // { path: '/:id', method: 'delete' },
      // { path: '/:id', method: 'put' },
      // { path: '/', method: 'post' }
    ]

    console.log('router--', JSON.stringify(router.stack[0], 0, 2))


    routes.forEach(route => {
      const match = router.stack.find(
        s => s.route.path === route.path && s.route.methods[route.method]
      )
      // expect(match).toEqual('')
      expect(match).toBeTruthy()
    })
  })
})

// stack contains [{route: {path, method}}]