/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://accounts:SDypsV3k2JPZ@ep-small-block-a5sgm261.us-east-2.aws.neon.tech/AI-Content-Generator?sslmode=require',

    }
  };
  
