export interface AdminRepository {
  /** 회원가입(role = admin, hospital) */
  signup(admin: Omit<IAdmin, "id">): Promise<IAdmin>;
  /** 관리자 전체 조회(role = admin) */
  getAdmins(): Promise<IAdmin[]>;
  /** 관리자 조회(role = admin) */
  getAdmin(id: string): Promise<IAdmin>;
  /** 관리자 수정(role = admin) */
  updateAdmin(id: string, updateAdminInfo: Partial<IAdmin>): Promise<void>;
  /** 관리자 삭제(role = admin) */
  deleteAdmin(id: string): Promise<void>;
  /** 병원 목록 조회(role = admin) */
  getHospitals(): Promise<IHospital[]>;
  /** 병원 수정(role = hospital) */
  updateHospital(id: string, updateHospitalInfo: Partial<IHospital>): Promise<void>;
  /** 병원 삭제(role = hospital) */
  deleteHospital(id: string): Promise<void>;
  /** 병원 상세 조회(role = hospital) */
  getHospital(id: string): Promise<IHospital>;

  /** ID로 조회 */
  findById(adminId: string): Promise<IAdmin | IHospital | null>;
  /** 이메일로 조회 */
  findByEmail(email: string): Promise<IAdmin | null>;
}