// import { HospitalRepository } from "@/api/hospital/repository/hospital.repository";
// import { MongooseHospital } from "@/api/hospital/model/hospital.schema";

// export class MongooseHospitalRepository implements HospitalRepository {
//     async createHospital(params: Omit<IHospital, "id" | "status">): Promise<IHospital> {
//         const newHospital = new MongooseHospital(params);
//         await newHospital.save();
//         return newHospital;
//     }
    
//     async loginHospital(email: string, password: string): Promise<void> {}

//     async logoutHospital(hospitalId: string): Promise<void> {}

//     async getHospital(hospitalId: string): Promise<IHospital> {
//         return MongooseHospital.findById(hospitalId);
//     }

//     async updateHospital(hospitalId: string, params: Omit<IHospital, "id" | "status">): Promise<void> {
//         await MongooseHospital.findByIdAndUpdate(hospitalId, params);
//     }
// }