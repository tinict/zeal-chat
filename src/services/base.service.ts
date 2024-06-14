import { DeleteResult, Repository } from 'typeorm';
import { BaseServiceInterface } from '../interfaces';
import { EntityId } from 'typeorm/repository/EntityId';
import { Logger } from '@nestjs/common';
import { BaseMapper } from 'src/mappers';
import { ExceptionFilterHelper } from 'src/helpers';


export class BaseService<T> implements BaseServiceInterface<T> {
    protected readonly repository: Repository<T>;

    constructor(repository: Repository<T>) {
        this.repository = repository;
    }

    async index(): Promise<T[]> {
        return await this.repository.find();
    }

    async findById(id: EntityId): Promise<T | undefined> {
        const entity = await this.repository.findOne(id as any);
        return entity;
    }

    async findByIds(ids: EntityId[]): Promise<T[]> {
        return await this.repository.findByIds(ids);
    }

    /**
     * Method Create
     * @param data 
     * @param EntityClass 
     * @returns 
     */
    async create(data: any, EntityClass: new () => T): Promise<T | undefined> {
        try {
            const rawDataToEntity: T = await BaseMapper.toEntity(data, EntityClass);
            
            console.log('Raw data to entity:', rawDataToEntity);
            const entity = await this.repository.save(rawDataToEntity);
            console.log('Saved entity:', entity);

            return entity;
        } catch (error: any) {
            console.error('Error creating entity:', error);
            return ExceptionFilterHelper.HttpException(error);
        }
    };

    async update(id: EntityId, data: any): Promise<T | undefined> {
        await this.repository.update(id, data);
        return this.findById(id);
    }

    async delete(id: EntityId): Promise<DeleteResult> {
        return await this.repository.delete(id);
    }
}
