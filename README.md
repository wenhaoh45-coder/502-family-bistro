# 502 家庭小馆

一个无需安装依赖即可运行的手机优先家庭点单与家务派单网页。

## 已实现

- 39 道菜的分类、搜索、价格、购物车与口味备注
- 点菜下单、家人接单、制作中、已完成
- 做菜、洗水果、扫地拖地、洗烘衣服、洗碗等家务派单
- 固定双成员身份：“我”和“老婆”
- Supabase 实时订单同步，同时保留浏览器本地副本
- 订单分享与家庭积分
- PWA 离线缓存，可添加到手机主屏幕

## 本地打开

推荐用任意静态网站服务打开本目录。也可以直接双击 `index.html` 预览大部分功能。

## 菜品图片

网页会优先读取 `assets/dishes/<菜品 id>.webp`。图片不存在时会显示内置的彩色菜品占位画面，保证页面仍可完整使用。

## 夫妻实时同步

1. 新建一个 Supabase 项目。
2. 在 Authentication → Providers 中启用 Anonymous Sign-Ins。
3. 打开 SQL Editor，把 `supabase-setup.sql` 中的 `CHANGE-THIS-FAMILY-CODE` 改成你们自己的邀请码，再完整运行。
4. 在 Project Settings → API 中复制 Project URL 和 anon public key，填入 `cloud-config.js`。
5. 发布更新后，两台手机首次打开时分别选择“我”和“老婆”，输入相同邀请码即可。

网页使用匿名账号与数据库行级权限隔离家庭订单，邀请码不会写进网站代码。
