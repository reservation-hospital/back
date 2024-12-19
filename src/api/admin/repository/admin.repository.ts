export interface AdminRepository {
  signup(admin: Omit<IAdmin, "id">): Promise<IAdmin>;
  getAdmins(): Promise<IAdmin[]>;
  getAdmin(id: string): Promise<IAdmin>;
  updateAdmin(id: string, admin: IAdmin): Promise<IAdmin>;
  deleteAdmin(id: string): Promise<void>;
  // 병원 관리자 기능
  getHospital(id: string): Promise<IAdmin>;
  updateHospital(id: string, admin: IAdmin): Promise<IAdmin>;
  deleteHospital(id: string): Promise<void>;

  findByEmail(email: string): Promise<IAdmin | null>;
}