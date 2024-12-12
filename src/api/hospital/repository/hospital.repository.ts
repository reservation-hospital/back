export interface HospitalRepository {
    createHospital(params: Omit<IHospital, "id" | "status">): Promise<IHospital>;
    loginHospital(email: string, password: string): Promise<void>;
    logoutHospital(hospitalId: string): Promise<void>;
    getHospital(hospitalId: string): Promise<IHospital>;
    updateHospital(hospitalId: string, params: Omit<IHospital, "id" | "status">): Promise<void>;
}