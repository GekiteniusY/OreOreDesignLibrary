
# What is this?
自作のコンポーネントをまとめています

## Atomic Designの考え方
「Atoms, Molecules, Organism」「Templates」「Pages」で関心事を分ける
関心事を分ける＝目的が異なる＝利用方法（シチュエーション）が異なる

※あとから方針帰る可能性高い
また、Atomic Designに基づいて作成したコンポーネントはUIライブラリとして使用する

- Atoms, Molecules, Organism
  1機能（API単位の操作）において、再利用性を高めるための分類
  UIコンポーネントの再利用のため
- Templates
  既存のメンタルモデルやUI構築のプラクティスに基づくレイアウト単位の分類
  レイアウトをイチから考えた結果、既存のメンタルモデルを無視したレイアウトを生み出してしまったり、UI構築の（特にレイアウトにおける）プラクティスの再発明を開発者に強いることにならないために使用する
  Ex, スマホアプリにおいてはサイドメニューは可能な限り避けるべきと言われている（レイアウトのアイデアが浮かばなかった結果として、エスケープハッチ：半ば強引ではあるが回避するために仕方のないもの的に使うべきだと言われている、、、はず。どこかで見た）
  
  メモ：
  Next.js（App Router）においてはある階層のディレクトリごとに、サブメニューの内容をレイアウトを保ったまま更新するときに使えそう
  →このリポジトリで言えば/nextjs, /atomic_design, /tailwindcssで使用している
  上位階層のLayout.jsで実現できなくもない

- Page
  実際のドメイン情報や複数の機能、そのサービスの発する具体的なメッセージを含む実用的なWebページ
  再利用されることはなく、Page単位で実際にデプロイされることが期待される
  同じURLパスでもABテストを行ったり、過去の状態を保存するなどで複数存在する可能性は許容する

### Atom
これ以上分割できない単位のコンポーネント

### Molecules
- Atomsに分割することは可能
- それ単体では1つの動作（API実行）が完了し得ない
- Moleculesどうしの依存は許容しない

### Organism
- 少なくとも1つ以上のAPI実行が可能
- 複数のAPI実行を行えても良い（複数Organismを組み合わせて1つのOrganismとすることを許容する）
- Organismどうしの依存を許容する

### templates
Atoms, Molecules, Organismを利用しない
ただのテンプレートに努める

### Page
そのサービスにおいて提供する機能またはメッセージにおける、Webページ単位の区切り
（コンポーネントとして管理はしない）


## レスポンシブの制御

### TailwindCSSのBreakpoint prefix
sm	640px
md	768px
lg	1024px
xl	1280px
2xl	1536px

### 下記の3パターンで制御をする



## 開発時に参考にした情報
#### TailwindCSS
CSSアニメーションをGUIで作成できる、TailwindCSS用のコード生成ができる
[Tailanimista](https://tail-animista.vercel.app/play/basic/scale-up/scale-up-center)

TailwindCSSのチートシート、一覧性があって検索しやすい
[Tailwind CHEAT SHEET](https://nerdcave.com/tailwind-cheat-sheet)




#### XMLエスケープ
[IBM XML エスケープ文字](https://www.ibm.com/docs/ja/was-liberty/base?topic=SSEQTP_liberty/com.ibm.websphere.wlp.doc/ae/rwlp_xml_escape.htm)
```
"	&quot;
'	&apos;
<	&lt;
>	&gt;
&	&amp;
```

[Common HTML entities used for typography](https://www.w3.org/wiki/Common_HTML_entities_used_for_typography)

[HTMLで特殊文字（<、>、&）を書くには](https://www.eonet.ne.jp/~usakuma/hptec/hp_tec/hptec_style_41.htm)




#### React
[React 公式](https://ja.react.dev/learn)