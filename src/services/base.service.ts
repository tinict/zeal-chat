import { DeleteResult, Repository } from 'typeorm';
import { BaseServiceInterface } from '../interfaces';
import { EntityId } from 'typeorm/repository/EntityId';

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

    async store(data: any): Promise<T> {
        const entity = await this.repository.save(data);
        return entity;
    }

    async update(id: EntityId, data: any): Promise<T | undefined> {
        await this.repository.update(id, data);
        return this.findById(id);
    }

    async delete(id: EntityId): Promise<DeleteResult> {
        return await this.repository.delete(id);
    }
}
