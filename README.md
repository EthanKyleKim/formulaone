# F1 Info Readme

<img src="https://github.com/user-attachments/assets/5bee3e52-df1d-4175-aec1-818242416038" alt="favicon" width="200" height="200">

F1 INFO is an unofficial project and is not associated in any way with the Formula 1 companies. F1, FORMULAONE, FORMULA 1, FIA FORMULA ONE WORLD CHAMPIONSHIP, GRAND PRIX and related marks are trademarks of Formula One Licensing B.V.


포뮬러 원 드라이버, 경기 및 세션에 대한 상세한 순위와 정보를 제공하기 위해 만들어졌습니다.

### [![Formula One Info](https://img.shields.io/badge/Formula%20One%20Info-Online-000000?style=for-the-badge&logo=vercel)](https://formulaoneinfo.vercel.app/)


# 🛠️ 기술 스택
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![Zustand](https://img.shields.io/badge/Zustand-7752FF?style=for-the-badge&logo=zustand&logoColor=white)
![React Query](https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white)
![Styled-components](https://img.shields.io/badge/Styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![Storybook](https://img.shields.io/badge/Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=three.js&logoColor=white)


# 프로젝트 개요 
Next.js, Zustand, React Query, Three.js 를 경험해보고 Atomic Design Pattern 과 Design System을 더욱 좋은 방법으로 만들기 위해 고민하여 시작한 프로젝트 입니다.

### 🌟 Atomic Design System 적용
- 이 프로젝트는 Atomic Design Pattern을 기반으로 컴포넌트를 체계적으로 설계했습니다. 
컴포넌트를 Atoms, Molecules, Organisms, Templates, Pages로 분리하여 재사용성과 유지보수성을 극대화하였으며, 디자인 시스템을 구축하여 일관된 사용자 경험을 제공합니다.
또한 Storybook을 사용하여 UI 컴포넌트를 문서화하고 독립적으로 테스트할 수 있도록 구성하고 있습니다.

### 🚗 Three.js를 활용한 3D 렌더링

- Three.js를 활용하여 Home 화면에 Ayrton Senna가 실제 탑승하여 주행했던 역사적인 Mclaren mp4/4 레이스 카를 렌더링 했습니다.
- 하드웨어의 메모리 사용량과 렌더링 속도를 최적화하기 위해 KTX2 텍스처 포맷 적용하여 기존 PNG와 GLTF 파일을 KTX2 텍스처로 변환하고 GLB 파일 형식으로 수정하여 6배 정도 용량 감소와 렌더링 속도 8초 에서 5초 이내로 감소 GPU 사용량은 1.9GB 에서 261MB 로 대폭 절약
- [velog - (GLTF를 GLB로 변환하는 작업 과정 feat. KTX2)](https://velog.io/@ethankyle/PNG%EB%A5%BC-WebP%EB%A1%9C-%EB%B3%80%ED%99%98%ED%95%98%EA%B3%A0-GLTF%EB%A5%BC-GLB%EB%A1%9C-%EB%B3%80%ED%99%98%ED%95%98%EB%8A%94-%EC%9E%91%EC%97%85-%EA%B3%BC%EC%A0%95-feat.-KTX2)

### 🚀 Skeleton Loading 기능
- 적용 컴포넌트: Meeting, Session, DriverProfile 같은 컨텐츠를 불러오는 경우 구현.
- 상태 관리: Skeleton Loading 상태는 React Query 및 Error Boundary를 통해 관리되어, 오류가 발생할 경우 오류 메세지와 재호출이 가능하도록 했습니다.
- [velog - React, NextJS 14, TanStackQuery 환경에서 ErrorBoundary 사용](https://velog.io/@ethankyle/React-NextJS-14-TanStackQuery-%ED%99%98%EA%B2%BD%EC%97%90%EC%84%9C-ErrorBoundary-%EC%82%AC%EC%9A%A9)


# 기술적 도전과 해결 방법
- [velog - F1 Info 작업 시리즈](https://velog.io/@ethankyle/series/F1-Info)


