import { Module } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { MessagesGateway } from './messages.gateway';
import { PrismaService } from 'src/services/prisma.service';

@Module({
  providers: [MessagesGateway, MessagesService, PrismaService],
})
export class MessagesModule {}
