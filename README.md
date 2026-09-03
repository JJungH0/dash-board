# 🚀 Next.js App Router Course – Dashboard

Next.js 공식 튜토리얼(Learn Next.js)을 따라가며 학습한 **대시보드 애플리케이션** 프로젝트입니다.
App Router 기반의 레이아웃·라우팅·데이터 페칭 등 핵심 개념을 챕터별로 정리하고, 학습 노트와 공식 문서 링크를 함께 기록합니다.

---

## 🛠 기술 스택

| 분류 | 사용 기술 |
| :---: | :--- |
| Framework | Next.js (App Router), React |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Database | PostgreSQL |
| Package Manager | pnpm |

---

## 📚 챕터별 학습 내용

| 챕터 | 주제 및 학습 내용 | 📖 내 학습 정리 | 🔗 공식 문서 |
| :---: | :--- | :---: | :---: |
| **Chap 4** | **레이아웃 및 페이지 생성**<br>- 중첩 라우팅(Nested Routing)<br>- `layout.tsx`, `page.tsx` 구성 | 정리 노션 보기 | 튜토리얼 |
| **Chap 5** | **페이지 간 이동 (Navigation)**<br>- `<Link>` 컴포넌트를 이용한 클라이언트 사이드 내비게이션<br>- `usePathname()` 훅을 활용한 활성 링크 스타일링 | 정리 노션 보기 | 튜토리얼 |
| **Chap 6** | **데이터베이스 설정**<br>- PostgreSQL 데이터베이스 연동<br>- 시드(Seed) 데이터 추가 | 정리 노션 보기 | 튜토리얼 |

> 이후 챕터(데이터 페칭, 스트리밍, 검색·페이지네이션, 인증 등)는 학습을 진행하며 순차적으로 추가할 예정입니다.

---

## 📂 프로젝트 구조

```
app/
├── layout.tsx          # 루트 레이아웃
├── page.tsx            # 홈 페이지
├── dashboard/          # 대시보드 라우트 (중첩 레이아웃)
│   ├── layout.tsx
│   ├── page.tsx
│   ├── customers/
│   └── invoices/
├── lib/                # 데이터 로직, 타입, 유틸
└── ui/                 # UI 컴포넌트
```

---

## ▶️ 실행 방법

```bash
# 1. 패키지 설치
pnpm install

# 2. 환경 변수 설정 (.env.example 참고)
cp .env.example .env

# 3. 개발 서버 실행
pnpm dev
```

브라우저에서 http://localhost:3000으로 접속하면 확인할 수 있습니다.

---

## 🔗 참고 자료

- Next.js 공식 문서
- Learn Next.js – Dashboard App 튜토리얼