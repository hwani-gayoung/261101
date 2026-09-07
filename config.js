/**
 * Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: false,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "박환이",
    nameEn: "Groom",
    father: "박인수",
    mother: "김인숙",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "백가영",
    nameEn: "Bride",
    father: "백상열",
    mother: "김흥자",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-11-01",
    time: "13:00",
    venue: "BMK 웨딩홀",
    hall: "아스틴홀 4층",
    address: "대전광역시 중구 서문로 133 (문화동 311-2)",
    tel: "042-334-1000",
    mapLinks: {
      kakao: "https://kko.to/C5G9cKm19c",
      naver: "https://naver.me/58NdrkXq"
    }
  },

  // ── 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content: "자연스럽게 서로의 일상이 된 두 사람이\n이제 평생의 동반자가 되려 합니다.\n\n저희의 새로운 시작을\n귀한 시간 내어 함께해주세요."
  },

  // ── 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "상해에서부터 10년 동안 만나던 두 사람이\n평생을 함께하기로 했습니다."
  },

  // ── 오시는 길 ──
  // (mapLinks는 wedding 객체 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "박환이", bank: "국민은행", number: "000-000-000000" },
      { role: "아버지", name: "박인수", bank: "신한은행", number: "000-000-000000" },
      { role: "어머니", name: "김인숙", bank: "우리은행", number: "000-000-000000" }
    ],
    bride: [
      { role: "신부", name: "백가영", bank: "하나은행", number: "000-000-000000" },
      { role: "아버지 · 어머니", name: "김흥자", bank: "기업은행", number: "000-000-000000" },
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "박환이 ♥ 백가영",
    description: "2026년 11월 1일, 소중한 분들을 초대합니다."
  }
};
