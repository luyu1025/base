/**
 * Created by 12394 on 2017-2-14.
 * 本文件为全局使用的函数集
 */
exports.install = function (Vue, options) {
  //测试示例
  Vue.prototype.ajax = function (){
    alert('调用成功');
  };
  //根据name获取cookie值
  Vue.prototype.getCookie = function (n) {
    if (document.cookie.length>0){
      let c_start=document.cookie.indexOf(n + "=")
      if (c_start!=-1) {
        c_start=c_start + n.length+1
        let c_end=document.cookie.indexOf(";",c_start)
        if (c_end==-1) c_end=document.cookie.length
        return unescape(document.cookie.substring(c_start,c_end))
      }
    }
    return ""
  };
  //设置cookie值，n为cookie名称，v为值，t为过期时间；
  Vue.prototype.setCookies = function (n,v,t) {
    var ed = new Date()
    ed.setDate(ed.getDate()+t)
    document.cookie = n + "=" + escape(v) +
      ((t == null) ? "" : ";expires=" + ed.toGMTString())
  };
  Vue.prototype.objLength = function (obj) {
    let cont = 0;
    for(let i in obj){
      cont++
    }
    return cont
  };
  //时间戳转换为显示时间，t:时间戳，c：年月日连接符（‘/’或‘-’），e：是否精确到时分秒,默认为true
  Vue.prototype.turnTime = function (t,c='-',e=true) {
    let date = t?(new Date(t)):(new Date())
    let time=""
    let m = (date.getMonth()<9)?('0'+(date.getMonth()+1)):(date.getMonth()+1)
    let d = (date.getDate()<10)?('0'+date.getDate()):date.getDate()
    if(e){
      let h = (date.getHours()<10)?('0'+date.getHours()):date.getHours()
      let min = (date.getMinutes()<10)?('0'+date.getMinutes()):date.getMinutes()
      let s = (date.getSeconds()<10)?('0'+date.getSeconds()):date.getSeconds()
      time = date.getFullYear()+c+m+c+d+' '+h+':'+min+':'+s
    }else {
      time = date.getFullYear()+c+m+c+d
    }
    return time
  }
  //标签名称转换
  Vue.prototype.launchFullscreen= function(element) {
    if(element.requestFullscreen) {
      element.requestFullscreen();
    } else if(element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if(element.msRequestFullscreen){
      element.msRequestFullscreen();
    } else if(element.webkitRequestFullscreen) {
      element.webkitRequestFullScreen();
    }
  }
};
