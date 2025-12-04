# demoone

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd) 
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Playwright](https://playwright.dev)

```sh
# Install browsers for the first run
npx playwright install

# When testing on CI, must build the project first
npm run build

# Runs the end-to-end tests
npm run test:e2e
# Runs the tests only on Chromium
npm run test:e2e -- --project=chromium
# Runs the tests of a specific file
npm run test:e2e -- tests/example.spec.ts
# Runs the tests in debug mode
npm run test:e2e -- --debug
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

# 路由
router
  index.ts                   // 路由管理主页
  

# 项目页面结构
views
  login
    index.vue                // 登录页
    serviceAgree.vue         // 服务协议
    privacyPolicy.vue        // 隐私政策
  task
    index.vue                // 任务主页
    search.vue               // 任务搜索
    details.vue              // 任务详情
    companySource.vue        // 公司任务主页
  contract
    index.vue                // 合约主页
    details.vue              // 合约详情
    progress.vue             // 合约进度
  message
    index.vue                // 消息主页
    systemList.vue           // 系统消息列表
    systemDetails.vue        // 系统消息详情
    talk.vue                 // 对话消息
  personal
    index.vue                // 我的主页
    user                     // 用户中心
      index.vue              // 个人信息主页
      authReal.vue           // 实名认证
      certified.vue          // 已完成实名认证
      identitySwitch.vue     // 切换身份
    setting                  // 我的设置
      index.vue              // 设置主页
    feedback                 // 意见反馈
      index.vue              // 反馈主页
    account                  // 我的账户
      index.vue              // 账户主页
      advance.vue            // 账户提现
      coinExplain.vue        // 无忧比说明
      depositExplain.vue     // 押金说明
    resume                   // 我的简历
      index.vue              // 简历主页
      preview.vue            // 简历预览
    collect                  // 我的收藏
      index.vue              // 收藏主页
  talent
    index.vue                // 人才主页
    details.vue              // 人才详情