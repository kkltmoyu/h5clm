let resources = {};

//登录接口
resources.login = '/user/login';
//城市开通次数汇总
resources.permissionCitySummary = '/permission/city/summary';
//功能开通次数汇总
resources.permissioFunctionSummary = '/permission/function/summary';
//关联品牌按行业统计信息
resources.brandRelationIndustrySummary = '/brandRelation/industry/summary';
//平均关联品牌的个数
resources.brandRelationNumberAvg = '/brandRelation/number/avg';
//用户按来源汇总
resources.userSourceSummary = '/user/source/summary';
//用户按行业汇总
resources.userIndustrySummary = '/user/industry/summary';
//研究区域构建情况统计
resources.storeCreateSummary = '/store/create/summary';
//外部接口调用情况统计
resources.interfaceCallSummary = '/interface/call/summary';

//账号列表
resources.userList = '/user/list';
//账号列表下载
resources.userListDownload = '/user/list/download';

//用户详情
resources.userView = '/user/view';
//用户研究区域构建情况统计
resources.storeCreateUserSummary = '/store/create/user/summary';
//用户研究区域列表
resources.storeUserList = '/store/user/list';
//用户店铺引流列表
resources.marketingActivityUserList = '/marketingActivity/user/list';
//洞察数据下载
resources.exportPortrait = '/export/portrait';
//电商洞察数据下载
resources.exportPortraitJd = '/export/portrait/jd';
//电商洞察数据下载查询
resources.portraitJdDownlaodAble = '/portrait/jd/downlaod/able';
//店铺引流下载
resources.marketingAttachFile = '/marketing/attachFile/{taskId}/{fileName}.xlsx'

export default resources;