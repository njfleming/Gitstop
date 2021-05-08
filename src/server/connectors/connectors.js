import Sequelize from 'sequelize'
import { stringify } from 'uuid'

const dbSequelize = new Sequelize('Users', 
                        process.env.DB_USERNAME,
                        process.env.DB_PASSWORD, 
                        { dialect: 'postgres'})

const userModel = db.define('user', {
    user_name: Sequelize.STRING,
    user_email: Sequelize.STRING
})

userModel.hasMany(issuesModel)
userModel.hasMany(commentsModel)

const issuesModel = db.define('issues', {
    issue_body: Sequelize.STRING
})

issuesModel.belongsTo(userModel)
issuesModel.belongsTo(projectsModel)
issuesModel.hasMany(commentsModel)

const commentsModel = db.define('comments', {
    comment_body: Sequelize.STRING,
    comment_date: Sequelize.TIME,
    comment_status: Sequelize.BOOLEAN
})

commentsModel.belongsTo(userModel)
commentsModel.belongsTo(issuesModel)

const projectsModel = db.define('projects', {
    project_name: Sequelize.STRING
})

projectsModel.hasMany(issuesModel)

export { dbSequelize }