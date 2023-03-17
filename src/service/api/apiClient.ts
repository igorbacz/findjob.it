import API_URL from "../../const/apiUrl";

const getReq = async (endpoint: string): Promise<Response> =>
  fetch(API_URL + endpoint, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
const postReq = async <RequestBodyT>(endpoint: string, requestData?: RequestBodyT): Promise<Response> =>
  fetch(API_URL + endpoint, {
    method: "POST",
    body: JSON.stringify(requestData),
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

const deleteReq = async <RequestBodyT>(endpoint: string, id: string): Promise<Response> =>
  fetch(API_URL + endpoint + id, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
const apiClient = {
  getReq,
  postReq,
  deleteReq,
};
export default apiClient;
