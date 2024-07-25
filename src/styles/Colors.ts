// 컬러 타입 정의
export interface ColorPalette {
  primary: string
  secondary: string
  backgroundColor: string
  white: string
  gray100: string
  gray150: string
  gray200: string
  gray250: string
  gray300: string
  gray350: string
  gray400: string
  gray500: string
  gray600: string
  gray650: string
  gray700: string
  gray750: string
  gray770: string
  gray800: string
  gray850: string
  gray870: string
  gray900: string
  black: string
}

// 컬러 팔레트 객체 정의
export const Colors: ColorPalette = {
  primary: '#FF1E00', // 주요 색상 (밝은 빨간색)
  secondary: '#EFEFEF', // 보조 색상 (밝은 회색)
  backgroundColor: '#1a1a1a',
  white: '#FFFFFF', // 흰색
  gray100: '#FCFCFC', // 회색 100
  gray150: '#F5F5F5', // 회색 150
  gray200: '#EFEFEF', // 회색 200
  gray250: '#E8E8E8', // 회색 250
  gray300: '#DFDFDF', // 회색 300
  gray350: '#C8C8C8', // 회색 350
  gray400: '#B7B7B7', // 회색 400
  gray500: '#949494', // 회색 500
  gray600: '#777777', // 회색 600
  gray650: '#616161', // 회색 650
  gray700: '#555555', // 회색 700
  gray750: '#3F3F3F', // 회색 750
  gray770: '#383838', // 회색 770
  gray800: '#2A2A2A', // 회색 800
  gray850: '#1F1F1F', // 회색 850
  gray870: '#1A1A1A', // 회색 870
  gray900: '#111111', // 회색 900
  black: '#000000', // 검정색
}
