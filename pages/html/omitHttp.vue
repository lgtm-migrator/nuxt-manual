<template lang="pug">
div
	v-alert(type='error', border='left', colored-border, dense, elevation='5')
		h2(v-t="'common.stub.deprecated.title'")
		p(v-t="'common.stub.deprecated.desc'")

	section
		h2 説明
		p http://やhttps://といった混在した記述を解消する記述方法がある。

	section
		h2 使用方法と解説
		p このようなリンクがあるとする。
		pre.language-http.line-numbers: code.
			https://prismjs.com/

		p これを以下のように記述することができる。
		pre.language-http.line-numbers: code.
			//prismjs.com/

		p 詳細な内容は省略する。

	section
		h2 使用上の注意
		ul
			li このような記述方法は現在Googleでは推奨されていない。数年前までは推奨していたが現在はhttps://を推奨している。
			li ローカルファイルで開いた場合file://として認識するためこの方法を使用しないほうが良い。

	section
		h2 参考リンク
		a(href='https://prokatsu.com/http-not-omit/', target='_blank', rel='external noopener') 【2018年版】http,httpsは省略しない方がいい | プロカツ！
</template>

<script lang="ts">
import Vue from 'vue';
import { highlightAll } from 'prismjs';
import 'prismjs/components/prism-http';

export default Vue.extend({
	data() {
		return {
			header: {
				title: 'httpの省略',
			},
		};
	},
	head(): object {
		return {
			title: this.header.title,
		};
	},
	mounted() {
		highlightAll();
		// plugins.fileHighlight.highlight();
		this.updateHeader();
	},
	methods: {
		updateHeader() {
			// タイトルとして使いたい情報を渡す
			this.$nuxt.$emit('update-header', this.header.title);
		},
	},
});
</script>
