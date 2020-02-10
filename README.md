# JBDAP-Node-Global

### A better nodejs global environment based on jbdap-nice-error and jbdap-makeup.

## ChangeLogs:

- remove lodash module - need it or not should be the jbdap dialect developer's decision to make
- remove knex - the same as above
- remove cryptor - jbdap-makeup has contained the same api by extending the vanila JS String Object

## **Install**

~~~
npm install jbdap-global --save
~~~

or

~~~
yarn add jbdap-global
~~~

## **API**

### What does it do to global?

- global.JBDAP_GLOBAL_OK = true
- global.$JBDAP_SYS
    - EOL - String - the line break in current nodejs environment
    - requireR - Function - require a module from the root path
    - NiceError - String - a friendly js Error class (from npm package *jbdap-nice-error*)
    - newErrorI18N(name,cause,info,dict,lang) - Function - making a new NiceError works with i18n dict
    - throwErrorI18N(name,cause,info,dict,lang) - Function - throw a NiceError
    - exec - Function - executing a promise, returns an object contains error/data
    - sleep(ms) - Function - pause for a while

## Enjoy it :-)