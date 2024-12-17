export interface AdminService {
  signUp: (admin: IAdmin) => Promise<IAdmin>;
  login: (email: string, password: string) => Promise<IAdmin>;
  logout: (id: string) => Promise<void>;
  getAdmins: () => Promise<IAdmin[]>;
  getAdmin: (id: string) => Promise<IAdmin>;
  updateAdmin: (id: string, admin: IAdmin) => Promise<IAdmin>;
  deleteAdmin: (id: string) => Promise<void>;
  //병원 관리자 기능
  getHospital: (id: string) => Promise<IAdmin>;
  updateHospital: (id: string, admin: IAdmin) => Promise<IAdmin>;
  deleteHospital: (id: string) => Promise<void>;
}
