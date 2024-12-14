// using terminal "node scripts/convertToWebp.js"

import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url); // 현재 파일의 경로
const __dirname = path.dirname(__filename);       // 현재 파일이 위치한 디렉토리

const inputPath = path.resolve(__dirname, '../public/GraphicModel/textures/*.png');
const outputPath = path.resolve(__dirname, '../public/GraphicModel/textures');

// PNG 이미지를 WebP로 변환
(async () => {
  try {
    console.log('Input Path:', inputPath);
    console.log('Output Path:', outputPath);

    const files = await imagemin([inputPath], {
      destination: outputPath,
      plugins: [
        imageminWebp({
          quality: 50, // WebP 품질 (0-100)
        }),
      ],
    });

    console.log('WebP 변환 완료. 결과 파일 목록:');
    files.forEach(file => console.log(file.destinationPath));
  } catch (err) {
    console.error('WebP 변환 중 오류 발생:', err);
  }
})();
