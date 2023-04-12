module.exports = {
    verbose: true,
    preset:'jest-playwright-preset',
    transform: {
      "^.+\\.tsx?$": "ts-jest",

    }, 
    testRunner: 'jasmine2',
    setupFilesAfterEnv: ["jest-allure/dist/setup"]
} 