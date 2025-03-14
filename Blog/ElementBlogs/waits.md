---
title: How to handle waits in selenium
description: "Using selenium we can handle 3 types of alerts such as: Simple Alert, Prompt Alert, & Confirmation Alert. Learn how to handle alerts using selenium with c#."
author: random coders
date: 5 march 2025
image: "/Images/blogs/b3.jpg"
keywords: "simple alert, prompt alert, confirmation alert, alerts using selenium"
testing: ["sample", "accept"]
---

## Introduction

In a real-world automation project using Selenium with C#, waits play a crucial role in handling dynamic elements and ensuring test stability. Below are the key use cases for waits in a real automation project:

To handle them we are having different methods in selenium such as -

1. accept,
2. dismiss,
3. sendKeys,
4. getText,
5. wait.
6. switchTo

## Waiting for Page to Load

📌 Scenario: Your test needs to wait until the web page is fully loaded before interacting with elements.

✅ Solution: Use driver.Manage().Timeouts().PageLoad to wait until the page loads.

```csharp
driver.Manage().Timeouts().PageLoad = TimeSpan.FromSeconds(10);
```

## Waiting for an Element to be Clickable

📌 Scenario: The element (e.g., button, link) exists in the DOM but is not yet clickable (e.g., covered by a loader).

✅ Solution: Use WebDriverWait with ExpectedConditions.ElementToBeClickable.

```csharp
WebDriverWait wait = new WebDriverWait(driver, TimeSpan.FromSeconds(10));
IWebElement button = wait.Until(ExpectedConditions.ElementToBeClickable(By.Id("submitBtn")));
button.Click();
```

## Waiting for an Element to be Visible

📌 Scenario: The element is present in the DOM but is hidden (e.g., appears after an AJAX call).

✅ Solution: Use ExpectedConditions.VisibilityOfElementLocated.

```csharp
WebDriverWait wait = new WebDriverWait(driver, TimeSpan.FromSeconds(10));
IWebElement message = wait.Until(ExpectedConditions.VisibilityOfElementLocated(By.Id("successMessage")));
Console.WriteLine(message.Text);
```

## Waiting for an Element to be Present in the DOM

📌 Scenario: The element is dynamically added to the DOM after an API call.

✅ Solution: Use ExpectedConditions.PresenceOfElementLocated.

```csharp
WebDriverWait wait = new WebDriverWait(driver, TimeSpan.FromSeconds(10));
IWebElement dynamicElement = wait.Until(ExpectedConditions.PresenceOfElementLocated(By.XPath("//div[@class='dynamic']")));
```

## Waiting for Text to Change

📌 Scenario: A text label (e.g., loading status) updates dynamically, and the test must wait until it contains the expected text.

✅ Solution: Use ExpectedConditions.TextToBePresentInElement.

```csharp
WebDriverWait wait = new WebDriverWait(driver, TimeSpan.FromSeconds(10));
wait.Until(ExpectedConditions.TextToBePresentInElementLocated(By.Id("status"), "Completed"));
```

## Waiting for a Frame to Load

📌 Scenario: The test must wait for an <iframe> to be available before switching to it.

✅ Solution: Use ExpectedConditions.FrameToBeAvailableAndSwitchToIt.

```csharp
WebDriverWait wait = new WebDriverWait(driver, TimeSpan.FromSeconds(10));
wait.Until(ExpectedConditions.FrameToBeAvailableAndSwitchToIt("iframeID"));
```

## Waiting for JavaScript Execution to Complete

📌 Scenario: Some elements may not be interactable until JavaScript execution completes.

✅ Solution: Use IJavaScriptExecutor to check for document.readyState.

```csharp
WebDriverWait wait = new WebDriverWait(driver, TimeSpan.FromSeconds(10));
wait.Until(driver => ((IJavaScriptExecutor)driver).ExecuteScript("return document.readyState").Equals("complete"));
```

## Waiting for an Element to Disappear

    📌 Scenario: A loader or spinner should disappear before proceeding.

✅ Solution: Use ExpectedConditions.InvisibilityOfElementLocated.

```csharp
WebDriverWait wait = new WebDriverWait(driver, TimeSpan.FromSeconds(10));
wait.Until(ExpectedConditions.InvisibilityOfElementLocated(By.ClassName("loading-spinner")));
```

## Waiting for AJAX Requests to Complete

📌 Scenario: The application makes an AJAX request, and the test must wait before interacting with elements.

✅ Solution: Wait for jQuery.active == 0.

```csharp
WebDriverWait wait = new WebDriverWait(driver, TimeSpan.FromSeconds(10));
wait.Until(driver => (bool)((IJavaScriptExecutor)driver).ExecuteScript("return jQuery.active == 0"));
```

## Implementing Implicit Wait (Fallback Option)

📌 Scenario: You want to set a default wait time for all element interactions.

✅ Solution: Use Implicit Wait, but prefer Explicit Waits for dynamic elements.

```csharp
driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(10);
```

> 📄 **Also Read:** [Top 10 Best Automation Practice Website](https://www.qaplayground.com/blog/top-10-best-automation-practice-website)
