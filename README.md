# AMGL — Advanced Manufacturing nano-Geometry Lab

한림대학교 AMGL 연구실 공식 홈페이지 소스입니다.
Jekyll 기반 정적 사이트로, **GitHub Pages** 에서 무료로 호스팅됩니다.

- 콘텐츠 관리 방법: **[MANAGE.md](MANAGE.md)** 참고 (코딩 지식 불필요)
- 디자인/구조 수정: `_layouts`, `_includes`, `assets/css/style.css`

## 구조

```
_data/            ← 모든 콘텐츠 (논문·멤버·뉴스·연구분야·설정)
_layouts/         ← 페이지 공통 레이아웃
_includes/        ← 헤더, 푸터, 아이콘
assets/           ← CSS, JS, 폰트(자체 호스팅), 이미지
index.html        ← 홈
research.html     ← 연구 분야
members.html      ← 멤버
publications.html ← 논문
contact.html      ← 연락처
.pages.yml        ← Pages CMS(웹 관리자) 설정
```

## 배포 (GitHub Pages)

1. 이 폴더 전체를 GitHub 저장소에 업로드
2. 저장소 → Settings → Pages → Source: **Deploy from a branch**, Branch: `main` / root
3. 1~2분 후 `https://<계정이름>.github.io/<저장소이름>/` 에서 확인

저장소 이름이 `<계정이름>.github.io` 이면 `https://<계정이름>.github.io/` 가 주소가 됩니다.
그 외의 저장소 이름을 쓰면 `_config.yml` 의 `baseurl` 을 `/<저장소이름>` 으로 바꿔 주세요.

## 로컬 미리보기 (선택)

```bash
gem install jekyll
jekyll serve
# http://localhost:4000
```
