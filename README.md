## umi 框架搭建的个人博客系统

### 系统功能

- umi@3.x最新框架
- antd5.x 最新 UI
- eslint+pre-commit+commitizen 格式化提交， prettier 提交代码格式化
- react-query 状态管理解决方案即成
- 前端 mock
- etc...

### 提交规范

```
feat: 新功能
fix: bug 修复
docs: 仅修改文档
style: 修改格式（空格，格式化，省略分号等），对代码运行没有影响
refactor: 重构（既不是修 bug ，也不是加功能）
build: 构建流程、外部依赖变更，比如升级 npm 包、修改 webpack 配置等
perf: 性能优化
test: 测试相关
chore: 对构建过程或辅助工具和库（如文档生成）的更改
ci: ci 相关的更改
```

#### 列举几个常用的 log 参数

```
// 输出 log 的首行
git log --pretty=oneline

// 只输出首行的 commit 信息。不包含 hash 和 合并信息等
git log --pretty=format:%s

// 查找有关“更新菜单配置项”的提交
git log --grep="更新菜单配置项"

// 打印出 chenfangxu 的提交
git log --author=chenfangxu

// 红色的短 hash，黄色的 ref , 绿色的相对时间
git log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr)%Creset'
```
