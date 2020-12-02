import React, { useState, useCallback } from "react";

export default (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const checkSpace = (value) => {
    const space = /\s/;
    if (space.exec(value)) {
      alert("공백은 입력할 수 없습니다.");
      value.replace(space, "");
      return;
    }
  };

  const handler = useCallback((e) => {
    setValue(e.target.value);
    checkSpace(e.target.value);
  }, []);

  return [value, handler, setValue];
};

// e.target.value 오류 : Cannot read property of undefined
