/* eslint-disable no-console */
import { connection } from "../boot.js"
import UserSeeder from "./seeders/UserSeeder.js"
import PostSeeder from "./seeders/PostSeeder.js"

class Seeder {
  static async seed() {
    // include individual seed commands here
    console.log("Seeding Users...")
    await UserSeeder.seed()

    console.log("Seeding Posts...")
    await PostSeeder.seed()

    console.log("Done!")
    await connection.destroy()
  }
}

export default Seeder