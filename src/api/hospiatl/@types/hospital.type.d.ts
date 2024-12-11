interface IHospital {
  /** 병원 id */
  id: string;
  /** 병원 이름 */
  name: string;
  /** 병원 비밀번호 */
  password: string;
  /** 병원 주소 */
  address: string;
  /** 병원 전화번호 */
  phone: string;
  /** 병원 이메일 */
  email: string;
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
}
