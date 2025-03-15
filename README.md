# QA Testing Playground

This project aims to help new automation test engineers practice automation testing with different web elements.

## Getting Started

### Prerequisites

- Web browser (Chrome, Firefox, Safari)
- Basic understanding of web automation tools like Selenium, Cypress, or Playwright

### Accessing the Application

1. Visit the QA Playground at [https://qaplayground.com](https://qaplayground.com)
2. No login required - the application is free to use

## Features

The playground includes various test scenarios for practicing:

- It covers all basic and advance html elements
- You can practice based on elements you like
- Form submissions
- Dynamic elements
- AJAX requests
- Tables and data grids
- Drag and drop operations
- iFrames
- Alerts and popups

## How to Use

1. Navigate to the desired test scenario using the main menu
2. Each section contains information about the elements and expected behaviors
3. Use your automation tool to interact with the elements
4. Check your test results against the expected outcomes

## Examples

```csharp
// Simple C#/Selenium example
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;

IWebDriver driver = new ChromeDriver();
driver.Navigate().GoToUrl("https://qaplayground.com");
IWebElement button = driver.FindElement(By.XPath("//h1"));
button.Click();
```

## Contributing

If you'd like to contribute additional test scenarios, please submit a pull request.

## Support

If you encounter any issues, please open a ticket in the Issues section of this repository.
