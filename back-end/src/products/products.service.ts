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

    update(id: number, updateProductDto: UpdateProductDto) {
        return `This action updates a #${id} product`;
    }

    remove(id: number) {
        return `This action removes a #${id} product`;
    }
}
