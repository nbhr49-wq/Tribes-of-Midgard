# TRIBES OF MIDGARD — 古の記録 V6

## 今回の修正版

V5で「文字が浮かび上がらない」場合に備えて、
文章の表示をCSSアニメーションだけに頼らず、JavaScriptで一行ずつ
`.visible` クラスを追加する方式に変更しています。

## 流れ

1. `scene-01.png` を表示
2. 「石板に触れる」の位置をクリック
3. 暗転
4. `scene-02.png` を「別の2枚目」として表示
5. 約0.7秒後から文章を一行ずつ表示
6. 「そして――」の後に「記録映像を見る」を表示
7. ボタンをクリック
8. 暗転
9. YouTube動画を表示・再生要求

## 表示文章

ここに英雄の名前を記す

taro senpen しかご ダイブさん

我々はミッドガルドへ向かった。
世界樹を守るため。
巨人を討つため。
そして――

## ファイル

- index.html
- style.css
- scene-01.png
- scene-02.png
- README.md

## GitHub Pages

リポジトリのルートに5ファイルを配置して、
Settings → Pages → Deploy from a branch → main / root
を選択してください。
