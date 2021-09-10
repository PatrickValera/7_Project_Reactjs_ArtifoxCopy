import bcrypt from 'bcryptjs'

const users = [
    {
        name:"Patrick Valera",
        email:"patrickvalera50@yahoo.com",
        password:bcrypt.hashSync("password",10)
    },
    {
        name:"User 1",
        email:"user1@yahoo.com",
        password:bcrypt.hashSync("password",10)
    }
]

export default users