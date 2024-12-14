/** 관리자 라우터 */
const ADMIN_ROUTES = {
  /** 관리자 API */
  ADMIN_API: "/api/admin",
} as const;

const HOSPITAL_ROUTES = {
  HOSPITAL_API: "/api/hospital",
};
const PRODUCT_ROUTES = {
  PRODUCT_API: "/api/product",
};

export const ROUTES_INDEX = {
  ...ADMIN_ROUTES,
  ...HOSPITAL_ROUTES,
  ...PRODUCT_ROUTES,
} as const;
