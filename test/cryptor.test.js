const cryptor = require('../src/cryptor')

test('测试 cryptor.md5/sh256/sh512', () => {
    // 加密
    let str = '123456'
    expect(cryptor.getHash('md5',str)).toEqual(`e10adc3949ba59abbe56e057f20f883e`)
    expect(cryptor.md5(str)).toEqual(`e10adc3949ba59abbe56e057f20f883e`)
})
