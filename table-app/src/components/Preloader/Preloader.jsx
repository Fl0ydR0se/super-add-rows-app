import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    flexDirection: "column",
    height: "calc(100vh - 64px)",
    alignItems: "center",
    display: "flex",
    justifyContent: "center"
  }
});

export const Preloader = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img alt='preloader' src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0ibWFyZ2luOiBhdXRvOyBiYWNrZ3JvdW5kOiBub25lOyBkaXNwbGF5OiBibG9jazsgc2hhcGUtcmVuZGVyaW5nOiBhdXRvOyIgd2lkdGg9IjIwMHB4IiBoZWlnaHQ9IjIwMHB4IiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiPgo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4MCw1MCkiPgo8ZyB0cmFuc2Zvcm09InJvdGF0ZSgwKSI+CjxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSI2IiBmaWxsPSIjZmY3MjdkIiBmaWxsLW9wYWNpdHk9IjEiIHRyYW5zZm9ybT0ic2NhbGUoMS4xODcyIDEuMTg3MikiPgogIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0ic2NhbGUiIGJlZ2luPSItMC44NzVzIiB2YWx1ZXM9IjEuNSAxLjU7MSAxIiBrZXlUaW1lcz0iMDsxIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlVHJhbnNmb3JtPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImZpbGwtb3BhY2l0eSIga2V5VGltZXM9IjA7MSIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIHZhbHVlcz0iMTswIiBiZWdpbj0iLTAuODc1cyI+PC9hbmltYXRlPgo8L2NpcmNsZT4KPC9nPgo8L2c+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzEuMjEzMjAzNDM1NTk2NDMsNzEuMjEzMjAzNDM1NTk2NDMpIj4KPGcgdHJhbnNmb3JtPSJyb3RhdGUoNDUpIj4KPGNpcmNsZSBjeD0iMCIgY3k9IjAiIHI9IjYiIGZpbGw9IiNmZjcyN2QiIGZpbGwtb3BhY2l0eT0iMC44NzUiIHRyYW5zZm9ybT0ic2NhbGUoMS4yNDk3IDEuMjQ5NykiPgogIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0ic2NhbGUiIGJlZ2luPSItMC43NXMiIHZhbHVlcz0iMS41IDEuNTsxIDEiIGtleVRpbWVzPSIwOzEiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGVUcmFuc2Zvcm0+CiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iZmlsbC1vcGFjaXR5IiBrZXlUaW1lcz0iMDsxIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgdmFsdWVzPSIxOzAiIGJlZ2luPSItMC43NXMiPjwvYW5pbWF0ZT4KPC9jaXJjbGU+CjwvZz4KPC9nPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUwLDgwKSI+CjxnIHRyYW5zZm9ybT0icm90YXRlKDkwKSI+CjxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSI2IiBmaWxsPSIjZmY3MjdkIiBmaWxsLW9wYWNpdHk9IjAuNzUiIHRyYW5zZm9ybT0ic2NhbGUoMS4zMTIyIDEuMzEyMikiPgogIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0ic2NhbGUiIGJlZ2luPSItMC42MjVzIiB2YWx1ZXM9IjEuNSAxLjU7MSAxIiBrZXlUaW1lcz0iMDsxIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlVHJhbnNmb3JtPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImZpbGwtb3BhY2l0eSIga2V5VGltZXM9IjA7MSIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIHZhbHVlcz0iMTswIiBiZWdpbj0iLTAuNjI1cyI+PC9hbmltYXRlPgo8L2NpcmNsZT4KPC9nPgo8L2c+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjguNzg2Nzk2NTY0NDAzNTc3LDcxLjIxMzIwMzQzNTU5NjQzKSI+CjxnIHRyYW5zZm9ybT0icm90YXRlKDEzNSkiPgo8Y2lyY2xlIGN4PSIwIiBjeT0iMCIgcj0iNiIgZmlsbD0iI2ZmNzI3ZCIgZmlsbC1vcGFjaXR5PSIwLjYyNSIgdHJhbnNmb3JtPSJzY2FsZSgxLjM3NDcgMS4zNzQ3KSI+CiAgPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJzY2FsZSIgYmVnaW49Ii0wLjVzIiB2YWx1ZXM9IjEuNSAxLjU7MSAxIiBrZXlUaW1lcz0iMDsxIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlVHJhbnNmb3JtPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImZpbGwtb3BhY2l0eSIga2V5VGltZXM9IjA7MSIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIHZhbHVlcz0iMTswIiBiZWdpbj0iLTAuNXMiPjwvYW5pbWF0ZT4KPC9jaXJjbGU+CjwvZz4KPC9nPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIwLDUwLjAwMDAwMDAwMDAwMDAxKSI+CjxnIHRyYW5zZm9ybT0icm90YXRlKDE4MCkiPgo8Y2lyY2xlIGN4PSIwIiBjeT0iMCIgcj0iNiIgZmlsbD0iI2ZmNzI3ZCIgZmlsbC1vcGFjaXR5PSIwLjUiIHRyYW5zZm9ybT0ic2NhbGUoMS40MzcyIDEuNDM3MikiPgogIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0ic2NhbGUiIGJlZ2luPSItMC4zNzVzIiB2YWx1ZXM9IjEuNSAxLjU7MSAxIiBrZXlUaW1lcz0iMDsxIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlVHJhbnNmb3JtPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImZpbGwtb3BhY2l0eSIga2V5VGltZXM9IjA7MSIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIHZhbHVlcz0iMTswIiBiZWdpbj0iLTAuMzc1cyI+PC9hbmltYXRlPgo8L2NpcmNsZT4KPC9nPgo8L2c+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjguNzg2Nzk2NTY0NDAzNTcsMjguNzg2Nzk2NTY0NDAzNTc3KSI+CjxnIHRyYW5zZm9ybT0icm90YXRlKDIyNSkiPgo8Y2lyY2xlIGN4PSIwIiBjeT0iMCIgcj0iNiIgZmlsbD0iI2ZmNzI3ZCIgZmlsbC1vcGFjaXR5PSIwLjM3NSIgdHJhbnNmb3JtPSJzY2FsZSgxLjQ5OTcgMS40OTk3KSI+CiAgPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJzY2FsZSIgYmVnaW49Ii0wLjI1cyIgdmFsdWVzPSIxLjUgMS41OzEgMSIga2V5VGltZXM9IjA7MSIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZVRyYW5zZm9ybT4KICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJmaWxsLW9wYWNpdHkiIGtleVRpbWVzPSIwOzEiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiB2YWx1ZXM9IjE7MCIgYmVnaW49Ii0wLjI1cyI+PC9hbmltYXRlPgo8L2NpcmNsZT4KPC9nPgo8L2c+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDkuOTk5OTk5OTk5OTk5OTksMjApIj4KPGcgdHJhbnNmb3JtPSJyb3RhdGUoMjcwKSI+CjxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSI2IiBmaWxsPSIjZmY3MjdkIiBmaWxsLW9wYWNpdHk9IjAuMjUiIHRyYW5zZm9ybT0ic2NhbGUoMS4wNjIyIDEuMDYyMikiPgogIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0ic2NhbGUiIGJlZ2luPSItMC4xMjVzIiB2YWx1ZXM9IjEuNSAxLjU7MSAxIiBrZXlUaW1lcz0iMDsxIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlVHJhbnNmb3JtPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImZpbGwtb3BhY2l0eSIga2V5VGltZXM9IjA7MSIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIHZhbHVlcz0iMTswIiBiZWdpbj0iLTAuMTI1cyI+PC9hbmltYXRlPgo8L2NpcmNsZT4KPC9nPgo8L2c+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzEuMjEzMjAzNDM1NTk2NDMsMjguNzg2Nzk2NTY0NDAzNTcpIj4KPGcgdHJhbnNmb3JtPSJyb3RhdGUoMzE1KSI+CjxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSI2IiBmaWxsPSIjZmY3MjdkIiBmaWxsLW9wYWNpdHk9IjAuMTI1IiB0cmFuc2Zvcm09InNjYWxlKDEuMTI0NyAxLjEyNDcpIj4KICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InNjYWxlIiBiZWdpbj0iMHMiIHZhbHVlcz0iMS41IDEuNTsxIDEiIGtleVRpbWVzPSIwOzEiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGVUcmFuc2Zvcm0+CiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iZmlsbC1vcGFjaXR5IiBrZXlUaW1lcz0iMDsxIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgdmFsdWVzPSIxOzAiIGJlZ2luPSIwcyI+PC9hbmltYXRlPgo8L2NpcmNsZT4KPC9nPgo8L2c+CjwhLS0gW2xkaW9dIGdlbmVyYXRlZCBieSBodHRwczovL2xvYWRpbmcuaW8vIC0tPjwvc3ZnPg==" />
    </div>
  );
};
