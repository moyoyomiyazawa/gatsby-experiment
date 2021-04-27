import React from "react";
import ReactDOM from "react-dom";
import 'minireset.css'
import "./index.css";
import App from "./App";

const posts = [
  {
    title: "Next.js 9.4 Fast RefreshとIncremental Static Regeneration等のアップデート1",
    date: "2020.10.23",
    url: "https://qiita.com",
  },
  {
    title: "Next.js 9.4 Fast RefreshとIncremental Static Regeneration等のアップデート2",
    date: "2020.10.23",
    url: "https://qiita.com",
  },
  {
    title: "Next.js 9.4 Fast RefreshとIncremental Static Regeneration等のアップデート3",
    date: "2020.10.23",
    url: "https://qiita.com",
  },
];

const works = [
  {
    title: "『執筆DAYS』 リニューアル1",
    roles: ["WordPress", "React"],
    imageUrl: "/work.png",
  },
  {
    title: "『執筆DAYS』 リニューアル2",
    roles: ["WordPress", "React"],
    imageUrl: "/work.png",
  },
  {
    title: "『執筆DAYS』 リニューアル3",
    roles: ["WordPress", "React"],
    imageUrl: "/work.png",
  },
]

ReactDOM.render(
  <App posts={posts} works={works} />,
  document.getElementById("root")
);
