import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeORMLogger } from './exceptions';

@Global()
@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'Tin18082002',
            database: 'db_dev',
            entities: [__dirname + '../../**/*.entity{.ts,.js}'],
            logging: true,
            logger: new TypeORMLogger,
            synchronize: true,
        }),
    ],
})

export class DatabaseModule { };
