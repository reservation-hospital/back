export interface HospitalService {
    /** 회원가입(role = admin, hospital) */
    signUp: (params: Omit<IHospital, "id" | "role">) => Promise<IHospital>; 
    /** 병원 수정(role = hospital) */
    updateHospital: (id: string, params: Partial<Omit<IHospital, "id">>) => Promise<void>;
    /** 병원 삭제(role = hospital) */
    deleteHospital: (id: string) => Promise<void>;
    /** 병원 상세 조회(role = hospital) */
    getHospital: (id: string) => Promise<IHospital>;
  }