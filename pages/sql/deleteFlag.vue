<template lang="pug">
div
	v-alert(type='info', border='left', colored-border, dense, elevation='5')
		h2(v-t="'common.stub.work_in_progress.title'")
		p(v-t="'common.stub.work_in_progress.desc'")

	section
		h2 説明
		p データベースのデータを削除する時、古いデータを保持しておきたい時、役に立つのが削除フラグである。削除フラグを使用しない(データの削除)場合、そのデータを利用していたデータベースリンクが消失してしまうが、削除フラグを使用する場合、データは残っているのでリンクは保持することができる。

	section

	section
		h2 使用上の注意
		ul
			li 生成と削除を多く繰り返すデータベースの場合、この方法はあまり推奨されない。データベースに古いデータが残り続けるため、容量を圧迫するためである。
</template>

<script lang="ts">
import Vue from 'vue';
import { highlightAll } from 'prismjs';
import 'prismjs/components/prism-sql';

export default Vue.extend({
	data() {
		return {
			header: {
				title: '削除フラグ',
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
