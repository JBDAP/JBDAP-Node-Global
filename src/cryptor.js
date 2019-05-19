/**
 * 常用加密模块
 */

import crypto from 'crypto'

/**
 * hash 加密
 */
function getHash(cypher,content){
    let hash = crypto.createHash(cypher)
    hash.update(content)
    return hash.digest('hex')
}
module.exports.getHash = getHash

/**
 * md5 加密
 */
module.exports.md5 = function(content){
    return getHash('md5',content)
}

/**
 * sha256 加密
 */
module.exports.sha256 = function(content){
    return getHash('sha256',content)
}

/**
 * sha512 加密
 */
module.exports.sha512 = function(content){
    return getHash('sha512',content)
}
