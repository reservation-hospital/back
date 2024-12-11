/** 회원가입 */
type signupRequestPath = {};
type signupRequestParams = {};
type signupRequestBody = {};

type signupRequest = {
    path?: signupRequestPath;
    params?: signupRequestParams;
    body: signupRequestBody;
}

/** 로그인 */
type loginRequestPath = {};
type loginRequestParams = {};
type loginRequestBody = {};

type loginRequest = {
    path?: loginRequestPath;
    params?: loginRequestParams;
    body?: loginRequestBody;
}

/** 로그아웃 */
type logoutRequestPath = {};
type logoutRequestParams = {};
type logoutRequestBody = {};

type logoutRequest = {
    path?: logoutRequestPath;
    params?: logoutRequestParams;
    body?: logoutRequestBody;
}

// /** 병원 목록 조회 */
// type getHospitalsRequestPath = {};
// type getHospitalsRequestParams = {};
// type getHospitalsRequestBody = {};

// type getHospitalsRequest = {
//     path?: getHospitalsRequestPath;
//     params?: getHospitalsRequestParams;
//     body?: getHospitalsRequestBody;
// }

// /** 병원 상세 조회 */
// type getHospitalRequestPath = {
//     hospitalId: string;
// };
// type getHospitalRequestParams = {};
// type getHospitalRequestBody = {};

// type getHospitalRequest = {
//     path: getHospitalRequestPath;
//     params?: getHospitalRequestParams;
//     body?: getHospitalRequestBody;
// }

// /** 병원 삭제 */
// type deleteHospitalRequestPath = {
//     hospitalId: string;
// };
// type deleteHospitalRequestParams = {};
// type deleteHospitalRequestBody = {};

// type deleteHospitalRequest = {
//     path: deleteHospitalRequestPath;
//     params?: deleteHospitalRequestParams;
//     body?: deleteHospitalRequestBody;
// };