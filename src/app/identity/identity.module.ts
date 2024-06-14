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
import { 
    ProfileService,
    UserService 
} from './services';
import { UserController } from './http';
import { ProfileController } from './http/controllers/profile.controller';

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
    controllers: [
        ProfileController,
        UserController
    ],
    providers: [
        TestService,
        UserService,
        ProfileService
    ],
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
