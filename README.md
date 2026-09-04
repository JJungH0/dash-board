# 🚀 Next.js App Router Course – Dashboard

Next.js 공식 튜토리얼(Learn Next.js)을 따라가며 학습한 **대시보드 애플리케이션** 프로젝트입니다.
App Router 기반의 레이아웃·라우팅·데이터 페칭 등 핵심 개념을 챕터별로 정리하고, 학습 노트와 공식 문서 링크를 함께 기록합니다.

🔗 **배포 링크:** [https://jjung-dashboard.vercel.app/](https://jjung-dashboard.vercel.app/)

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

|     챕터     | 주제 및 학습 내용                                                                                               |                                                   📖 내 학습 정리                                                    |                                       🔗 공식 문서                                        |
|:----------:|:---------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------------------------------------------------------:|:-------------------------------------------------------------------------------------:|
| **Chap 1** | **시작하기**<br>- Next.js 프로젝트 생성<br>- 개발 서버 실행                                                              |    -     | [튜토리얼](https://nextjs.org/learn/dashboard-app/getting-started) |
| **Chap 2** | **CSS 스타일링**<br>- Tailwind와 CSS 모듈<br>- `clsx` 조건부로 클래스 이름을 추가하는 방법                                      |    -     | [튜토리얼](https://nextjs.org/learn/dashboard-app/css-styling) |
| **Chap 3** | **글꼴 및 이미지 최적화**<br>- `next/font` 을 사용하여 사용자 지정 글꼴을 추가하는 방법<br>- `next/image`이미지 를 추가하는 방법               |    -     | [튜토리얼](https://nextjs.org/learn/dashboard-app/optimizing-fonts-images#why-optimize-fonts) |
| **Chap 4** | **레이아웃 및 페이지 생성**<br>- 중첩 라우팅(Nested Routing)<br>- `layout.tsx`, `page.tsx` 구성                           |    [정리 노션 보기](https://app.notion.com/p/Layouts-and-Pages-3d05c23e942f80b8a0ecf765451cc45d?source=copy_link)     | [튜토리얼](https://nextjs.org/learn/dashboard-app/creating-layouts-and-pages#root-layout) |
| **Chap 5** | **페이지 간 이동 (Navigation)**<br>- `<Link>` 컴포넌트를 이용한 클라이언트 사이드 내비게이션<br>- `usePathname()` 훅을 활용한 활성 링크 스타일링 | [정리 노션 보기](https://app.notion.com/p/Navigating-Between-Pages-3d05c23e942f80218b93d8a45d1b6779?source=copy_link) |        [튜토리얼](https://nextjs.org/learn/dashboard-app/navigating-between-pages)        |
| **Chap 6** | **데이터베이스 설정**<br>- PostgreSQL 데이터베이스 연동<br>- 시드(Seed) 데이터 추가                                             |                                                    -                                                     |                                         [튜토리얼](https://nextjs.org/learn/dashboard-app/setting-up-your-database)                                          |
| **Chap 7** | **데이터 가져오기**<br>- 데이터 접근 방식 (API, ORM, SQL)<br>- 네트워크 워터풀                                                |                                                    [정리 노션 보기](https://app.notion.com/p/Fetching-Data-3d05c23e942f8074b1b3fbf5f72ecd91)                                                     |                                         [튜토리얼](https://nextjs.org/learn/dashboard-app/fetching-data)                                          |
| **Chap 8** | **정적 렌더링 및 동적 렌더링**<br>- 정적 및 동적 개념 설명<br>- 대시보드를 동적으로 만드는 다양한 접근 방식                                     |                                                    [정리 노션 보기](https://app.notion.com/p/Static-And-Dynamic-Rendering-3d15c23e942f80188f7ec14484df9379?source=copy_link)                                                     |                                         [튜토리얼](https://nextjs.org/learn/dashboard-app/static-and-dynamic-rendering)                                          |
| **Chap 9** | **스트리밍**<br>- 스트리밍 개념 및 구현<br>- Next.js 라우트 그룹                                                           |                                                    [정리 노션 보기](https://app.notion.com/p/Streaming-3d15c23e942f8005bc58dfdc49c2638b?source=copy_link)                                                     |                                         [튜토리얼](https://nextjs.org/learn/dashboard-app/streaming)                                          |


---

## 📂 프로젝트 구조

```
app/
├── layout.tsx          # 루트 레이아웃
├── page.tsx            # 홈 페이지
├── dashboard/          # 대시보드 라우트 (중첩 레이아웃)
│   ├── customers/
│   ├── invoices/
│   ├── layout.tsx
│   └── page.tsx
├── lib/                # 데이터 로직, 타입, 유틸
└── ui/                 # UI 컴포넌트
```

---

## ▶️ 실행 방법

```bash
# 1. 패키지 설치
pnpm install

# 2. 환경 변수 설정 (.env 참고)
cp .env .env

# 3. 개발 서버 실행
pnpm dev || npm run dev
```

브라우저에서 http://localhost:3000으로 접속하면 확인할 수 있습니다.

---

## 🔗 참고 자료

- Next.js 공식 문서
- Learn Next.js – Dashboard App 튜토리얼
