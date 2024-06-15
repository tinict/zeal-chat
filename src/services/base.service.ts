import { DeleteResult, Repository } from 'typeorm';
import { BaseServiceInterface } from '../interfaces';
import { EntityId } from 'typeorm/repository/EntityId';
import { BaseMapper } from 'src/mappers';
import { ExceptionFilterHelper } from 'src/helpers';

/**
 * BaseService
 */
export class BaseService<T> implements BaseServiceInterface<T> {
    protected readonly repository: Repository<T>;

    /**
     * Contructor
     * @param repository 
     */
    constructor(repository: Repository<T>) {
        this.repository = repository;
    };

    /**
     * Find one
     * @param id 
     * @param query 
     * @returns 
     */
    async find(query: any): Promise<T[] | T | undefined> {
        try {
            const entity = await this.repository.find({
                where: {
                    ...query
                } as any
            });
            return entity;
        } catch (error: any) {
            return ExceptionFilterHelper.HttpException(error);
        }
    };

    /**
     * Method Create
     * @param data 
     * @param EntityClass 
     * @returns 
     */
    async create(data: any, EntityClass: new () => T): Promise<T | undefined> {
        try {
            const rawDataToEntity: T = await BaseMapper.toEntity(data, EntityClass);
            const entity = await this.repository.save(rawDataToEntity);
            return entity;
        } catch (error: any) {
            return ExceptionFilterHelper.HttpException(error);
        }
    };

    /**
     * Update
     * @param id 
     * @param data 
     * @returns 
     */
    async update(id: EntityId, data: any): Promise<T | undefined> {
        try {
            const entity: T = await this.repository.findOne({
                where: { id } as any
            });

            try {
                const rawDataToEntity = await BaseMapper.toUpdateEntity(data, entity);
                return await this.repository.save(rawDataToEntity);
            } catch (error: any) {
                return ExceptionFilterHelper.HttpException(error);
            }
        } catch (error: any) {
            return ExceptionFilterHelper.HttpException(error);
        }
    };

    /**
     * Delete
     * @param id 
     * @returns 
     */
    async delete(id: EntityId): Promise<DeleteResult> {
        try {
            return await this.repository.delete(id);
        } catch (error: any) {
            return ExceptionFilterHelper.HttpException(error);
        }
    };
};
