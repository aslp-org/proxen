'use client';

import React, { useState, useEffect } from 'react';

const H1_SERVICES = ["Digital Brands", "Websites", "Mobile Apps", "SaaS Systems"];
const EYEBROW_SERVICES = ["Web Design Company", "Web Design Agency", "Web Design Toronto", "Web Development Agency"];

export function HeroH1Typed() {
  const [h1WordIndex, setH1WordIndex] = useState(0);
  const [h1Text, setH1Text] = useState(H1_SERVICES[0]);
  const [isH1Deleting, setIsH1Deleting] = useState(false);
  const [h1TypingSpeed, setH1TypingSpeed] = useState(100);

  useEffect(() => {
    const activeWord = H1_SERVICES[h1WordIndex];

    const handleH1Typing = () => {
      if (!isH1Deleting) {
        setH1Text(activeWord.substring(0, h1Text.length + 1));
        if (h1Text === activeWord) {
          setH1TypingSpeed(2200); 
          setIsH1Deleting(true);
        } else {
          setH1TypingSpeed(80);
        }
      } else {
        setH1Text(activeWord.substring(0, h1Text.length - 1));
        if (h1Text === "") {
          setIsH1Deleting(false);
          setH1WordIndex((prev) => (prev + 1) % H1_SERVICES.length);
          setH1TypingSpeed(400); 
        } else {
          setH1TypingSpeed(40);
        }
      }
    };

    const timer = setTimeout(handleH1Typing, h1TypingSpeed);
    return () => clearTimeout(timer);
  }, [h1Text, isH1Deleting, h1WordIndex, h1TypingSpeed]);

  return (
    <span className="hp-accent hp-typed-box">
      {h1Text}
      <span className="hp-type-cursor" aria-hidden="true">|</span>
    </span>
  );
}

export function HeroEyebrowTyped() {
  const [eyebrowWordIndex, setEyebrowWordIndex] = useState(0);
  const [eyebrowText, setEyebrowText] = useState(EYEBROW_SERVICES[0]);
  const [isEyebrowDeleting, setIsEyebrowDeleting] = useState(false);
  const [eyebrowTypingSpeed, setEyebrowTypingSpeed] = useState(100);

  useEffect(() => {
    const activeWord = EYEBROW_SERVICES[eyebrowWordIndex];

    const handleEyebrowTyping = () => {
      if (!isEyebrowDeleting) {
        setEyebrowText(activeWord.substring(0, eyebrowText.length + 1));
        if (eyebrowText === activeWord) {
          setEyebrowTypingSpeed(2500); 
          setIsEyebrowDeleting(true);
        } else {
          setEyebrowTypingSpeed(60); 
        }
      } else {
        setEyebrowText(activeWord.substring(0, eyebrowText.length - 1));
        if (eyebrowText === "") {
          setIsEyebrowDeleting(false);
          setEyebrowWordIndex((prev) => (prev + 1) % EYEBROW_SERVICES.length);
          setEyebrowTypingSpeed(300);
        } else {
          setEyebrowTypingSpeed(30); 
        }
      }
    };

    const timer = setTimeout(handleEyebrowTyping, eyebrowTypingSpeed);
    return () => clearTimeout(timer);
  }, [eyebrowText, isEyebrowDeleting, eyebrowWordIndex, eyebrowTypingSpeed]);

  return (
    <span className="hp-eyebrow-text-wrapper">
      {eyebrowText}
      <span className="hp-type-cursor" aria-hidden="true">|</span>
    </span>
  );
}
