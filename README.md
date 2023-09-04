# Nuxt3-monorepo-example

> Nuxt3앱과 공통 UI, utils를 모듈화한 단일 저장소 아키텍처 샘플

![](../header.png)

## 설치 방법

```sh
pnpm i
```

## pnpm workspaces

### Root 패키지 관리

-w(--workspace-root)옵션을 넣어준다.

```
pnpm add -w -D eslint
pnpm remove -w lodash-es
```

### workspace에 다른 workspace 모듈 설치

```
pnpm i [모듈 이름] --filter [설치할 모듈 이름]
ex) pnpm i ui --filter site-pc
```

### 앱 스크립트 실행

전체 실행

```
pnpm -r dev
```

프로젝트별 실행

```
pnpm --filter [모듈 이름] dev
pnpm --filter site-pc dev
```
