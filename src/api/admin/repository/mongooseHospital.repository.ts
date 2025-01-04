import { HospitalRepository } from "@/api/admin/repository/hospital.repository";
import { MongooseHospital } from "@/api/admin/model/hospital.schema";
import HttpException from "@/api/common/exceptions/http.exception";

export class MongooseHospitalRepository implements HospitalRepository {
    /** 회원가입(role = admin, hospital) */
    async signup(hospital: Omit<IHospital, "id">): Promise<IHospital> {
      const newHospital = new MongooseHospital(hospital);
      await newHospital.save();
      return newHospital;
    }  

    /** 병원 수정(role = hospital) */
    async updateHospital(id: string, updateHospitalInfo: Partial<IHospital>): Promise<void> {
      await MongooseHospital.findByIdAndUpdate(id, updateHospitalInfo, {
        new: true,
      });
  
      return;
    }
  
    /** 병원 삭제(role = hospital) */
    async deleteHospital(id: string): Promise<void> {
      const deletedHospital = await MongooseHospital.findByIdAndDelete(id);
      if (!deletedHospital) {
        throw new HttpException(404, "해당 병원을 찾을 수 없습니다.");
      }
      return;
    }
    
    /** 병원 상세 조회(role = hospital) */
    async getHospital(id: string): Promise<IHospital> {
      const hospital = await MongooseHospital.findById(id);
      if (!hospital) {
        throw new HttpException(404, "해당 병원을 찾을 수 없습니다.");
      }
      return hospital;
    }
  
    // async findById(id: string): Promise<IAdmin | IHospital | null> {
    //   try {
    //     const fullAdmin = await MongooseAdmin.findById(id)
    //       .populate({
    //         path: "hospital"
    //       })
    //       .exec();
    //     return fullAdmin;
    //   } catch (error: any) {
    //     const message = error.message.toString();
    //     if (message.includes("Cast to ObjectId failed")) {
    //       return null;
    //     }
  
    //     throw error;
    //   }
    // }
  
    async findById(id: string): Promise<IHospital | null> {
      try {
        
        const hospital = await MongooseHospital.findById(id)
          .populate({
            path: "order",
            // populate: {
            //   path: "user",
            // },
          })
          .exec();
        
        return hospital ?? null;

      } catch (error: any) {
        const message = error.message.toString();
    
        if (message.includes("Cast to ObjectId failed")) {
          return null;
        }
  
        throw error;
      }
    }
  
    async findByEmail(email: string): Promise<IHospital | null> {
      // const findAdmin = await MongooseAdmin.findOne({email});
      // return findAdmin ?? null;
  
      try {
        const hospital = await MongooseHospital.findOne({email});
    
          if (hospital) {
            return hospital as IHospital;
          }
    
        return hospital ?? null;
        
      } catch (error: any) {
        const message = error.message.toString();
    
        if (message.includes("Cast to ObjectId failed")) {
          return null;
        }
  
        throw error;
      }
    }
  }  