import type from 'typescript';
/**
 * typescript 인터페이스 사용해보기 ✓
 *  **/

interface User {
    userName : string;
    userEmail : string;
}

// 함수 타입
interface printFunc {
    (user : User) : void;
}
// // 변수 타입 인터페이스 사용해보기
// let user : User ;
// user = {userName : "송우든", userEmail : "song@wooden"};
// console.log(user);

// 함수 파라미터 타입 인터페이스 사용해보기
const printUser : printFunc = (user : User) => {
    console.log('이름 : ', user.userName);
    console.log('이메일 : ', user.userEmail);
}

let myUser = {userName : "송우든", userEmail : "song@wooden"}
printUser(myUser);