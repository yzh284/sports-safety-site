# 运动保护科普小站
# 这是一个介绍运动保护知识的科普网站。
'use client';
import { useState } from "react";

export default function SportsSafetyPage() {
  const [section, setSection] = useState("introduction");

  const sections = {
    introduction: {
      title: "什么是运动保护？",
      content:
        "运动保护是指在运动过程中通过各种方法预防受伤，提高运动安全和效果。"
    },
    importance: {
      title: "为什么运动保护重要？",
      content:
        "运动保护可以减少运动伤害，延长运动寿命，提升运动表现。"
    },
    methods: {
      title: "常见的运动保护方法",
      content: (
        <ul>
          <li>运动前热身和拉伸</li>
          <li>佩戴护膝、护腕等护具</li>
          <li>选择合适的运动装备</li>
          <li>合理安排训练强度</li>
        </ul>
      )
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: 'auto', padding: 20 }}>
      <h1>运动保护科普小站</h1>
      <div>
        {Object.keys(sections).map(key => (
          <button
            key={key}
            onClick={() => setSection(key)}
            style={{ margin: 5 }}
          >
            {sections[key].title}
          </button>
        ))}
      </div>
      <div style={{ marginTop: 20 }}>
        <h2>{sections[section].title}</h2>
        <div>{sections[section].content}</div>
      </div>
    </div>
  );
}
