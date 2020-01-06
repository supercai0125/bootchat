let api = {

    /**
     * 头像列表 -- 本地json文件加载
     */
    getAvatarList() {
        return '/bootchat/avatar/avatar.json'
    },

    /**
     * 登录接口
     */
    login() {
        return '/bootchat/login'
    },

    /**
     * 跳转至主页面
     */
    redirect(id) {
        return '/bootchat/' + id + '/chat'
    },

    /**
     * 根据ID获取用户信息
     */
    getUser(id) {
        return '/bootchat/chat/' + id
    },

    /**
     * 获取在线用户列表
     */
    getOnline() {
        return '/bootchat/chat/online/list'
    },

    /**
     * WebSocket服务器链接接口
     */
    websocket(id) {
        return 'ws://www.chaoyouka.xyz:8082/bootchat/chat/' + id
    },

    /**
     * 获取群发消息列表
     */
    getCommon() {
        return '/bootchat/chat/common'
    },

    /**
     * 获取与指定窗口的消息列表
     */
    getSelf(fromId, toId) {
        return '/bootchat/chat/self/' + fromId + '/' + toId
    },

    /**
     * 向指定窗口推送消息
     */
    pushId(toId) {
        return '/bootchat/chat/push/' + toId
    },

    /**
     * 注销用户
     */
    logout(id) {
        return '/bootchat/chat/' + id
    }
}
