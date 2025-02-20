/**
 * @file 共通項目を管理するstore
 */

// ----------------------------------------------------------------------------------------------------
// Import

import { GetterTree, ActionTree, MutationTree } from 'vuex';


// ----------------------------------------------------------------------------------------------------
// Interface

/**
 * ランダムワードの形式
 *
 * @interface
 */
interface RandomWord {
	/** タイトル */
	title: string,
	/** 出典 */
	original: string,
	/** 概要 */
	summary: string,
	/** タグ */
	tags: string[],
}

/**
 * XorShift 128bit Seed Number
 *
 * @interface
 */
interface XorShiftSeed128 {
	x: number,
	y: number,
	z: number,
	w: number,
}

export function state() {
	const nowTime = new Date();
	return {
		menus: {},
		randomWords: [] as RandomWord[],
		XorSeed: {
			x: Math.max(Math.floor(nowTime.getDate() ** ((nowTime.getMonth() + 1) / 4 + 2)), (nowTime.getMonth() + 1) * nowTime.getDate() * Math.max(nowTime.getSeconds() ** 2, 31) * Math.max(nowTime.getMinutes() ** 2, 53)),
			y: Math.max(Math.max(nowTime.getSeconds(), 5) ** Math.floor(Math.max(nowTime.getMinutes(), 10) / 10) + Math.max(nowTime.getSeconds(), 1) * Math.max(nowTime.getMinutes(), 1) * Math.floor(nowTime.getFullYear() / 10)),
			z: 0,
			w: Math.floor(Date.now() / 1000),
		} as XorShiftSeed128,
	};
}

export type RootState = ReturnType<typeof state>;

export const mutations: MutationTree<RootState> = {
	/**
	 * メニューリストセット
	 *
	 * @param   {RootState} state   storeの中身
	 * @param   {Object}    payload 送られてきた中身
	 * @returns {void}
	 */
	setLists(state: RootState, payload: object): void {
		state.menus = payload;
	},

	/**
	 * ランダムワードリストセット
	 *
	 * @param   {RootState}     state   storeの中身
	 * @param   {RandomWord[]}  payload 送られてきた中身
	 * @returns {void}
	 */
	setRandomWords(state: RootState, payload: RandomWord[]): void {
		state.randomWords = payload;
	},

	/**
	 * 乱数を回す
	 *
	 * @param   {RootState} state   storeの中身
	 * @returns {void}
	 */
	randomInt32(state: RootState): void {
		const t = state.XorSeed.x ^ state.XorSeed.x << 11;
		state.XorSeed.x = state.XorSeed.y;
		state.XorSeed.y = state.XorSeed.z;
		state.XorSeed.z = state.XorSeed.w;
		state.XorSeed.w = state.XorSeed.w ^ state.XorSeed.w >>> 19 ^ (t ^ t >>> 8);

		// console.log('Number: ' + this.seed.w);
		// return state.XorSeed.w;
	},
};

export const actions: ActionTree<RootState, RootState> = {
};

export const getters: GetterTree<RootState, RootState> = {
	/**
	 * XorShiftの乱数シードの取得
	 *
	 * @param   {RootState}         state   storeの中身
	 * @returns {XorShiftSeed128}           seed値
	 */
	getSeed(state: RootState): XorShiftSeed128 {
		return state.XorSeed;
	},
};
// export const actions = {
// 	async fetchItems(context) {
// 		await axios
// 			.get(process.env.baseUrl + '/json/manualList.json')
// 			.then((response) => {
// 				// console.log(response.data);
// 				context.commit('setItems', response.data);
// 			})
// 			.catch(function(error) {
// 				console.error(error);
// 			});
// 	}
// };
