import { HospitalRepository } from "@/api/hospital/repository/hospital.repository";
import { MongooseHospital } from "@/api/hospital/model/hospital.schema";

export class MongooseHospitalRepository implements HospitalRepository {
    async createHospital(hospital: Omit<IHospital, "id" | "status">): Promise<IHospital> {
        const newHospital = new MongooseHospital(hospital);

        await newHospital.save();
        
        return newHospital;
    }

    async findAll(): Promise<IHospital[]> {
        const values = await MongooseHospital.find();

        return values;
    }

    async findByEmail(email: string): Promise<IHospital | null> {
        const findHospital = await MongooseHospital.findOne({email});

        return findHospital ?? null
    }

    async findById(hospitalId: string): Promise<IHospital | null> {
        return MongooseHospital.findById(hospitalId);
    }

    async updateHospital(hospitalId: string, params: Omit<IHospital, "id" | "status">): Promise<void> {
        await MongooseHospital.findByIdAndUpdate(hospitalId, params);
    }
}