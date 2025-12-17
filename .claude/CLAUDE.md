# Blog-LOL Project Rules

## Project Overview

- **Project Name**: blog-lol
- **Description**: 리그 오브 레전드 챔피언 공략 및 뉴스 블로그
- **Owner**: micael17

## Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | Astro 5.x |
| **UI Library** | React 19 |
| **Styling** | Tailwind CSS 4 |
| **Language** | TypeScript (strict) |
| **Runtime** | Bun (NOT Node.js) |
| **Deployment** | AWS Lightsail |

## Repository & Deployment

- **GitHub**: https://github.com/micael17/blog-lol.git
- **Production URL**: https://lolog.lol
- **Local Path**: /Users/jihongkim/Documents/workspace/blog-lol

## Lightsail Deployment

정적 사이트를 Lightsail 인스턴스에서 서빙 (Nginx 또는 정적 호스팅)

## Development Commands

```bash
# Development server
bun run dev

# Build for production
bun run build

# Preview production build
bun run preview
```

## Project Structure

```
blog-lol/
├── src/
│   ├── components/    # Astro & React components
│   ├── content/
│   │   ├── guide/     # 챔피언 공략 (Markdown/MDX)
│   │   └── news/      # 뉴스 (Markdown/MDX)
│   ├── layouts/       # Page layouts
│   ├── pages/
│   │   ├── guide/     # 공략 페이지
│   │   └── news/      # 뉴스 페이지
│   └── styles/        # Global CSS (Tailwind)
├── public/            # Static assets
├── astro.config.mjs   # Astro configuration
└── package.json
```

## Content Schema

### Guide (공략)

```typescript
{
  title: string;          // 공략 제목
  description: string;    // 짧은 설명
  champion: string;       // 챔피언 이름
  role: '탑' | '정글' | '미드' | '원딜' | '서폿';
  difficulty: '쉬움' | '보통' | '어려움';
  pubDate: Date;
  updatedDate?: Date;
  heroImage?: ImageMetadata;
}
```

### News (뉴스)

```typescript
{
  title: string;
  description: string;
  category: '패치노트' | '이벤트' | 'e스포츠' | '기타';
  pubDate: Date;
  heroImage?: ImageMetadata;
}
```

## 공략집 작성 양식

### 핵심 규칙: 3줄 요약

**모든 주요 섹션 끝에는 반드시 blockquote로 3줄 요약을 작성합니다.**

```markdown
## 섹션 제목

[내용...]

> **3줄 요약**
> 1. 첫 번째 핵심 포인트
> 2. 두 번째 핵심 포인트
> 3. 세 번째 핵심 포인트
```

### 공략 구조

1. **스킬 빌드** - 스킬 순서, 콤보
2. **아이템 빌드** - 코어/상황별 아이템
3. **룬 세팅** - 주/부 룬 설명
4. **라인전** - 레벨별 운영, 트레이드
5. **팀파이트** - 포지셔닝, 역할
6. **상대별 공략** - 카운터/유리 매치업

### 표 사용

데이터가 많은 섹션(아이템, 룬 등)은 표로 정리:

```markdown
| 아이템 | 설명 | 구매 시점 |
|--------|------|----------|
| 삼위일체 | 코어 1 | 1코어 |
```

## Design System

### 색상 (B&W 미니멀)

- Primary: Black (#111111)
- Background: White (#FFFFFF)
- Gray scale: 50~900 variants

### Typography

- Font: Pretendard (한글 최적화)
- Heading: 700 weight
- Body: 400 weight, line-height 1.75

## 이미지 관리 규칙

### 핵심 규칙: 로컬 저장 필수

**모든 이미지는 반드시 프로젝트 내부에 저장하여 사용합니다. 외부 URL 링크 사용 금지.**

```
public/images/champions/[챔피언영문소문자]/
├── splash.jpg      # 스플래시 아트
├── passive.png     # 패시브 아이콘
├── q.png           # Q 스킬 아이콘
├── w.png           # W 스킬 아이콘
├── e.png           # E 스킬 아이콘
└── r.png           # R 스킬 아이콘
```

### 이미지 소스 (다운로드용)

- **스플래시 아트**: `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/[ChampionName]_0.jpg`
- **스킬 아이콘**: 공식 LoL 뉴스 또는 Community Dragon에서 다운로드

### 마크다운에서 사용

```markdown
![스플래시](/images/champions/yunara/splash.jpg)
### ![Q](/images/champions/yunara/q.png) Q - 스킬명
```

### YouTube 영상

YouTube 임베드는 외부 링크 허용:
```html
<iframe src="https://www.youtube.com/embed/VIDEO_ID" ...></iframe>
```

## Coding Guidelines

### AI Development Preferences
- User prefers AI-assisted development
- Use React + Tailwind for best AI code generation quality
- Keep components simple and well-typed

### Style Conventions
- Use Tailwind CSS utility classes
- React components for interactive parts only (Astro Islands)
- TypeScript strict mode enabled

### Package Manager
- **Always use `bun`** instead of `npm`, `yarn`, or `pnpm`
- Install: `bun install` or `bun add <package>`
- Run scripts: `bun run <script>`

## Notes

- 배포: AWS Lightsail 인스턴스 사용
- 콘텐츠는 AI가 생성하고 사람이 검수하는 방식
