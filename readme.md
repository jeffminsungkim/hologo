<p align="center">
  <img align="center" src="https://github.com/jeffminsungkim/jeffminsungkim.github.io/blob/master/images/nm/hologo/logo_500x300.png" title="hologo" alt="logo"/>
</p>
<p align="center">
  <a href="https://travis-ci.org/jeffminsungkim/hologo">
  <img src="https://travis-ci.org/jeffminsungkim/hologo.svg?branch=master" alt="Build Status"></a>
  <a href="https://www.npmjs.com/package/hologo">
  <a href="https://codeclimate.com/github/jeffminsungkim/hologo/maintainability">
  <img src="https://api.codeclimate.com/v1/badges/8844236c4180124c0a9c/maintainability" alt="Code Climate"/></a>
  <a href="https://www.npmjs.com/package/hologo">
  <img src="https://img.shields.io/node/v/hologo.svg?label=works%20on%20node" alt="Node Version"></a>
  <a href="https://github.com/facebook/jest">
  <img src="https://img.shields.io/badge/tested_with-jest-99424f.svg" alt="Jest"></a>
  <a href="https://github.com/prettier/prettier">
  <img src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg" alt="Prettier"></a>
  <a href="https://github.com/jeffminsungkim/hologo/blob/master/license">
  <img src="https://img.shields.io/github/license/jeffminsungkim/hologo.svg" alt="License"></a>
</p>

> A lightweight (1 KB) library that is used to find out humanly readable time differences between now and past date

## Install

```
$ npm install hologo
```

_As of [NPM 5.0.0], installed modules are added as a dependency by default, so the --save option is no longer used. The other save options still exist and are listed in the [documentation] for npm install._

## When is it useful

The module will result in the same relative date outcome like StackOverflow sign-up date of users.

![Example Image](https://github.com/jeffminsungkim/jeffminsungkim.github.io/blob/master/images/nm/hologo/stackoverflow-member.png)

## Usage

> Example current date: April 18, 2018 12:00:00

### JavaScript

```js
const memberFor = require('hologo');

memberFor.hologo('2018/04/18 11:45:00');
//=> '15 minutes'

memberFor.hologo('2018/04/18 11:00:00');
//=> '1 hour'

memberFor.hologo('2018-04-18 10:00:00');
//=> '2 hours'

memberFor.hologo('2018/04/17');
//=> '1 day'

memberFor.hologo('1522800000000'); // 04/04/2018 12:00:00 AM
//=> '14 days'

memberFor.hologo('2017/05/18');
//=> '11 months'

memberFor.hologo('2017/04/18');
//=> '1 year'

memberFor.hologo('04-20-2022');
//=> '0 seconds'
```

### TypeScript

```ts
import { hologo } from 'hologo';

hologo('2017/03/18');
//=> '1 year, 1 month'

hologo('2012-02-14');
//=> '6 years, 3 months'
```

## API

### hologo(date, option)

#### date

Type: `string`

You may pass it either any valid date string or timestamp in milliseconds.

#### option

Type: `string`<br>
Default: `Date.now()`

If set, it will compare to the first parameter. Otherwise, it will stick with the current date.

## License

MIT © [JeffMinsungKim](https://jeffminsungkim.com)

[NPM 5.0.0]: https://blog.npmjs.org/post/161081169345/v500
[documentation]: https://docs.npmjs.com/cli/install
