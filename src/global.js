/**
 * 对 global 进行丰富
 */

// 防止变量污染，创建独立的命名空间
if (global.$JBDAP_SYS === undefined) global.$JBDAP_SYS = {}
// JS 是 JBDAP_SYS 的缩写
let JS = global.$JBDAP_SYS

/**
 * 自定义一个模块引用的全局方法
 * 它接受一个从根目录写起的模块路径作为参数
 * 用于取代node自带的require
 * path = '/dir/module.js'
 */
JS.requireR = function(path) {
    return require(process.cwd()+path)
}

// 换行符
import { EOL } from 'os'
JS.EOL = EOL

/**
 * 基于NiceError的一系列错误处理策略
 */
import NiceError from 'jbdap-nice-error'
JS.NiceError = NiceError

// 创建 NiceError 对象(支持多语言词典)
JS.newErrorI18N = function(name,cause,info,dict,lang){
    let message = ''
    for(let i=0; i<dict.length; i++) {
        let item = dict[i]
        if (item[0] === lang) {
            message = item[1]
            break
        }
    }
    return new JS.NiceError(
        message,
        {
            name: name,
            cause: cause,
            info: info
        }
    )
}

// 将 NiceError 对象抛出
JS.throwErrorI18N = function(name,cause,info,dict,lang){
    throw JS.newErrorI18N(name,cause,info,dict,lang)
}

// 用于封装 Promise 的返回结果
// 成功的话 error 为 null
// 失败时 error 就是捕捉到的错误
JS.exec = (promise) => {
    return promise
        .then((data) => {
            return {
                error: null,
                data: data
            }
        })
        .catch((err) => {
            return {
                error: err,
                data: null
            }
        })
}

/**
 * 全局sleep函数，将应用程序阻塞一段时间
 * 可以用 await 调用
 */
JS.sleep = (timeoutMS) => new Promise((resolve) => {
    setTimeout(resolve, timeoutMS)
})

// 挂载 lodash
import _ from 'lodash'
JS._ = _

// 挂载 crypto
import cryptor from './cryptor'
JS.cryptor = cryptor

// 挂载 knex
import knex from 'knex'
JS.knex = knex

// 标记已经挂载成功
global.JBDAP_GLOBAL_OK = true