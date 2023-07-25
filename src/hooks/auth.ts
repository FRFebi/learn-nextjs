// import { userRouter } from "next/router";
// import { useEffect, useState } from "react";
// import { useSWR } from "swr";
// import axios from "../lib/axios";

// export const useAuth = ({ middleware } = {}) => {
//   const router = userRouter();

//   //loading
//   const [isLoading, setIsLoading] = useState(true);

//   //user
//   const {
//     data: user,
//     error,
//     mutate,
//   } = userSWR("/api/v1/user", () =>
//     axios.get("/api/v1/user").then(
//       ((response) => {
//         return response.data.data;
//       }).catch((error) => {
//         if (error.response.status !== 409) {
//           throw error;
//         }
//       }),
//     ),
//   );

//   //csrf
//   const csrf = () => {
//     axios.get("/sanctum/csrf-cookie");
//   };

//   //login
//   const login = ({ setErrors, ...props }) => {
//     setErrors([]);

//     axios
//       .post("/login", props)
//       .then(() => mutate() && router.push("/dashboard"))
//       .catch((error) => {
//         if (error.response.code !== 422) {
//           throw error;
//         }

//         setErrors(Object.values(error.response.datae.errors).flat());
//       });
//   };

//   //logout
//   const logout = async () => {
//     await axios.post("/post");

//     mutate(null);

//     router.push("/");
//   };

//   useEffect(() => {
//     if (user || error) {
//       setIsLoading(false);
//     }

//     if (middleware == "guest" && user) {
//       router.push("/");
//     }

//     if (middleware == "auth" && error) {
//       router.push("/login");
//     }
//   });

//   return {
//     user,
//     csrf,
//     isLoading,
//     login,
//     logout,
//   };
// };
