/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://ai-interview-mocker_owner:PyaZ5VA8HknB@ep-aged-queen-a1y793ll.ap-southeast-1.aws.neon.tech/ai-interview-mocker?sslmode=require',
    }
  };