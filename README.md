# igsr5 daily web

[![CodeQL](https://github.com/hyesungoh/comet-land/actions/workflows/codeql.yml/badge.svg)](https://github.com/hyesungoh/comet-land/actions/workflows/codeql.yml) [![Continious Intergration](https://github.com/hyesungoh/comet-land/actions/workflows/CI.yml/badge.svg)](https://github.com/hyesungoh/comet-land/actions/workflows/CI.yml) [![codecov](https://codecov.io/gh/hyesungoh/comet-land/branch/main/graph/badge.svg?token=TA7LT3RQ1P)](https://codecov.io/gh/hyesungoh/comet-land) [![blog](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/simple/yiddyz&style=flat&logo=cypress)](https://dashboard.cypress.io/projects/yiddyz/runs) [![resume](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/simple/inc4yo&style=flat&logo=cypress)](https://dashboard.cypress.io/projects/inc4yo/runs)

powered by https://github.com/hyesungoh/comet-land

## How to start

`comet-land` has own generate package [`create-comet-land`](https://github.com/hyesungoh/create-comet-land)

```bash
npx create-comet-land
# or
yarn create comet-land
```

> Or using Fork or clone this repo

1. Install dependencies

```bash
yarn
```

2. Start Turbo !

```bash
yarn turbo run dev
# or just
yarn dev
```

4. Now you can see blog at `localhost:3000`, resume at `localhost:3001`

## How to configuration

Please see `packages/core/constants` directory.

and you can reconfigure at that directory's variable

- Analytics directory
  - GA ID
  - Hotjar ID
- Colors directory
  - color schema
- General directory
  - author image
  - default open-graph image
  - favicon
- SocialMedia directory
  - github
  - instagram
  - facebook
  - linkedin
  - twitter

and please check `apps/blog/_config/index.json` and `apps/resume/_config/index.json`.

This files are placing each app's configuration variable.

## How to use it

please read following link.

- [how to add blog post](https://github.com/hyesungoh/hyesungoh-land/tree/main/_docs/en-blog.md)
- [how to custom resume](https://github.com/hyesungoh/hyesungoh-land/tree/main/_docs/en-resume.md)

## How to deploy

#### [deploy with vercel (recommend)](https://github.com/hyesungoh/hyesungoh-land/tree/main/_docs/en-deploy-vercel.md)

#### [deploy with github pages](https://github.com/hyesungoh/hyesungoh-land/tree/main/_docs/en-deploy-github-pages.md)

## How to add more packages

- scope packages

```bash
cd where-you-want
yarn add package-name
```

- global packages

```bash
yarn add package-name -W
```

- global dev packages

```bash
yarn add package-name -DW
```

## Trouble shootings

check [this wiki](https://github.com/hyesungoh/comet-land/wiki/Trouble-Shooting) please! it might be help

## License

MIT
