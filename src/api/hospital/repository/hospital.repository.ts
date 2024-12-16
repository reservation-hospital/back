export interface HospitalRepository {
    // 병원 생성은 id와 status를 제외한 타입을 받고 IHospital 타입을 반환
    createHospital(hospital: Omit<IHospital, "id" | "status">): Promise<IHospital>;
    // 병원 목록 조회
    findAll(): Promise<IHospital[]>;
    // 이메일로 병원 찾기 -> IHospital 타입을 반환하거나 없으면 null 반환
    findByEmail(email: string): Promise<IHospital | null>;
    // 병원 ID로 병원 찾기 -> IHospital 타입을 반환하거나 없으면 null 반환
    findById(hospitalId: string): Promise<IHospital | null>;
    // 병원 ID로 찾고 정보 업데이트 -> 반환할 것이 없기 때문에 void
    updateHospital(hospitalId: string, updateHospitalInfo: Partial<IHospital>): Promise<void>;
}