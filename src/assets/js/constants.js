const constants = {

}
constants.accountState = ['全部','正常', '已停用', '已过期']
constants.resourceUrl = 'https://jic.talkingdata.com/lbs/smartselect/business-management/'
constants.industryType = ['全部行业','餐饮', '房产酒店', '服装', '化妆品', '家居家装', '金融保险', '零售卖场', '母婴亲子', '汽车', '生活服务', '数码', '文化教育', '鞋帽箱包', '休闲娱乐', '运动健身', '珠宝配饰', '其它']
constants.accountSourceList = [{
	title: '全部账户',
	value: 'ALL',
}, {
	title: 'TalkingData',
	value: 'TalkingData',
}, {
	title: '腾讯云',
	value: '腾讯云',
}, {
	title: '京东云',
	value: '京东云',
}, {
	title: 'WifiPix',
	value: 'WifiPix',
}, {
	title: '聪充网络',
	value: '聪充网络',
}]
constants.roles = {
	ROLE_ADMIN:{
		mark:1,
		role:'管理员',
		username:'admin',
		// showLable:['td','tencent','jd'],
		homePage: 'general-info',
		// sourceList:['TalkingData','腾讯云','京东云'],
		selectUserSource:true,
	},
}
constants.intentionBuildState = {
	SUCCESS:'构建成功',
	BUILDING: '构建中',
	ERROR: '构建失败',
}
constants.intentionType = {
	1: '步行',
	2: '驾车',
	3: '圆形',
	4: '多边形',
}
export default constants;



