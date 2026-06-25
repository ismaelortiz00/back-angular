import { config } from "dotenv";
import { DataSource } from "typeorm";

const env = process.env.NODE_ENV || "development";

config({
  override: true,
  path: `.env.${env}`,
  debug: true, 
});

export default new DataSource({
  type: "postgres",
  host: process.env.HOST,
  port: Number(process.env.PORT),
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,

  // 1. Cambia las rutas para que busquen tanto en src (TS) como en dist (JS)
  entities: ["src/**/*.entity{.ts,.js}", "dist/**/*.entity.js"],
  
  // 2. Haz lo mismo con las migraciones para que se generen en 'src' pero se lean en 'dist' si es necesario
  migrations: ["src/database/migrations/*{.ts,.js}"],
});