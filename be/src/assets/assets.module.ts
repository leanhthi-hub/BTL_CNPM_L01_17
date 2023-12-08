
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ImagesController } from './images.controller';


@Module({
    imports: [],
    controllers: [ImagesController],
    providers: [],
    exports: []
})
export class AssetssModule { }