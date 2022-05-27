import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(Product)
        private productRepository: Repository<Product>,
    ) {}

    async create(createProductDto: CreateProductDto) {
        const product = await this.productRepository.save(createProductDto);

        return product;
    }

    async findAll() {
        const products = await this.productRepository.find();

        return products;
    }

    async findOne(id: number) {
        try {
            const product = await this.productRepository.findOneOrFail(id);

            return product;
        } catch (err) {
            throw new NotFoundException(err.message);
        }
    }

    async update(id: number, updateProductDto: UpdateProductDto) {
        const product = await this.findOne(id);

        for (const property in updateProductDto) {
            product[property] = updateProductDto[property];
        }

        await this.productRepository.save(product);

        return product;
    }

    remove(id: number) {
        return `This action removes a #${id} product`;
    }
}
