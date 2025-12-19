# 챔피언 공략 작성 스킬

사용자가 '챔피언 공략', '캐릭터 공략', '챔피언 분석', '캐릭터 분석' 글을 요청하면 이 양식에 따라 작성합니다.

## Frontmatter 양식

```yaml
---
title: '[챔피언명] 완벽 가이드 - 스킬, 룬, 빌드, 카운터 총정리'
description: '2025 [챔피언명]의 스킬, 룬, 아이템 빌드, 콤보, 카운터까지 완벽 정리'
champion: '[챔피언명]'
role: '탑' | '정글' | '미드' | '원딜' | '서폿'
difficulty: '쉬움' | '보통' | '어려움'
pubDate: YYYY-MM-DD
updatedDate: YYYY-MM-DD
---
```

## 공략 구조

### 1. 도입부
- 스플래시 아트 이미지 (로컬 저장)
- 챔피언 소개 (1~2문단)
- YouTube 챔피언 집중탐구 영상 임베드 (있을 경우)
- `---` 구분선

### 2. 챔피언 개요
- **섹션 제목**: `## [챔피언명]은 어떤 챔피언인가?`
- 역할, 출시일, 포지션 등 기본 정보
- 표로 기본 스탯 정리
- 현재 메타 위치 (승률, 픽률, 밴률)
- 3줄 요약 **없음**

### 3. 스킬 상세 분석
- **섹션 제목**: `## 스킬 상세 분석`
- 각 스킬별 소제목: `### ![스킬아이콘](/images/champions/[챔피언]/[스킬].png) [단축키] - [스킬명]`
- **스킬 영상** (공식 abilities rundown 페이지에서 URL 가져오기)
- 스킬 효과, 수치, 활용 팁
- 3줄 요약 **없음** (개별 스킬에도 없음)

**스킬 영상 규칙:**

공식 LoL 챔피언 페이지에서 스킬 영상 URL을 가져옵니다.

**URL 패턴:**
```
https://lol.dyn.riotcdn.net/x/videos/champion-abilities/[챔피언ID]/ability_[챔피언ID]_[스킬키]1.mp4
```

- **챔피언ID**: 4자리 숫자 (예: 가렌 `0086`, 아리 `0103`)
- **스킬키**: `P1` (패시브), `Q1`, `W1`, `E1`, `R1`

**챔피언 ID 확인 방법:**
1. 공식 챔피언 페이지 접속: `https://www.leagueoflegends.com/ko-kr/champions/[챔피언영문소문자]/`
2. 브라우저 개발자 도구에서 video source 태그의 URL 확인
3. 또는 Data Dragon API에서 챔피언 key 값 확인

**스킬 영상 형식:**
```html
<video src="https://lol.dyn.riotcdn.net/x/videos/champion-abilities/[챔피언ID]/ability_[챔피언ID]_P1.mp4" width="100%" preload="metadata" controls></video>
```

**예시 (가렌):**
```html
<video src="https://lol.dyn.riotcdn.net/x/videos/champion-abilities/0086/ability_0086_P1.mp4" width="100%" preload="metadata" controls></video>
<video src="https://lol.dyn.riotcdn.net/x/videos/champion-abilities/0086/ability_0086_Q1.mp4" width="100%" preload="metadata" controls></video>
```

### 4. 스킬 콤보 가이드
- **섹션 제목**: `## 스킬 콤보 가이드`
- 기본 교전 콤보, 풀 콤보, 한타 콤보, 도주 콤보
- 형식: `**콤보명**` + `**스킬순서**` + 설명
- 3줄 요약 **없음**

### 5. 추천 룬 세팅
- **섹션 제목**: `## 추천 룬 세팅`
- **3줄 요약 포함** (섹션 시작 직후)
- 주 룬 표, 부 룬 표, 능력치 파편

### 6. 추천 아이템 빌드
- **섹션 제목**: `## 추천 아이템 빌드`
- **3줄 요약 포함** (섹션 시작 직후)
- 코어 빌드 표, 신발 선택 표, 상황별 아이템 표
- 최종 풀빌드

### 7. 스킬 순서
- **섹션 제목**: `## 스킬 순서`
- 우선순위 + 레벨별 스킬 표

### 8. 라인전 운영 가이드
- **섹션 제목**: `## 라인전 운영 가이드`
- **3줄 요약 포함** (섹션 시작 직후)
- 레벨 구간별 운영법

### 9. 한타 운영 가이드
- **섹션 제목**: `## 한타 운영 가이드`
- **3줄 요약 포함** (섹션 시작 직후)
- 역할, 진입 타이밍

### 10. 카운터 정보
- **섹션 제목**: `## 카운터 정보`
- **3줄 요약 포함** (섹션 시작 직후)
- 어려운 상대 표, 쉬운 상대 표, 상대법

### 11. 마무리
- **섹션 제목**: `## 마무리`
- 종합 평가 + 한 줄 요약 blockquote

## 3줄 요약 규칙

**포함하는 섹션:**
- 추천 룬 세팅
- 추천 아이템 빌드
- 라인전 운영 가이드
- 한타 운영 가이드
- 카운터 정보

**제외하는 섹션:**
- 챔피언 개요
- 스킬 상세 분석 (개별 스킬 포함)
- 스킬 콤보 가이드
- 스킬 순서
- 마무리

**3줄 요약 형식:**
```markdown
> **3줄 요약**
> 1. 첫 번째 핵심 포인트
> 2. 두 번째 핵심 포인트
> 3. 세 번째 핵심 포인트
```

## 이미지 관리 (로컬 저장 필수)

**외부 URL 사용 금지. 모든 이미지는 반드시 프로젝트 내부에 다운로드하여 사용합니다.**

### 이미지 저장 구조
```
public/images/champions/[챔피언영문소문자]/
├── splash.jpg      # 스플래시 아트
├── passive.png     # 패시브 아이콘
├── q.png           # Q 스킬 아이콘
├── w.png           # W 스킬 아이콘
├── e.png           # E 스킬 아이콘
└── r.png           # R 스킬 아이콘
```

### 이미지 다운로드 소스
- **스플래시 아트**: `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/[ChampionName]_0.jpg`
- **스킬 아이콘**: 공식 LoL 뉴스 페이지 또는 Community Dragon에서 다운로드

### 마크다운에서 사용
```markdown
![스플래시](/images/champions/[챔피언영문소문자]/splash.jpg)
### ![패시브](/images/champions/[챔피언영문소문자]/passive.png) 패시브 - [스킬명]
### ![Q](/images/champions/[챔피언영문소문자]/q.png) Q - [스킬명]
```

### YouTube 영상
YouTube 임베드는 외부 링크 허용:
```html
<iframe width="100%" height="400" src="https://www.youtube.com/embed/VIDEO_ID" ...></iframe>
```

## 표 스타일

데이터가 많은 섹션은 표로 정리:
```markdown
| 항목 | 내용 | 비고 |
|------|------|------|
| 값1 | 설명1 | 추가정보 |
```

## 파일 저장 위치

`src/content/guide/[챔피언영문소문자].md`
