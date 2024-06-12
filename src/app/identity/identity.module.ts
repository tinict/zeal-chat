import { 
    DynamicModule, 
    Module 
} from '@nestjs/common';
import { TestService } from './services/test.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { 
    UserEntity, 
    CredentialEntity, 
    ModelEntity, 
    ModelPermissionEntity, 
    PermissionEntity, 
    ProfileEntity, 
    RoleEntity,
    RolePermissionEntity
} from './entities';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            UserEntity,
            ProfileEntity,
            ModelEntity,
            CredentialEntity,
            PermissionEntity,
            ModelPermissionEntity,
            PermissionEntity,
            RoleEntity,
            RolePermissionEntity
        ])
    ],
    controllers: [],
    providers: [TestService],
    exports: [TestService]
})

export class IdentityModule {
    static forRoot(context: string): DynamicModule {
        const providers = context === 'test';
        if (providers)
            return {
                module: IdentityModule,
                providers: [{ provide: 'TestService', useClass: TestService }],
                exports: [{ provide: 'TestService', useClass: TestService }],
            };
    }
};
