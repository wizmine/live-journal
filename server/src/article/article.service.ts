import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { ArticleDto } from './article.dto';

@Injectable()
export class ArticleService {
  constructor(private prisma: PrismaService) {}

  async getById(id: string) {
    const article = await this.prisma.article.findUnique({
      where: { id: id },
    });

    if (!article) throw new NotFoundException('Article not found!');

    return article;
  }

  async getFeed() {
    const articles = await this.prisma.article.findMany({
      include: {
        author: true,
      },
    });

    return articles.map((article) => ({
      id: article.id,
      content: article.content,
      author: {
        id: article.author.id,
        name: article.author.name,
        email: article.author.email,
      },
    }));
  }

  async create(dto: ArticleDto, userId: string) {
    return this.prisma.article.create({
      data: {
        ...dto,
        author: {
          connect: {
            id: userId,
          },
        },
      },
    });
  }

  async update(dto: Partial<ArticleDto>, articleId: string, userId: string) {
    return this.prisma.article.update({
      where: {
        authorId: userId,
        id: articleId,
      },
      data: dto,
    });
  }

  async delete(articleId: string) {
    return this.prisma.article.delete({
      where: {
        id: articleId,
      },
    });
  }
}
