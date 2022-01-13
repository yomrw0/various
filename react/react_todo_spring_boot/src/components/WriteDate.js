import React from "react";

export default function WriteDate() {
    const todayDate = new Date();
    const year = todayDate.getFullYear();
    const month = todayDate.getMonth() + 1;
    const date = todayDate.getDate();
    const day = todayDate.getDay();
    const week = new Array('일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일');
    const today = week[day];
    const writeDate = (year + '년 ' + month + '월 ' + date + '일 ' + today);

    return <h1>{writeDate}</h1>;
}