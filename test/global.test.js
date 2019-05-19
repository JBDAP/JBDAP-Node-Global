require('../src/global')

const JS = global.$JBDAP_SYS

test('确认 global.$JBDAP_SYS 环境', () => {
    // 标志
    expect(global.JBDAP_GLOBAL_OK).toEqual(true)
    // NiceError
    let ne = JS.newErrorI18N('TestError',null,{},[
        ['zh-cn','解析或执行指令失败'],
        ['en-us','Proceed commands failed']
    ],'zh-cn')
    expect(ne.message == '解析或执行指令失败').toEqual(true)
    ne = JS.newErrorI18N('TestError',null,{},[
        ['zh-cn','解析或执行指令失败'],
        ['en-us','Proceed commands failed']
    ],'en-us')
    expect(ne.message == 'Proceed commands failed').toEqual(true)
});
