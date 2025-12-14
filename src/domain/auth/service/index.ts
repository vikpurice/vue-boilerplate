import { http } from "@/providers/HTTPProvider";

const loginService = async () => {
  return http
    .get("/e6bd06f2-3613-4df5-8966-ea2c8ed0d5ee")
    .then((response) => response.data);
};

export { loginService };
