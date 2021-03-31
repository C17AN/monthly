import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import { LocaleConfig } from "react-native-calendars";

LocaleConfig.locales["ko"] = {
  monthNames: [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ],
  monthNamesShort: [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ],
  dayNames: [
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
    "일요일",
  ],
  dayNamesShort: ["일", "월", "화", "수", "목", "금", "토"],
  today: "오늘",
};
LocaleConfig.defaultLocale = "ko";

const CustomCalendar = () => {
  return (
    <View>
      <Calendar
        markedDates={{
          "2021-05-16": {
            selected: true,
            marked: true,
            selectedColor: "#bbd5f0",
          },
          "2021-05-17": { marked: true },
          "2021-05-18": { marked: true, dotColor: "red", activeOpacity: 0 },
        }}
        minDate={"1970-01-01"}
        maxDate={"2050-12-31"}
        onDayPress={(day) => {
          console.log("selected day", day);
        }}
        onDayLongPress={(day) => {
          console.log("selected day", day);
        }}
        monthFormat={"yyyy MM"}
        onMonthChange={(month) => {
          console.log("month changed", month);
        }}
        hideArrows={false}
        hideExtraDays={false}
        firstDay={1}
        showWeekNumbers={false}
        onPressArrowLeft={(subtractMonth) => subtractMonth()}
        onPressArrowRight={(addMonth) => addMonth()}
        renderHeader={(date) => {
          <div>?!?!?!</div>;
        }}
        enableSwipeMonths={true}
      />
    </View>
  );
};

export default CustomCalendar;

const styles = StyleSheet.create({});
