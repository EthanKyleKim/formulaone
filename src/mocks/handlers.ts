// import { http, HttpResponse } from 'msw';

export const handlers = [
  // http.get('https://api.openf1.org/v1/meetings', (req) => {
  //   const year = req.url.searchParams.get('year');
  //   const meetings = [
  //     {
  //       circuit_key: 'circuit1',
  //       circuit_short_name: 'Circuit 1',
  //       country_code: 'US',
  //       country_key: 'usa',
  //       country_name: 'United States',
  //       date_start: '2024-03-10',
  //       gmt_offset: '-5',
  //       location: 'Austin',
  //       meeting_key: '1',
  //       meeting_name: 'Grand Prix 1',
  //       meeting_official_name: 'United States Grand Prix',
  //       year: 2024,
  //     },
  //     {
  //       circuit_key: 'circuit2',
  //       circuit_short_name: 'Circuit 2',
  //       country_code: 'UK',
  //       country_key: 'uk',
  //       country_name: 'United Kingdom',
  //       date_start: '2024-05-10',
  //       gmt_offset: '0',
  //       location: 'Silverstone',
  //       meeting_key: '2',
  //       meeting_name: 'Grand Prix 2',
  //       meeting_official_name: 'British Grand Prix',
  //       year: 2024,
  //     },
  //   ];

  //   // 필터링: 요청된 연도에 해당하는 회의만 반환
  //   const filteredMeetings = meetings.filter((m) => m.year === Number(year));
  //   return HttpResponse.json(filteredMeetings.reverse());
  // }),
];
