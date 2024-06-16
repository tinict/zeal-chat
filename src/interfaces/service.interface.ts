import { EntityId } from 'typeorm/repository/EntityId';
import { DeleteResult } from 'typeorm';

export interface BaseServiceInterface<T> {
    /**
     * Find many entity by query
     * @param query any
     * @returns Promise<T[]>
     */
    find(query: any): Promise<T[] | T>;

    /**
     * Create entity
     * @param data any
     * @returns Promise<T>
     */
    create(data: any, EntityClass: any): Promise<T>;

    /**
     * Update entity by id
     * @param id EntityId
     * @param data any
     * @returns Promise<T>
     */
    update(id: EntityId, data: any): Promise<T>;

    /**
     * Delete entity by id
     * @param id EntityId
     * @returns Promise<DeleteResult>
     */
    delete(id: EntityId): Promise<DeleteResult>;
};
