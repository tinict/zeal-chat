import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeORMLogger } from './exceptions';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'Tin18082002',
            database: 'rec_test',
            entities: [],
            logger: new TypeORMLogger,
            synchronize: true,
        }),
    ],
})
export class DatabaseModule {};
