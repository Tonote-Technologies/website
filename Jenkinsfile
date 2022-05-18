pipeline {
    agent any
    stages {
        stage('Deploy') {
            when {
                branch 'develop'
            }
            steps {
                echo 'Tonote Website Deploy Stage'
                sh 'ssh dev@54.77.211.177 "cd tonote-website && git stash && git pull origin develop && npm install && npm run build && pm2 restart tonote-website"'
            }
            
        }
    }
}
