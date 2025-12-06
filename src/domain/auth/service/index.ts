import { http } from "@/providers/HTTPProvider";

const loginService = async () => {
  return http
    .get("/5a760c0a-92eb-4f40-b150-f7be750d9926")
    .then((response) => response.data);
};

export { loginService };
