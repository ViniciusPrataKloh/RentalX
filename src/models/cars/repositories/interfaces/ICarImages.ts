import { CarImages } from "../../entities/CarImages";

interface ICarImagesRepository {
    create(car_id: string, image_name: string): Promise<CarImages>;
}

export { ICarImagesRepository };
