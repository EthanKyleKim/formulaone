// 컬러 타입 정의
export interface ColorPalette {
  /**  주요 색상 (밝은 빨간색) */
  primary: string
  /**  보조 색상 (밝은 회색) */
  secondary: string
  backgroundColor: string
  /**  흰색 */
  white: string
  /**  회색 100 */
  gray100: string
  /**  회색 150 */
  gray150: string
  /**  회색 200 */
  gray200: string
  /**  회색 250 */
  gray250: string
  /**  회색 300 */
  gray300: string
  /**  회색 350 */
  gray350: string
  /**  회색 400 */
  gray400: string
  /**  회색 500 */
  gray500: string
  /**  회색 600 */
  gray600: string
  /**  회색 650 */
  gray650: string
  /**  회색 700 */
  gray700: string
  /**  회색 750 */
  gray750: string
  /**  회색 770 */
  gray770: string
  /**  회색 800 */
  gray800: string
  /**  회색 850 */
  gray850: string
  /**  회색 870 */
  gray870: string
  /**  회색 900 */
  gray900: string
  /**  검정색 */
  black: string
}

// 컬러 팔레트 객체 정의
export const Colors: ColorPalette = {
  primary: '#ff2222',
  secondary: '#2a2a2a',
  backgroundColor: '#1a1a1a',
  white: '#FFFFFF',
  gray100: '#FCFCFC',
  gray150: '#F5F5F5',
  gray200: '#EFEFEF',
  gray250: '#E8E8E8',
  gray300: '#DFDFDF',
  gray350: '#C8C8C8',
  gray400: '#B7B7B7',
  gray500: '#949494',
  gray600: '#777777',
  gray650: '#616161',
  gray700: '#555555',
  gray750: '#3F3F3F',
  gray770: '#383838',
  gray800: '#2A2A2A',
  gray850: '#1F1F1F',
  gray870: '#1A1A1A',
  gray900: '#111111',
  black: '#000000',
}
