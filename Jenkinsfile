pipeline {
  /*agent {
    any {
      image 'mcr.microsoft.com/playwright:v1.27.1-focal'
    }
  }
  stages {
    /*stage('install playwright') {
      steps {
        bat '''
          npm i -D @playwright/test
          npx playwright install
        '''
      }
    }/*/
    stage('tests for BABEC') {
      steps {
        bat '''
          npx playwright test --list
          npx playwright test
        '''
      }
    }
  }
}