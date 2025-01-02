export interface HospitalRepository {
    /** 회원가입(role = admin, hospital) */
    signup(admin: Omit<IHospital, "id">): Promise<IHospital>;
    /** 병원 수정(role = hospital) */
    updateHospital(id: string, updateHospitalInfo: Partial<IHospital>): Promise<void>;
    /** 병원 삭제(role = hospital) */
    deleteHospital(id: string): Promise<void>;
    /** 병원 상세 조회(role = hospital) */
    getHospital(id: string): Promise<IHospital>;
    /** 병원 목록 조회(role = admin) */
    getHospitals(): Promise<IHospital[]>;
  
    /** ID로 조회 */
    findById(id: string): Promise<IHospital | null>;
    /** 이메일로 조회 */
    findByEmail(email: string): Promise<IHospital | null>;
  }