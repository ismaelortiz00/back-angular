import { ConfigService } from "src/config/config.service";
import { DataSource } from "typeorm";

export const databaseProvider = [
  {
    provide: 'DATABASE_CONNECTION',
    inject: [ConfigService],
    useFactory: (config: ConfigService) => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: '12345',
        database: 'back_nest_angular3B'
      });

      return dataSource.initialize();
    }
  }
];