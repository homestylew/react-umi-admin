
import { defineConfig } from "umi";

export default defineConfig({
  layout: false,

  routes: [
    // component若写为相对路径，将从pages文件夹为起点开始寻找文件
    { path: "/", component: "./index" },
    { path: "/docs", component: "./docs" },



    { path: '/*', component: './404.tsx' }
  ],
  npmClient: 'yarn',
});
