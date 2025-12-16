const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: false,
  viewportWidth: 1500,
  viewportHeight: 900,
  e2e: {
    specPattern: 'cypress/integration/**/*.js',
    supportFile: 'cypress/support/index.js',
    setupNodeEvents(on, config) {
      const task = require('cypress-skip-and-only-ui/task')
      on('task', task)

      // Attach Applitools Eyes plugin hooks
      require('@applitools/eyes-cypress')(module)

      return config
    },
  },
})
