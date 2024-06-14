import { EntityId } from 'typeorm/repository/EntityId';
import { DeleteResult } from 'typeorm';

export interface BaseServiceInterface<T> {
    /**
     * Lấy danh sách tất cả các thực thể
     * @returns Promise<T[]>
     */
    index(): Promise<T[]>;

    /**
     * Tìm một thực thể theo ID
     * @param id EntityId
     * @returns Promise<T>
     */
    findById(id: EntityId): Promise<T>;

    /**
     * Tìm nhiều thực thể theo danh sách ID
     * @param ids EntityId[]
     * @returns Promise<T[]>
     */
    findByIds(ids: EntityId[]): Promise<T[]>;

    /**
     * Tạo mới một thực thể
     * @param data any
     * @returns Promise<T>
     */
    store(data: any): Promise<T>;

    /**
     * Cập nhật một thực thể theo ID
     * @param id EntityId
     * @param data any
     * @returns Promise<T>
     */
    update(id: EntityId, data: any): Promise<T>;

    /**
     * Xóa một thực thể theo ID
     * @param id EntityId
     * @returns Promise<DeleteResult>
     */
    delete(id: EntityId): Promise<DeleteResult>;
}
