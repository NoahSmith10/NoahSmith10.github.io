/**
 * SlideShow Enhancement One - TypeScript, HTML, CSS Version
 *
 * This code implements a simple slideshow functionality using TypeScript.
 * It allows users to navigate through a series of slides containing images and text.
 * The slides data is imported from a JSON file.
 *
 * Author: Noah Smith
 * Date: 2024-06-15
 * Class: CS 499
 */

import "./style.css";
import slides from "./data/data.json";

// Slide index to track the current slide

let slideIndex = 0;

// Get DOM elements

const slideImage = document.getElementById("slide-image") as HTMLImageElement;
const slideTitle = document.getElementById("slide-title") as HTMLElement;
const slideBody = document.getElementById("slide-body") as HTMLElement;
const prevButton = document.getElementById("prev-button") as HTMLButtonElement;
const nextButton = document.getElementById("next-button") as HTMLButtonElement;

/**
 * Function to change slide content
 * @param index - Index of the slide to display
 */
const changeSlide: Function = (index: number) => {
  slideImage.src = slides[index].imageSrc;
  slideImage.alt = slides[index].title;
  slideTitle.textContent = slides[index].title;
  slideBody.textContent = slides[index].body;
};

/**
 * Increments slide index and changes slide
 * Wraps around if at the end or beginning of the slides array
 */
const nextSlide: EventListener = (): void => {
  slideIndex = (slideIndex + 1) % slides.length;
  changeSlide(slideIndex);
};

/**
 * Decrements slide index and changes slide
 * Wraps around if at the end or beginning of the slides array
 */
const prevSlide: EventListener = (): void => {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  changeSlide(slideIndex);
};

// Add listeners to navigation buttons
prevButton.addEventListener("click", prevSlide);
nextButton.addEventListener("click", nextSlide);
