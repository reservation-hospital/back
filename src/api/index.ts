/** 관리자 라우터 */
const ADMIN_ROUTES = {
    /** 관리자 API */
    ADMIN_API: "/api/admin",
  } as const;

const HOSPITAL_ROUTES = {
  HOSPITAL_API: "/api/hospital",
};

export const ROUTES_INDEX = {
 ...ADMIN_ROUTES,
...HOSPITAL_ROUTES,
} as const;
