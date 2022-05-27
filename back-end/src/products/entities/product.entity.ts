import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'products' })
export class Product {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ type: 'varchar', width: 100, nullable: false })
    name: string;

    @Column({ type: 'varchar', width: 50, nullable: false })
    price: string;

    @Column({ type: 'varchar', width: 100, nullable: false })
    brand: string;

    @Column({ nullable: false })
    image: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: string;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: string;
}
