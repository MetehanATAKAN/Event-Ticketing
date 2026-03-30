"use client";

import { useState } from "react";

export function useToggle(initialValue = false) {
  const [isOpen, setIsOpen] = useState(initialValue);

  function toggle() {
    setIsOpen((current) => !current);
  }

  return { isOpen, setIsOpen, toggle };
}
