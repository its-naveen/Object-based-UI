// type Environment = 'development' | 'production';

// const config: Record<Environment, { API_URL: string | undefined }> = {
//   development: {
//     API_URL: process.env.REACT_APP_DEV_API,
//   },
//   production: {
//     API_URL: process.env.REACT_APP_DEV_API,
//   }
// };

// export function getConfig() {
//   const env = (process.env.NODE_ENV as Environment) || 'development';
//   return config[env as keyof typeof config];
// }

// export const BASE_URL= 'https://dummyjson.com';
export const BASE_URL= 'http://localhost:3000';