/* eslint-disable prettier/prettier */
import { Module, Global } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Global()
@Module({
	imports: [
		ConfigModule.forRoot(),
		MongooseModule.forRoot(process.env.MONGO_URI, {})
		// MongooseModule.forRoot('mongodb://localhost:27017/UMU_dbApp')
	],
	providers: [],
	exports: [MongooseModule],
})
export class DatabaseModule {}