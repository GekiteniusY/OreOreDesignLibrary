"use client";
import React, { useState } from "react";

// TODO: Chat GPTでフォームの作成方法について調べた内容を確認する
// https://chatgpt.com/share/644ef280-8526-4dc2-8871-7a3eddd7ed6f

function MultiStepForm() {
  const [formData, setFormData] = useState({
    step1: {},
    step2: {},
    step3: {},
  });

  // TODO: 型の偏光
  const handleInputChange = (step: any, key: any, value: any) => {
    // setFormData((prev) => ({
    //   ...prev,
    //   [step]: {
    //     ...prev[step],
    //     [key]: value,
    //   },
    // }));
  };

  // フォーム送信ロジック
  const handleSubmit = () => {
    console.log("フォームデータを送信:", formData);
    // ここにAPIへの送信ロジックを記述
  };

  return (
    <div>
      {/* TODO: Step1〜Step3までのコンポーネントを作成する */}
      {/* 各ステップのフォームコンポーネント */}
      {/* <Step1
        data={formData.step1}
        onChange={handleInputChange}
      />
      <Step2
        data={formData.step2}
        onChange={handleInputChange}
      />
      <Step3
        data={formData.step3}
        onChange={handleInputChange}
      /> */}
      <button onClick={handleSubmit}>送信</button>
    </div>
  );
}

export default MultiStepForm;
