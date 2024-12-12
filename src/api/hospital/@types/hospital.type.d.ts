/** admin / hospital 역할 구분 */
type RoleType = "admin" | "hostpital";  

interface IAdmin {
    /** 관리자 ID */
    id: string;
    /** 관리자 이메일(로그인) */
    email: string;
    /** 관리자 비밀번호(로그인) */
    password: string;
    /** 관리자 이름 */
    name: string;
    /** Role */
    role: RoleType;
    /** 병원 정보 */
    hospital: IHospital;
  }

type IHospital = {
    /** 병원 id */
    id: string;
    /** 병원 이름 */
    name: string;
    /** 병원 이메일 */
    email: string;
    /** 병원 비밀번호 */
    password: string;
    /** 병원 주소 */
    address: string;
    /** 병원 전화번호 */
    phone: string;
    /** 병원 홈페이지 */
    website: string | null;
    /** 병원 썸네일 */
    thumbnail: string;
    /** 병원 위도 */
    latitude: string;
    /** 병원 경도 */
    longitude: string;
    /** 병원 설명 */
    description: string;
    /** 병원 계약 상태 */
    status: "ACTIVE" | "INACTIVE";
    /** 병원 상품 */
    // products: IProduct[];
    };  