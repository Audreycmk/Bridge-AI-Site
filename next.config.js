// const nextConfig = {
//   output: "export",
//   images: {
//     unoptimized: true // 关闭Next图片自动优化，直接输出原png路径
//   }
// }
// module.exports = nextConfig
// next.config.js

// next.config.js
module.exports = {
    output: "export",
    images: {
        unoptimized: true,   // 👈 disables the /_next/image optimizer
    },
}

