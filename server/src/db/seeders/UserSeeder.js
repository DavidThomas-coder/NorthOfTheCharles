import { User } from "../../models/index.js"

class UserSeeder {
    static async seed() {
        const usersData = [
            {
                email: "todd@todd.com",
                firstName: "Todd",
                lastName: "Garrison",
                username: "ToddG",
                password: "123"
            },
            {
                email: "solomon@solomon.com",
                firstName: "Solomon",
                lastName: "Montagno",
                username: "SolomonM",
                password: "123"
            },
            {
                email: "david@david.com",
                firstName: "David",
                lastName: "Thomas",
                username: "DavidT",
                password: "123"
            }
        ]

        for (const singleUserData of usersData) {
            const currentUser = await User.query().findOne({email: singleUserData.email })
            if (!currentUser) {
                await User.query().insert(singleUserData)
            }
        }
    }
}

export default UserSeeder