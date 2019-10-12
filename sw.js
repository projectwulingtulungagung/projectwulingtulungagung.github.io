/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "2019/10/02/Menangkan-9-Mobil-Wuling/index.html",
    "revision": "5832cbe702fa9fdc6b0c8376e4efb72c"
  },
  {
    "url": "404.html",
    "revision": "c8cc1e0b8c71733a60f765f23952f1fb"
  },
  {
    "url": "assets/5bb286bd/fonts/icomoon.ttf",
    "revision": "854e64012fe6ad84bc091f4b9fb8d4c0"
  },
  {
    "url": "assets/5bb286bd/fonts/icomoon.woff",
    "revision": "7895fbbef59820b20db789750f2b7d4e"
  },
  {
    "url": "assets/5bb286bd/fonts/roboto-bold-webfont.woff",
    "revision": "095f49133d37b7bebdbf4f3df2ef8fcb"
  },
  {
    "url": "assets/5bb286bd/fonts/roboto-bold-webfont.woff2",
    "revision": "7ea6e62a828fd1bd37de06875f00a9ae"
  },
  {
    "url": "assets/5bb286bd/fonts/roboto-medium-webfont.woff",
    "revision": "0e541db3fbd9e8ddb148fc516a9cc399"
  },
  {
    "url": "assets/5bb286bd/fonts/roboto-medium-webfont.woff2",
    "revision": "ba7de93eee038366b8fdde4d43ae5ae8"
  },
  {
    "url": "assets/5bb286bd/images/star-filled.svg",
    "revision": "9306b6774bc45e34b05f08c906598ac0"
  },
  {
    "url": "assets/5bb286bd/images/star-half.svg",
    "revision": "ddb584d9ccfed159abcf6716bde26bf4"
  },
  {
    "url": "assets/e4a4eab5/fonts/icomoon.ttf",
    "revision": "9a25a6ec1f2cd714e9b923a4b9bcdcf5"
  },
  {
    "url": "assets/e4a4eab5/fonts/roboto-bold-webfont.woff2",
    "revision": "7ea6e62a828fd1bd37de06875f00a9ae"
  },
  {
    "url": "assets/e4a4eab5/fonts/roboto-medium-webfont.woff2",
    "revision": "ba7de93eee038366b8fdde4d43ae5ae8"
  },
  {
    "url": "assets/e4a4eab5/fonts/roboto-regular-webfont.woff2",
    "revision": "96807a5350e71045195b71a0370df7ca"
  },
  {
    "url": "assets/fe980a3b/fonts/icomoon.ttf",
    "revision": "854e64012fe6ad84bc091f4b9fb8d4c0"
  },
  {
    "url": "assets/fe980a3b/fonts/roboto-bold-webfont.woff2",
    "revision": "7ea6e62a828fd1bd37de06875f00a9ae"
  },
  {
    "url": "assets/fe980a3b/fonts/roboto-medium-webfont.woff2",
    "revision": "ba7de93eee038366b8fdde4d43ae5ae8"
  },
  {
    "url": "assets/fe980a3b/fonts/roboto-regular-webfont.woff2",
    "revision": "96807a5350e71045195b71a0370df7ca"
  },
  {
    "url": "assets/fonts/icomoon.eot",
    "revision": "e2870d9010568e359dccfc0b404fed31"
  },
  {
    "url": "assets/fonts/icomoon.svg",
    "revision": "c02aceaf0412a1840446a4e1d70f824d"
  },
  {
    "url": "assets/fonts/icomoon.ttf",
    "revision": "c6f3337e5007fcbe59541a02a1185ccd"
  },
  {
    "url": "assets/fonts/icomoon.woff",
    "revision": "462d64f6697978b85efd83988d4702c5"
  },
  {
    "url": "blog/index.html",
    "revision": "ef08de4233e13093aaa3eeccfc9bb123"
  },
  {
    "url": "data-preorder/Wuling-Baojun-310/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "data-preorder/Wuling-E100/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "data-preorder/Wuling-E200/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "data-slider/Wuling-Almaz-1/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "data-slider/Wuling-Almaz/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "data-slider/Wuling-Confero/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "data-slider/Wuling-Cortez/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "favicon.ico",
    "revision": "7435fbc6b911628983c1b53f7a28e23a"
  },
  {
    "url": "feed.xml",
    "revision": "35b4c85e02197f7f1e2cda8807118f91"
  },
  {
    "url": "fonts/roboto-regular_1-webfont.woff",
    "revision": "e30dd9ef439605993389ce4dd1ada542"
  },
  {
    "url": "fonts/roboto-regular-webfont.woff2",
    "revision": "96807a5350e71045195b71a0370df7ca"
  },
  {
    "url": "hubungi-kami/index.html",
    "revision": "0738b0467af50da773d66a4eb130b3b1"
  },
  {
    "url": "images/andre.jpg",
    "revision": "9204449a5a3cc78174146376abd5dbfc"
  },
  {
    "url": "images/browsur-agustus.jpg",
    "revision": "019a3b74109d0f7c9b7f38b643dcddeb"
  },
  {
    "url": "images/dealer-wuling-tulungagung.jpg",
    "revision": "7d08491cb8fc775f5d85cf0fc08d42fc"
  },
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "5dff0bf6fdc52590a9b30337196885c6"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "1e9b0dcf5c81e97cca3daabbe17772a9"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "bef43b47104967becefd1a240135a86d"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "b9738ca3d3bd5e50447d39c7ff91d66e"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "4c29cefe37a0b542e9a8aeb0cfcc1319"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "b6733f00253ddfb304b7c0ff4a61639d"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "4495b37cef3c54b2d03e02b718d6fce6"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "c831a704f4ab9bd6a6e9ea7f50c3ef0f"
  },
  {
    "url": "images/logo-wuling.svg",
    "revision": "877336d4349cddf9a56ddfaec56f456f"
  },
  {
    "url": "images/preorder-wuling-baojun-310-front-angle-low-view-698066.jpg",
    "revision": "8397c483a65e31b4149bee818529f90b"
  },
  {
    "url": "images/preorder-wuling-e100-20224.jpg",
    "revision": "770c22a2cc0ce4ec236d13ddcac99f81"
  },
  {
    "url": "images/preorder-wuling-e200-69861.jpg",
    "revision": "7ad397b56156de8487721b2d11dcf0ac"
  },
  {
    "url": "images/slider-0.jpg",
    "revision": "9eb41d70c2ed2277bc3cd279ce00d114"
  },
  {
    "url": "images/slider-1.jpg",
    "revision": "22fbe43100be7e46277f896944e01d6f"
  },
  {
    "url": "images/slider-2.jpg",
    "revision": "2ae1cac72ac1624653ea1c47d4b27eba"
  },
  {
    "url": "images/slider-4.jpg",
    "revision": "dc4d4fd199d33a396c82bfe4c7186d81"
  },
  {
    "url": "images/testimoni-harold.jpg",
    "revision": "49431c0364ccaf14169b5efdfdc3be3f"
  },
  {
    "url": "images/testimoni-maryani.jpg",
    "revision": "15460d6cf2135f471974ac902e733909"
  },
  {
    "url": "images/testimoni-petrik.jpg",
    "revision": "a5872115408a5b93fc17cf40177f4050"
  },
  {
    "url": "images/testimoni-rental-mobil-tulungagung.jpg",
    "revision": "fc4b8567111a96194f3255e5f9b4b9f5"
  },
  {
    "url": "images/testimoni-widodo.jpg",
    "revision": "03866225c01e03cc3f508e8b6a0a50f3"
  },
  {
    "url": "images/whatsapp.svg",
    "revision": "47c77bf133116ff76838809ae5d2c83a"
  },
  {
    "url": "images/wuling-almaz-1.jpg",
    "revision": "063d6971868dc32f839476af9c501c21"
  },
  {
    "url": "images/wuling-almaz-10.jpg",
    "revision": "2f6c60058cc1cb3d54c93b97a634cc6c"
  },
  {
    "url": "images/wuling-almaz-2.jpg",
    "revision": "d4bc60a594549887bacc381a798512eb"
  },
  {
    "url": "images/wuling-almaz-3.jpg",
    "revision": "2ed5e0c4584e7f3f064c7bc4b72c8267"
  },
  {
    "url": "images/wuling-almaz-4.jpg",
    "revision": "9cb0dffbf9b876d4551b7646ca5c23b1"
  },
  {
    "url": "images/wuling-almaz-5.jpg",
    "revision": "e402db01d95eb959906c297f92db83f4"
  },
  {
    "url": "images/wuling-almaz-6.jpg",
    "revision": "4ee7585f06818779f0efd117f79599cc"
  },
  {
    "url": "images/wuling-almaz-7.jpg",
    "revision": "1411ae1d5c9c658fb6ddeef5e422225f"
  },
  {
    "url": "images/wuling-almaz-8.jpg",
    "revision": "ed3887507151d7daeba3a8e20e375d68"
  },
  {
    "url": "images/wuling-almaz-9.jpg",
    "revision": "99fbc99b3610eccb42efddfdb8441fc8"
  },
  {
    "url": "images/wuling-confero-1.jpg",
    "revision": "b3d45e17c7b233c627f3ad9dfe24d47a"
  },
  {
    "url": "images/wuling-confero-10.jpg",
    "revision": "29c456464f6cac0a23e102a756bf3057"
  },
  {
    "url": "images/wuling-confero-2.jpg",
    "revision": "75a28e498a7c927126e7c351d70e7945"
  },
  {
    "url": "images/wuling-confero-3.jpg",
    "revision": "d582bb25f2ead125919a91d2c8ae0cb0"
  },
  {
    "url": "images/wuling-confero-4.jpg",
    "revision": "e0c4a66922fdc62ee7c577f94b26b094"
  },
  {
    "url": "images/wuling-confero-5.jpg",
    "revision": "2fa9896bbb9991ad3a988cb566ec7e19"
  },
  {
    "url": "images/wuling-confero-6.jpg",
    "revision": "27bd4a7d27e8fa7006fc2518c6acc932"
  },
  {
    "url": "images/wuling-confero-7.jpg",
    "revision": "332072581b261b7fde84c97de0a282fb"
  },
  {
    "url": "images/wuling-confero-8.jpg",
    "revision": "f0fe8f597175273ac8c75df01de46ad7"
  },
  {
    "url": "images/wuling-confero-9.jpg",
    "revision": "e4dbb6a5f1eeb1e76a1d285cee4bbcb5"
  },
  {
    "url": "images/wuling-cortez-1.jpg",
    "revision": "0c919029ad4bb2496fdd2203d43aee0e"
  },
  {
    "url": "images/wuling-cortez-10.jpg",
    "revision": "64102c7e041a2619cd768d0ad64b486a"
  },
  {
    "url": "images/wuling-cortez-2.jpg",
    "revision": "ff574a7a5c31d6bcc6e7276f70af7bf9"
  },
  {
    "url": "images/wuling-cortez-3.jpg",
    "revision": "c1f77b1a88a331be855f7c242d1f6c0e"
  },
  {
    "url": "images/wuling-cortez-4.jpg",
    "revision": "ea22fde2d90dec84e6356d070cd5fe11"
  },
  {
    "url": "images/wuling-cortez-5.jpg",
    "revision": "6701bad5e748e4578c5aed43ddacaea1"
  },
  {
    "url": "images/wuling-cortez-6.jpg",
    "revision": "2eb6b6b1a23af414a911e75cc2cffc2f"
  },
  {
    "url": "images/wuling-cortez-7.jpg",
    "revision": "c69b0f65ac4d483d801b7a1393f515d5"
  },
  {
    "url": "images/wuling-cortez-8.jpg",
    "revision": "1f1813f91562d4768a24e4fbc04446c7"
  },
  {
    "url": "images/wuling-cortez-9.jpg",
    "revision": "f30ac05758d733be3cf6067ba9203f49"
  },
  {
    "url": "images/wuling-formo-1.jpg",
    "revision": "e201a44dd1aaf765b65ceda46b56ae58"
  },
  {
    "url": "images/wuling-formo-10.jpg",
    "revision": "09f8c95021160876b88e8cd224903019"
  },
  {
    "url": "images/wuling-formo-2.jpg",
    "revision": "0e827afc936191661fa3303a86cac674"
  },
  {
    "url": "images/wuling-formo-3.jpg",
    "revision": "c78b8465b7b3e7169afaa24e8bee5776"
  },
  {
    "url": "images/wuling-formo-4.jpg",
    "revision": "4d0d6e520e2a6bd4ea6ab5ab9090ba16"
  },
  {
    "url": "images/wuling-formo-5.jpg",
    "revision": "09f8c95021160876b88e8cd224903019"
  },
  {
    "url": "images/wuling-formo-6.jpg",
    "revision": "187e145417b7968daf41ae90220a3613"
  },
  {
    "url": "images/wuling-formo-7.jpg",
    "revision": "65fac3cfb64a2f133d763e4e149e0426"
  },
  {
    "url": "images/wuling-formo-8.jpg",
    "revision": "fc2222ece0ae20a16280b353e8df7a43"
  },
  {
    "url": "images/wuling-formo-9.jpg",
    "revision": "8cb086c6f090ca1cbdefcaf644399938"
  },
  {
    "url": "index.html",
    "revision": "04e7b6f29344e8b6643dc4994589b7e9"
  },
  {
    "url": "kebijakan-privasi/index.html",
    "revision": "0c36b91a33e6d78ec668cff9f07a48a9"
  },
  {
    "url": "manifest.json",
    "revision": "3c96789c8e75744dd011c045b7335496"
  },
  {
    "url": "produk/index.html",
    "revision": "faf63bcb11adaeb2d9ec5682cf2539f7"
  },
  {
    "url": "produk/wuling-almaz/index.html",
    "revision": "b5c9c62d290a104a7f7c17b7d700d990"
  },
  {
    "url": "produk/wuling-confero/index.html",
    "revision": "fd112eb030410cdb3d77f583babb48ce"
  },
  {
    "url": "produk/wuling-cortez/index.html",
    "revision": "3aaa7f0d46da9f7ebcd8fad94420a5db"
  },
  {
    "url": "produk/wuling-formo/index.html",
    "revision": "dcdd7419f31e98911f35a4fe55c4fd7c"
  },
  {
    "url": "robots.txt",
    "revision": "ce5871ca287a22456c71f79c3aea5d4d"
  },
  {
    "url": "sw.html",
    "revision": "9ddb3c30045037e3f8d7c4c5810a4386"
  },
  {
    "url": "syarat-dan-ketentuan/index.html",
    "revision": "0571baef754b3b0bbaa8325e30de6a70"
  },
  {
    "url": "tentang-kami/index.html",
    "revision": "fcfb7457d2aeb06b349a3c0a18b0508b"
  },
  {
    "url": "testimoni/cocok-untuk-usaha-rental-mobil-tulungagung/index.html",
    "revision": "9229d12348e779b1aa356b17cebbf488"
  },
  {
    "url": "testimoni/impresi-kendaraannya-sangat-nyaman/index.html",
    "revision": "8b91da710473edc07508ab4cf23a8cdb"
  },
  {
    "url": "testimoni/index.html",
    "revision": "76c703a91e5c202b0e484f40a42656d1"
  },
  {
    "url": "testimoni/kami-memilih-wuling-confero-untuk-menunjang-usaha-saya/index.html",
    "revision": "7a40c0e5f49811343bd61f6130420147"
  },
  {
    "url": "testimoni/membelikan-mobil-dari-luar-negeri-lewat-internet/index.html",
    "revision": "e18b59e4bdbaccbe91b5dc713eb23d54"
  },
  {
    "url": "testimoni/suka-pelayanan-yang-ramah-seperti-mas-andre/index.html",
    "revision": "d587dd47ae59c97ae06cbaf3872979d3"
  },
  {
    "url": "workbox-config.js",
    "revision": "31a27dffbe8b006da7b7354a24f0a152"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
