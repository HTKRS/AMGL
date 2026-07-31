# AMGL 홈페이지 관리 가이드

이 문서는 **코딩을 몰라도** 홈페이지를 관리할 수 있도록 만든 안내서입니다.
논문, 멤버, 뉴스, 연구 분야, 연락처 등 사이트의 모든 내용은
`_data` 폴더 안의 5개 파일에만 들어 있습니다. **디자인 파일은 건드릴 필요가 없습니다.**

| 파일 | 내용 |
|---|---|
| `_data/news.yml` | 뉴스 (논문 게재, 새 멤버, 수상 소식 등) |
| `_data/publications.yml` | 논문 목록 |
| `_data/members.yml` | 교수님·멤버·졸업생 |
| `_data/research.yml` | 연구 분야 카드 |
| `_data/settings.yml` | 소개문, 모집 안내, 연락처, 주소 |

수정 방법은 아래 3가지 중 편한 것을 쓰면 됩니다.

---

## 방법 1 — 웹 관리자 화면 (추천, 제일 쉬움)

[Pages CMS](https://app.pagescms.org) 라는 무료 서비스를 이용합니다.
로그인하면 뉴스/논문/멤버를 **입력 폼**으로 편집할 수 있고, 저장을 누르면
1~2분 뒤 홈페이지에 자동 반영됩니다.

**최초 1회 설정 (관리자만)**
1. https://app.pagescms.org 접속 → **Sign in with GitHub**
2. 연구실 GitHub 계정으로 로그인하고, 홈페이지 저장소를 선택
3. 끝. 이후에는 로그인만 하면 편집 화면이 나옵니다.

**학부생 추가하기**
1. 학부생이 GitHub 계정을 만든다 (무료)
2. GitHub 저장소 → Settings → Collaborators → **Add people** 로 초대
3. 학부생은 app.pagescms.org 에서 GitHub 로그인만 하면 편집 가능

**자주 하는 일**
- 논문 추가: Publications → **Add Entry** → 제목/저자/저널/연도/DOI 입력 → Save
- 뉴스 추가: News → **Add Entry** → 날짜/내용 입력 → Save
- 멤버 사진: Members 편집 화면에서 사진 업로드 후 파일명 입력
  (또는 `assets/img/members/` 폴더에 사진을 올리고 `photo:` 에 파일명 기입)

---

## 방법 2 — GitHub 웹사이트에서 직접 수정

1. GitHub 저장소 접속 → `_data` 폴더 → 고치고 싶은 파일 클릭
2. 오른쪽 위 **연필 아이콘(Edit)** 클릭
3. 내용 수정 (기존 항목을 복사-붙여넣기 해서 고치면 실수가 없습니다)
4. **Commit changes** 버튼 클릭 → 1~2분 뒤 자동 반영

예) 논문 추가 — `_data/publications.yml` 맨 위에 아래 형식으로 추가:

```yaml
- title: "논문 제목"
  authors: "저자1, 저자2, Jong-Min Lee"
  journal: Nanoscale
  info: "12(3), 100–110"
  year: 2026
  doi: 10.1039/XXXXXX
  tag: Q1
  type: journal
  selected: true      # 홈 화면에도 보여주려면 true
```

주의: **들여쓰기(공백 2칸)** 를 기존 항목과 똑같이 맞춰 주세요.

---

## 방법 3 — Claude에게 부탁하기

Claude(claude.ai / Claude 앱)에게 이렇게 말하면 됩니다.

> "연구실 홈페이지에 논문 하나 추가해줘. 제목은 ○○○, Nanoscale 게재, DOI는 ○○○"

> "홈페이지 멤버에 신입생 ○○○ 추가해줘. 석사과정, 이메일은 ○○○"

Claude가 저장소에 접속할 수 있도록 GitHub 저장소 주소를 알려주면
파일 수정까지 해 줍니다.

---

## 자주 묻는 것

**Q. 저장했는데 사이트에 안 보여요.**
1~2분 걸립니다. 그래도 안 보이면 GitHub 저장소의 **Actions** 탭에서
빌드가 실패했는지 확인하세요. 대부분 YAML 들여쓰기 문제입니다.

**Q. 실수로 뭔가 망가뜨렸어요.**
괜찮습니다. GitHub 저장소 → 해당 파일 → **History** 에서 이전 버전을
볼 수 있고, Claude에게 "홈페이지 저장소 어제 상태로 되돌려줘" 라고
부탁해도 됩니다. 모든 수정 이력이 남아 있어서 절대 유실되지 않습니다.

**Q. 홈 배경을 연구실/학교 사진으로 바꾸고 싶어요.**
사진을 `assets/img/hero.jpg` 로 올리고, `_data/settings.yml` 의
`hero_image:` 를 `assets/img/hero.jpg` 로 바꾸면 됩니다.

**Q. 다크 모드는 뭔가요?**
방문자가 상단 오른쪽 달/해 버튼으로 직접 전환하는 기능입니다.
따로 관리할 것이 없습니다.
