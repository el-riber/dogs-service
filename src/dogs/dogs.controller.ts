import { Controller, Get, Post, Body, Put, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';

@Controller('dogs')
export class DogsController {
    private dogs = [
        { id: 1, name: 'Rex', age: 5 },
        { id: 2, name: 'Woof', age: 3 }
    ];

    @Get()
    getAllDogs() {
        return this.dogs;
    }

    @Post()
    createDog(@Body() dog: { name: string; age: number }) {
        const newDog = { id: this.dogs.length + 1, ...dog };
        this.dogs.push(newDog);
        return newDog;
    }

    @Get(':id')
    getDogById(@Param('id') id: string) {
        console.log(`Fetching dog with ID ${id}`);
        // Convert id parameter from string to number
        const numericId = parseInt(id, 10);

        // Find the dog by numericId
        const dog = this.dogs.find(dog => dog.id === numericId);
        if (!dog) {
            throw new HttpException('Dog not found', HttpStatus.NOT_FOUND);
        }
        return dog;
    }

    @Put(':id')
    updateDog(@Param('id') id: string, @Body() dog: { name: string; age: number }) {
        const numericId = parseInt(id, 10);
        const existingDog = this.dogs.find(d => d.id === numericId);
        if (!existingDog) {
            throw new HttpException('Dog not found', HttpStatus.NOT_FOUND);
        }
        existingDog.name = dog.name;
        existingDog.age = dog.age;
        return existingDog;
    }

    @Delete(':id')
    deleteDog(@Param('id') id: string) {
        const numericId = parseInt(id, 10);
        const index = this.dogs.findIndex(d => d.id === numericId);
        if (index === -1) {
            throw new HttpException('Dog not found', HttpStatus.NOT_FOUND);
        }
        return this.dogs.splice(index, 1);
    }
}
