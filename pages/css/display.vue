<template lang="pug">
div
	v-alert(type='info', border='left', colored-border, dense, elevation='5')
		h2(v-t="'common.stub.work_in_progress.title'")
		p(v-t="'common.stub.work_in_progress.desc'")

	section
		h2 display-outside
		p 記述前

		h2 display-inside
		p 記述前

		h2 display-listitem
		p 記述前

		h2 display-internal
		p 記述前

		h2 display-box
		p 記述前

		h2 display-legacy
		p 記述前

	section
		h2 参考リンク
		a(href='https://developer.mozilla.org/ja/docs/Web/CSS/display', target='_blank', rel='external noopener') MDN Web Docs
</template>

<script lang="ts">
import Vue from 'vue';
import { highlightAll } from 'prismjs';

export default Vue.extend({
	data() {
		return {
			header: {
				title: 'display',
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
