# TypeScript + Remix 학습 로드맵

## ✅ 1단계: TypeScript 핵심 문법 익히기 (1~3일)
- 변수 타입 지정: `string`, `number`, `boolean`
- 인터페이스와 타입 선언: `interface`, `type`
- 함수 타입 지정: 인자, 반환값, 옵셔널 파라미터
- 유니언/인터섹션 타입
- 제네릭 (`<T>`)
- 타입 좁히기 (타입 가드)
- TSConfig 설정 이해

📚 참고 링크:
- https://typescript-kr.github.io
- https://www.typescriptlang.org/docs/handbook/2/basic-types.html

---

## ✅ 2단계: Remix 개념 익히기 (1~3일)
- `routes/` 기반 파일 라우팅
- `loader()`와 `useLoaderData()`를 통한 SSR 데이터 패칭
- `action()`과 `Form`을 통한 form 처리
- Outlet을 통한 레이아웃 구성
- ErrorBoundary, CatchBoundary 활용

📚 튜토리얼:
- https://remix.run/docs/en/stable/start/tutorial
- https://remix.run/docs/ko

---

## ✅ 3단계: 실습 프로젝트로 감 잡기 (3~7일)
- [x] 프로젝트 생성: `npx create-remix@latest`
- [x] 페이지 생성: `/feedback`, `/posts`
- [x] loader + action 조합
- [x] 서버 렌더링 리스트 처리
- [x] Form 제출 → 상태 반영
- [x] useFetcher 사용한 실시간 UX 구성

---

## ✅ 4단계: 실전 구조 및 리팩토링 (7일~)
- 공통 레이아웃 분리 (`app/root.tsx`)
- `utils/` 디렉토리로 응답 함수/타입 관리
- API 분리: `/routes/api/posts.ts`
- Type-safe form data 처리
- 세션 관리 (로그인/로그아웃)
- PlanetScale, SQLite 등 DB 연동

---

## 🎯 추천 실습 주제
- 미니 블로그 시스템 (글 목록 + 글 작성 + 글 보기)
- 투표 시스템 (loader로 현황 → action으로 투표)
- 채팅 메시지 입력 + useFetcher로 실시간 반영
