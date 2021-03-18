# Varadhi-Smartek

Interview task

## Installation
User Package Manager [git](https://github.com/Aravind-Ram/Varadhi-Smartek.git) to clone project.

## Setup & Run
    $ cd Varadhi-Smartek
    $ npm i
    $ npm start

## Used Packages

1. [React Bootstrap](https://react-bootstrap.github.io/)
2. [React Router](https://reactrouter.com/web/guides/quick-start)
3. [Formik](https://formik.org/docs/overview)
4. [Yup Validation](https://github.com/jquense/yup)
5. [React Bootstrap Table](https://github.com/react-bootstrap-table/react-bootstrap-table2)
6. [Styled Component](https://styled-components.com/)
7. [React Helmet](https://www.npmjs.com/package/react-helmet)
8. [React Flux](https://facebook.github.io/flux/docs/overview)
9. [Axios](https://www.npmjs.com/package/axios)
10. [Toastr](https://github.com/CodeSeven/toastr)

## JavaScript program
Given five positive integers, find the minimum and maximum values that can be calculated by
summing exactly four of the five integers. Then print the respective minimum and maximum values
as a single line of two space-separated long integers.

```
var sum = array[0], min = array[0], max = array[0];         
for (let i = 1; i < array.length; i++) {
    sum += array[i];
    if (min > array[i]) min = array[i];
    if (max < array[i]) max = array[i];
}  
cosole.log(`Minimum sum value ${sum - max} and Maximum sum value ${sum - min}`);
```